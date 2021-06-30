import { Component, OnInit } from '@angular/core';
// @ts-ignore
import {main_Growing,SetAtomSelect,generateMolSketcherGrowing} from '../../../../Backend/MainJS.js';
import {MessageService} from "../message/message.service";

export interface Function {
  Position : string;
  Name: string;
  Bonds:string;

}
@Component({
  selector: 'app-growing',
  templateUrl: './growing.component.html',
  styleUrls: ['./growing.component.css']
})

export class GrowingComponent implements OnInit {
  smile:string='';
  Detected_Functions:Function[]=[];
  constructor(private message : MessageService) {}

  ngOnInit(): void {

    main_Growing();
  }
  //0 ypu want to show the reactions
  //1 you want to hide the reactions
  //anything else, if it's hide you show it, if it's not you hide it
  ShowReactions(Status:Number):void {
    var doc=document.getElementById("reac");
    var vThis=document.getElementById("Fleche1");
    if(doc!=null && vThis!=null) {
      if (Status==0) {
        if (doc.style.display == "none") {
          vThis.className = "fas fa-caret-up";
          doc.style.display = "block";
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
  Higlightfunction(num_sketch:Number,pos:string,bonds:string){
    SetAtomSelect(num_sketch,pos,bonds);
  }

  GenerateMol() {
    if(this.smile!='') {
      generateMolSketcherGrowing(this.smile);
    }
  }
  SetInputActive(){
    var doc = document.getElementById("scroll2");
    var doc1 = document.getElementById("InputForFunction");
    this.set_question_Function(false);
    if (doc != null) {
      if (doc.style.display == "block") {
        doc.style.display = "none";
      }
    }
    if (doc1 != null) {
      if (doc1.style.display == "none") {
        doc1.style.display = "Block";
      }
    }
    return;
  }
  LaunchPytonFindFunction() {
    this.Update_smile();
    this.set_question_Function(false);
    var doc = document.getElementById("scroll2");
    var doc1 = document.getElementById("InputForFunction");
    if (doc1 != null) {
      if (doc1.style.display == "block") {
        doc1.style.display = "none";
      }
    }
    if (doc != null) {
      if (doc.style.display == "none") {
        doc.style.display = "block";

      }
    }
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

            }
          }
      });
    }
      return;
  }
  Check_Function(){
    this.Update_smile();

    let funcdoc =(<HTMLInputElement>document.getElementById("Function name"));
    if(funcdoc!=null){
    let data = {
      funcname :funcdoc.value
    }
      this.message.sendMessage('Callscript_Check_Function', data ).subscribe(res => {
        if (res.status == "error") {
        } else {
          console.log(res);

        }
      });

    }

  }
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
  Update_smile(){
    var smildoc =(<HTMLInputElement>document.getElementById("smilesMolecule"));
    if(smildoc!=null){
      this.smile=smildoc.value;
    }
  }
  ValidateMol(){
    this.Update_smile();
    this.GenerateMol();
    this.ShowReactions(0);
    this.Detected_Functions=[];
    var doc = document.getElementById("scroll2");
    var doc1 = document.getElementById("InputForFunction");
    if (doc != null) {
      if (doc.style.display == "block") {
        doc.style.display = "none";
      }
    }
    if (doc1 != null) {
      if (doc1.style.display == "block") {
        doc1.style.display = "none";
      }
    }
    this.set_question_Function(true);


  }
  set_question_Function(Status:boolean){
    var doc = document.getElementById("Question_Function");
    if(doc!= null) {
      if (Status) {
        if (doc.style.display == "none") {
          doc.style.display = "block";
        }

      } else {

        if (doc.style.display == "block") {
          doc.style.display = "none";
        }
      }
    }
  }

}
