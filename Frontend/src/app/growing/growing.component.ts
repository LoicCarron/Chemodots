import { Component, OnInit } from '@angular/core';
// @ts-ignore
import {main_Growing,SetAtomSelect,generateMolSketcherGrowing} from '../../../../Backend/MainJS.js';
import {MessageService} from "../message/message.service";
import {FormArray, FormControl, FormGroup} from "@angular/forms";
import {Undesired_substructures_DATA_BASE} from "../undesired-substructures";
import {UndesiredSubstructures} from "../undesired-substructures";
import {compareSegments} from "@angular/compiler-cli/src/ngtsc/sourcemaps/src/segment_marker";


export interface Function {
  Position : string;
  Name: string;
  Name_Func:string;
  Bonds:string;
  //If there is more than one function with the same name this number will be 1 for the second occurence
  ID:number;

}
export interface Rule {
  checked:boolean;
  Id : number;
  Name: string;
  Image:string,

}


@Component({
  selector: 'app-growing',
  templateUrl: './growing.component.html',
  styleUrls: ['./growing.component.css']
})

export class GrowingComponent implements OnInit {
  smile:string='';
  Required_substructures:string='';

  Detected_Functions:Function[]=[];
  Selected_Function:string="";


  Detected_Rules:Rule[]=[];
  Form_Rules!:FormGroup;
  Selected_Rules:Rule[]=[];

  Selected_Undesired_Substructures:UndesiredSubstructures[]=[];
  Undesired_Substructures:UndesiredSubstructures[]=[];
  Form_UndSub!:FormGroup;


  constructor(private message : MessageService) {}

  ngOnInit(): void {
    this.Undesired_Substructures=Undesired_substructures_DATA_BASE;
    this.Form_Rules=new FormGroup({
      rules: new FormArray([])});

    this.Form_UndSub=new FormGroup({
      UndSub: new FormArray([])});
    const formArray = this.Form_UndSub.get('UndSub') as FormArray;
    // loop each existing value options from database
    this.Undesired_Substructures.forEach(UndSub => {
      // generate control Group for each option and push to formArray
      formArray.push(new FormGroup({
        Name: new FormControl(UndSub.Name),
        Smart: new FormControl(UndSub.Smart),
        checked: new FormControl(false)

      }))
    })


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
  ShowSub(Status:Number):void {
    var doc=document.getElementById("sub");
    var vThis=document.getElementById("Fleche2");
    var doc1=document.getElementById("Undesired_sub");
    if (doc != null && vThis != null && doc1!=null) {

    if (Status==0) {
      if (doc.style.display == "none") {
        vThis.className = "fas fa-caret-up";
        doc.style.display = "block";
      }
      if (doc1.style.display == "none") {
        doc1.style.display = "block";
      }
    }
      else if (Status==1) {
        if (doc.style.display == "block") {
          doc.style.display = "none";
          vThis.className = "fas fa-caret-down";
        }
      }
      else {
          if (doc.style.display == "none") {
            vThis.className = "fas fa-caret-up";
            doc.style.display = "block";
          } else {
            doc.style.display = "none";
            vThis.className = "fas fa-caret-down";
          }
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
            this.Detected_Functions=[];
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
    this.Detected_Functions.push({Position:'',Name:"None",Name_Func:'',Bonds:"",ID:0});
    let name:string;
    let pos:number[]=[];
    let tmp:string="";
    let numb_tmp:number=0;
    let bond:string[] =[];
    let limit:number=0;
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
          nametemp+='_'+cpt;
        }

        //We search the first number
        while ((j<output[i].length)&& ((isNaN(+output[i][j])) ||(output[i][j] == " ") || (output[i][j] == ","))) {
          j++;
        }
        //Check if we are not at the end of the string
        if(j<output[i].length) {

          while ((+output[i][j] >= 0 && +output[i][j] <= 9) || output[i][j] == ",") {
            if (output[i][j] == "," || output[i][j] == " " ) {
              if (tmp != "") {
                 limit=Number(tmp);
                 numb_tmp=limit;
                //Move the index of the function in the case with explicit H
                let k=0
                while(k<=limit){
                  if (this.smile[k] == "H" || !this.isAlpha(this.smile[k]) ) {
                    limit = limit + 1;
                    if (this.smile[k] == "H") {
                      numb_tmp = numb_tmp + 1;

                    }
                  }
                  k++;
                }
                pos.push(numb_tmp + 1);

                tmp = "";
              }
            } else {
              tmp += output[i][j]
            }
            j++;
          }

          if (tmp != "") {
            limit=Number(tmp);
            numb_tmp=limit;
            //test
            let k=0
            while(k<=limit){
              if (this.smile[k] == "H" || !this.isAlpha(this.smile[k])) {
                limit = limit + 1;
                if (this.smile[k] == "H") {
                  numb_tmp = numb_tmp + 1;

                }
              }
              k++;
            }

            pos.push(numb_tmp + 1);
          }
          for (let k = 0; k < pos.length; k++) {
            for (let h = 0; h < pos.length; h++) {
              if (k != h) {
                bond.push(pos[k] + "-" + pos[h]);
              }
            }
          }
          cpt += 1;


          this.Detected_Functions.push({Name: nametemp, Position: pos.toString(),Name_Func:name, Bonds: bond.toString(),ID:cpt});
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
  ValidateMol() {
    this.Update_smile();
    this.GenerateMol();
    this.ShowReactions(0);
    this.ShowSub(1)
    this.Detected_Functions = [];
    this.LaunchPytonFindFunction();
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
          this.Detected_Rules.push({checked:false,Id: id,Name:name,Image:"assets/Images_Rules/Rules"+id+".png"});
    }

  }
    GenerateSub(){
      let data = {
        smiles : this.smile,
        funcname:this.Selected_Function
      };
        this.message.sendMessage('Callscript_UndSub', data ).subscribe(res => {
          if (res.status == "error") {
          } else {
            console.log(res);
            if (res.data != null) {
              //this.Required_substructures=res.data[0];

              this.Remove_Sub(res.data);

            }
          }
        });

    }
    ValidateReactions(){
      this.Selected_Rules=this.Form_Rules.value.rules.filter((f: { checked: any; }) => f.checked);
      console.log(this.Selected_Rules);
      //Ici mettre un truc qui vérifie que Selected rules n'est pas vide
      if(this.Selected_Rules.length==0){
        window.alert("Please choose at least one reaction rule.");
      }
      else{
        this.ShowSub(0);
      }

    }
    //For the HTML
  get FormRules() { return <FormArray>this.Form_Rules.get('rules'); }
  get FormUndSub() { return <FormArray>this.Form_UndSub.get('UndSub'); }
  ValidateUndSub() {
    this.Selected_Undesired_Substructures=this.Form_UndSub.value.UndSub.filter((f: { checked: any; }) => f.checked);
    console.log(this.Selected_Undesired_Substructures);

  }
  isAlpha(str:string) {
    var code, i, len;

    for (i = 0, len = str.length; i < len; i++) {
      code = str.charCodeAt(i);
      if (!(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
        return false;
      }
    }
    return true;
  };

  Remove_Sub(res:string []){
    //Mettre L'id de la fonction choisit.
    let i=0;
    let nb_remove=1;
    let nb_removed=0;
    let selectedfunc=res[0]
    let tmp="";
    let numb_tmp=0;
    let remove=res[2];
    let j=0;
    this.Required_substructures="";
    //Faire dans le cas où il existe deux fois la même fonction
    while ((j<res[1].length)&& ((isNaN(+res[1][j])) ||(res[1][j] == " ") || (res[1][j] == ","))) {
      j++;
    }
    //Check if we are not at the end of the string
    if(j<res[1].length) {

      while ((+res[1][j] >= 0 && +res[1][j] <= 9)) {
        tmp += res[1][j];
        j++;
      }
    }
      numb_tmp=Number(tmp);
    numb_tmp++;
    console.log(numb_tmp);
    /*
    while (this.Detected_Functions[i].Name!=this.Selected_Function){
      i++;
    }
    while ((j<this.Detected_Functions[i].Position.length)&& ((isNaN(+this.Detected_Functions[i].Position[j])) ||(this.Detected_Functions[i].Position[j] == " ") || (this.Detected_Functions[i].Position[j] == ","))) {
      j++;
    }
    //Check if we are not at the end of the string
    if(j<this.Detected_Functions[i].Position.length) {

      while ((+this.Detected_Functions[i].Position[j] >= 0 && +this.Detected_Functions[i].Position[j] <= 9)) {
        tmp += this.Detected_Functions[i].Position[j];
        j++;
      }
    }
    numb_tmp=Number(tmp);
    console.log(numb_tmp);

     */
    //test
    let k=0;
    //On s'arrête avant au cas où il faut enlever un H avant
    if((+remove[0]>1 && +remove[0]<9)  && remove[1]=="H"){
      numb_tmp=numb_tmp+1;
    }
    while(k<numb_tmp-1){
      if (!this.isAlpha(selectedfunc[k])) {
          numb_tmp=numb_tmp + 1;

      }
      this.Required_substructures+=selectedfunc[k];
      k++;
    }
    console.log(this.Required_substructures);
    i=0;

    while(i<remove.length){
      nb_remove=1;

      if(+remove[i] >= 0 && +remove[i]<= 9){
        nb_remove=Number(remove[i]);
        i++;
      }
      //On augmente car on est déjà aller jusqu'à numb-tmp dans le while au dessus

      console.log(remove[i]);
      while(selectedfunc[numb_tmp]!=remove[i] && selectedfunc[numb_tmp+1]!=remove[i] && numb_tmp<selectedfunc.length){
        console.log(selectedfunc[numb_tmp]);
        this.Required_substructures+=selectedfunc[numb_tmp];
        numb_tmp++;

      }
      console.log(this.Required_substructures);

      nb_removed=0;
      while ((((nb_removed<nb_remove) ||(!this.isAlpha(selectedfunc[numb_tmp]) ))&& numb_tmp<selectedfunc.length)){
        console.log(selectedfunc[numb_tmp])
        if(selectedfunc[numb_tmp]==remove[i]){
          nb_removed++;
        }
        numb_tmp++;

      }
      console.log(this.Required_substructures);

      i++;
    }
    console.log(this.Required_substructures);
    for(numb_tmp;numb_tmp<selectedfunc.length;numb_tmp++){
      this.Required_substructures+=selectedfunc[numb_tmp];
    }
    console.log(this.Required_substructures);


  }


}
