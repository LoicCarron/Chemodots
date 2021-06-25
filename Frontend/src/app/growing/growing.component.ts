import { Component, OnInit } from '@angular/core';
// @ts-ignore
import {main_Growing,SetAtomSelect,generateMolSketcherGrowing} from '../../../../Backend/MainJS.js';
import {MessageService} from "../message/message.service";
import {Router} from "@angular/router";

export interface Function {
  Position : string;
  Name: string;

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
  ShowReactions():void {
    var doc=document.getElementById("reac");
    var vThis=document.getElementById("Fleche1");
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
  Higlightfunction(num_sketch:Number,pos:String){
    SetAtomSelect(num_sketch,pos);
  }

  GenerateMol() {
    this.Update_smile();
    console.log(this.smile);
    generateMolSketcherGrowing(this.smile);
  }
  SetInputActive(){
    var doc = document.getElementById("scroll2");
    var doc1 = document.getElementById("InputForFunction");
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
      this.Detected_Functions.push({ Position :'8',Name: "test"})
    }
    let data = {
      smiles : this.smile
    }
    this.message.sendMessage('Callscript', data ).subscribe(res => {
      if (res.status == "error") {
      } else {
        console.log(res);
        this.ConvertRestultFunction(res.data);
      }
    });
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
    this.Detected_Functions=[];
    this.Detected_Functions.push({Position:'',Name:"None"});
    for(let i = 0; i < output.length; i++) {
        this.Detected_Functions.push({Name: output[i],Position:output[i+=1]});
    }


  }
  Update_smile(){
    var smildoc =(<HTMLInputElement>document.getElementById("smilesMolecule"));
    if(smildoc!=null){
      this.smile=smildoc.value;
    }
  }

}
