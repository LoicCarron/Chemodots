import { Component, OnInit } from '@angular/core';
// @ts-ignore
import {
  main_Linking,
  SetAtomSelect,
  generateMolSketcherGrowing, generateMolSketcherLinking
} from '../../../../Backend/MainJS.js';
import {MessageService} from "../message/message.service";
import {FormArray, FormControl, FormGroup} from "@angular/forms";
import {Undesired_substructures_DATA_BASE} from "../undesired-substructures";
import {UndesiredSubstructures} from "../undesired-substructures";
export interface Function {
  Position : string;
  Name: string;
  Bonds:string;

}
export interface Rule {
  checked:boolean;
  Id : number;
  Name: string;
  Image:string,

}

@Component({
  selector: 'app-linking',
  templateUrl: './linking.component.html',
  styleUrls: ['./linking.component.css']
})
export class LinkingComponent implements OnInit {
  smile1:string='';
  smile2:string='';
  Required_substructures:string='';

  //We could use FromGroup in this case too
  Detected_Functions:Function[]=[];
  Detected_Functions1:Function[]=[];
  Selected_Function1:string="";
  ID_Selected_Function1:number=0;

  Detected_Functions2:Function[]=[];
  Selected_Function2:string="";
  ID_Selected_Function2:number=0;


  Detected_Rules:Rule[]=[];
  Detected_Rules1:Rule[]=[];
  Detected_Rules2:Rule[]=[];
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

    main_Linking();
  }
  //0 ypu want to show the reactions
  //1 you want to hide the reactions
  //anything else, if it's hide you show it, if it's not you hide it
  ShowReactions(Status:Number,num_skecth:number=0):void {
    let doc=document.getElementById("reac");
    let doc1;
    if(num_skecth==1){
      doc1=document.getElementById("FunctionsPart1");
    }
    else if (num_skecth==2){
      doc1=document.getElementById("FunctionsPart2");
    }
    let vThis=document.getElementById("Fleche1");
    let doc2=document.getElementById("RulesPart");
    let doc3=document.getElementById("FunctionsPart1");
    let doc4=document.getElementById("FunctionsPart2");
    let doc5=document.getElementById("Validate_Function");
    if(doc!=null && vThis!=null) {
      if (Status==0  && doc1!=null && doc2!=null && doc3!=null && doc4!=null && doc5!=null) {
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
        if(doc3.style.display == "block" && doc4.style.display == "block"){
            doc5.style.display = "block";
        }
      }
      else if (Status==1) {
        if (doc.style.display == "block") {
          doc.style.display = "none";
          vThis.className = "fas fa-caret-down";
        }
      }
      else if (Status==2){
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
    let doc=document.getElementById("sub");
    let vThis=document.getElementById("Fleche2");
    let doc1=document.getElementById("Undesired_sub");
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
    let doc=document.getElementById("sett");
    let vThis=document.getElementById("Fleche3");
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
  GenerateMol(nb_sketch:number) {
    if (nb_sketch == 1) {
      if (this.smile1 != '') {
        generateMolSketcherLinking(this.smile1,1);
      }
    } else {
      if (this.smile2 != '') {
        generateMolSketcherLinking(this.smile2,2);
      }
    }
  }
  //Launch the python Script
  LaunchPytonFindFunction(nb_sketch:number) {
    this.Update_smile(nb_sketch);
    let data;
    if(nb_sketch==1) {
      data = {
        smiles: this.smile1
      }
    }
    else if (nb_sketch==2){
       data= {
        smiles: this.smile2
      }


    }
    else{
      console.log("Wrong numsketch")
      return;
    }

      if(this.Detected_Functions.length==0){
        this.message.sendMessage('Callscript', data ).subscribe(res => {
          if (res.status == "error") {
          } else {
            console.log(res);
            if (res.data != null) {
              this.Detected_Functions=[];
              this.ConvertRestultFunction(res.data,nb_sketch);
              if(nb_sketch==1) {
                this.Detected_Functions1=this.Detected_Functions;
              }
              else if(nb_sketch==2){
                this.Detected_Functions2=this.Detected_Functions;

              }
              else{
                console.log("Wrong numsketch")
                return;
              }
            } else {
              window.alert("We could not find functions for your molecule, they may not be available yet or there is an error in the molecule.");
            }
          }
        });
      }

    return;
  }
  //Convert the result from the python script for function
  ConvertRestultFunction(output:string [],nb_sketch:number){
    this.Detected_Functions.push({Position:'',Name:"None",Bonds:""});
    let name:string;
    let pos:number[]=[];
    let tmp:string="";
    let numb_tmp:number=0;
    let bond:string[] =[];
    let limit:number=0;
    let smile:string=""
    if(nb_sketch==1){
      smile=this.smile1;
    }
    else{
      smile=this.smile2;
    }
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
                  if (smile[k] == "H" || !this.isAlpha(smile[k])) {
                    limit = limit + 1;
                    if (smile[k] == "H") {
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
              if (smile[k] == "H" || !this.isAlpha(smile[k])) {
                limit = limit + 1;
                if (smile[k] == "H") {
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


          this.Detected_Functions.push({Name: nametemp, Position: pos.toString(), Bonds: bond.toString()});
        }
      }
    }

  }
  //There is a problem with ngmodel so we get the smile from the textbox tu update the smile that we have in our typescript
  Update_smile(nb_sketch:number){
    let smildoc
    if(nb_sketch==1){
      smildoc=(<HTMLInputElement>document.getElementById("smilesMolecule1"));
      if(smildoc!=null){
        this.smile1=smildoc.value;
      }
    }
    else if(nb_sketch==2){
      smildoc=(<HTMLInputElement>document.getElementById("smilesMolecule2"));
      if(smildoc!=null){
        this.smile2=smildoc.value;
      }
    }
  else{
      console.log("Wrong numsketch")
      return;
    }
  }
  //When you Validate your Molecule
  ValidateMol(num_sketch:number){
    this.Update_smile(num_sketch);
    console.log(this.smile1);
    this.GenerateMol(num_sketch);
    this.ShowReactions(0,num_sketch);
    this.ShowSub(1)
    this.Detected_Functions=[];
    this.LaunchPytonFindFunction(num_sketch)


  }
  //When you validate which function is targeted
  //Attention ici on test avec juste le premier smile on s'occupera après du reste
  ValidateFunction(nb_sketch:number) {


    //Generate Reactions :
    if(this.Selected_Function1=="" || this.Selected_Function2==""){
      window.alert("Please select a targeted function or none before generate reactions rules.");
    }
    else {
      let doc = document.getElementById("RulesPart");
      if (doc != null) {
        if (doc.style.display == "none") {
          doc.style.display = "block";
        }
      }
      let data = {funcname:this.Selected_Function1}
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
    /*
    let data = {
      smiles : this.smile,
      funcname:this.Selected_Function
    };
    this.message.sendMessage('Callscript_UndSub', data ).subscribe(res => {
      if (res.status == "error") {
      } else {
        console.log(res);
        if (res.data != null) {
          this.Required_substructures=res.data[0];
          this.Remove_Sub(res.data[1]);

        }
      }
    });
*/
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
    let code, i, len;

    for (i = 0, len = str.length; i < len; i++) {
      code = str.charCodeAt(i);
      if (!(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
        return false;
      }
    }
    return true;
  };
  /*
  Remove_Sub(output:string){
    //Mettre L'id de la fonction choisit.
    let limit=0;
    let numb_tmp=limit;
    //test
    for(let k=0;k<=limit;k++) {
      if (this.smile[k] == "H" || !this.isAlpha(this.smile[k])) {
        limit = limit + 1;
        if (this.smile[k] == "H") {
          numb_tmp = numb_tmp + 1;

        }
      }
    }


  }
   */
}
