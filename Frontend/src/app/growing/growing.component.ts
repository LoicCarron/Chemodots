import { Component, OnInit } from '@angular/core';
// @ts-ignore
import {main_Growing,SetAtomSelect,generateMolSketcherGrowing} from '../../../../Backend/MainJS.js';
import {MessageService} from "../message/message.service";
import {FormArray, FormControl, FormGroup} from "@angular/forms";
import {logger} from "codelyzer/util/logger";

export interface Function {
  Position : string;
  Name: string;
  Bonds:string;

}
export interface Rule {
  checked:boolean;
  Id : number;
  Name: string;

}
@Component({
  selector: 'app-growing',
  templateUrl: './growing.component.html',
  styleUrls: ['./growing.component.css']
})

export class GrowingComponent implements OnInit {
  smile:string='';

  //We could use FromGroup in this case too
  Detected_Functions:Function[]=[];
  Selected_Function:string="";


  Detected_Rules:Rule[]=[];
  Form_Rules!:FormGroup;
  Selected_Rules:Rule[]=[];


  constructor(private message : MessageService) {}

  ngOnInit(): void {
    this.Form_Rules=new FormGroup({
      rules: new FormArray([])});
    //Lauch the sketcher
    main_Growing();
  }
  //0 ypu want to show the reactions
  //1 you want to hide the reactions
  //anything else, if it's hide you show it, if it's not you hide it
  ShowReactions(Status:Number):void {
    var doc=document.getElementById("reac");
    var doc1=document.getElementById("FunctionsPart");
    var vThis=document.getElementById("Fleche1");
    var doc2=document.getElementById("RulesPart");
    if(doc!=null && vThis!=null && doc1!=null && doc2!=null) {
      if (Status==0) {
        if (doc.style.display == "none") {
          vThis.className = "fas fa-caret-up";
          doc.style.display = "block";
        }
        if (doc1.style.display == "none") {
          doc1.style.display = "block";
        }
        if (doc2.style.display == "block") {
          doc2.style.display = "none";
        }
      }
      else if (Status==1) {
          if (doc.style.display == "block") {
            doc.style.display = "none";
            vThis.className = "fas fa-caret-down";
          }
        }
        else{
          if (doc.style.display == "none") {
            vThis.className = "fas fa-caret-up";
            doc.style.display = "block"
          }
            else{
              vThis.className = "fas fa-caret-down";
              doc.style.display = "none";
            }
        }
      }
    return;
  }
  //Show the Substructure part
  ShowSub():void {
    var doc=document.getElementById("sub");
    var vThis=document.getElementById("Fleche2");
    if(doc!=null && vThis!=null) {
      if (doc.style.display == "none") {
        vThis.className = "fas fa-caret-up";
        doc.style.display = "block";
      } else {
        doc.style.display = "none";
        vThis.className = "fas fa-caret-down";
      }
    }
    return;
  }
  //Show the sett part
  ShowSett():void {
    var doc=document.getElementById("sett");
    var vThis=document.getElementById("Fleche3");
    if(doc!=null && vThis!=null) {
      if (doc.style.display == "none") {
        vThis.className = "fas fa-caret-up";
        doc.style.display = "block";
      } else {
        doc.style.display = "none";
        vThis.className = "fas fa-caret-down";
      }
    }
    return;
  }
  //Highlight on the sketcher
  Highlightfunction(num_sketch:Number,pos:string,bonds:string){
    SetAtomSelect(num_sketch,pos,bonds);
  }

  //GenerateMol button
  GenerateMol() {
    if(this.smile!='') {
      generateMolSketcherGrowing(this.smile);
    }
  }
  //Launch the python Script
  LaunchPytonFindFunction() {
    this.Update_smile();
    let data = {
      smiles : this.smile
    }
    if(this.Detected_Functions.length==0){
      this.message.sendMessage('Callscript', data ).subscribe(res => {
        if (res.status == "error") {
        } else {
          console.log(res);
          if (res.data != null) {
            this.ConvertRestultFunction(res.data);
          } else {
            window.alert("We could not find functions for your molecule, they may not be available yet or there is an error in the molecule.");
            }
          }
      });
    }
      return;
  }
  //Convert the result from the python script for function
  ConvertRestultFunction(output:string []){
    this.Detected_Functions.push({Position:'',Name:"None",Bonds:""});
    let name:string;
    let pos:number[]=[];
    let tmp:string="";
    let bond:string[]
      =[];
    for(let i = 0; i < output.length; i++) {

        name=output[i];
        i+=1;
        let j = 0;
        let cpt=0;
      while (j<output[i].length) {
        tmp = "";
        pos = [];
        bond = [];
        let nametemp:string=name;
        if(cpt!=0){
          nametemp+=cpt;
        }


        while ((j<output[i].length)&& ((isNaN(+output[i][j])) ||(output[i][j] == " ") || (output[i][j] == ","))) {
          j++;
        }
        if(j<output[i].length) {
          while ((+output[i][j] >= 0 && +output[i][j] <= 9) || output[i][j] == ",") {
            if (output[i][j] == "," || output[i][j] == " ") {
              if (tmp != "") {
                pos.push(Number(tmp) + 1);
                tmp = "";
              }
            } else {
              tmp += output[i][j]
            }
            j++;
          }
          if (tmp != "") {
            pos.push(Number(tmp) + 1);
          }
          for (let k = 0; k < pos.length; k++) {
            for (let h = 0; h < pos.length; h++) {
              if (k != h) {
                bond.push(pos[k] + "-" + pos[h]);
              }
            }
          }
          cpt += 1;


          this.Detected_Functions.push({Name: nametemp, Position: pos.toString(), Bonds: bond.toString()});
        }
      }
    }

  }
  //There is a problem with ngmodel so we get the smile from the textbox tu update the smile that we have in our typescript
  Update_smile(){
    var smildoc =(<HTMLInputElement>document.getElementById("smilesMolecule"));
    if(smildoc!=null){
      this.smile=smildoc.value;
    }
  }
  //When you Validate your Molecule
  ValidateMol(){
    this.Update_smile();
    this.GenerateMol();
    this.ShowReactions(0);
    this.Detected_Functions=[];
    this.LaunchPytonFindFunction()


  }
  //When you validate which function is targeted
  ValidateFunction() {
    //Generate Reactions :
    if(this.Selected_Function==""){
      window.alert("Please select a targeted function or none before generate reactions rules.");
    }
      else {
      var doc = document.getElementById("RulesPart");
      if (doc != null) {
        if (doc.style.display == "none") {
          doc.style.display = "block";
        }
      }
      let data = {funcname: this.Selected_Function}
      this.message.sendMessage('Callscript2', data).subscribe(res => {
        if (res.status == "error") {
        } else {
          console.log(res);
          if (res.data != null) {

            this.ConvertRestultRules(res.data);
            // get array control
            //
            this.Form_Rules = new FormGroup({
              rules: new FormArray([])
            });
            const formArray = this.Form_Rules.get('rules') as FormArray;
            // loop each existing value options from database
            this.Detected_Rules.forEach(rule => {
              // generate control Group for each option and push to formArray
              formArray.push(new FormGroup({
                name: new FormControl(rule.Name),
                Id: new FormControl(rule.Id),
                checked: new FormControl(rule.checked)

              }))
            })
          } else {

          }
        }
      });


      //Generate required Substructure
      this.GenerateSub();
    }
  }
  ConvertRestultRules(output:string []){
    let name:string="";
    let id:number;
    let tmp:string="";
    this.Detected_Rules=[];
    for(let i = 0; i < output.length; i++) {
      let j = 0;
        name = "";
        tmp="";
          while ((+output[i][j] >= 0 && +output[i][j] <= 9)) {
              tmp += output[i][j]
              j++;
            }
            id=Number(tmp);
          while(output[i][j]==" " || output[i][j]==":"){
            j++;
          }
          while(j<output[i].length){
            name+=output[i][j];
            j++;
          }
          this.Detected_Rules.push({checked:false,Id: id,Name:name});
    }

  }
    GenerateSub(){}
    ValidateReactions(){
      this.Selected_Rules=this.Form_Rules.value.rules.filter((f: { checked: any; }) => f.checked);
      console.log(this.Selected_Rules);
      //Ici mettre un truc qui vérifie que Selected rules n'est pas vide
      if(this.Selected_Rules.length==0){
        window.alert("Please choose at least one reaction rule.");
      }
    }
    //For the HTML
  get FormRules() { return <FormArray>this.Form_Rules.get('rules'); }
}
