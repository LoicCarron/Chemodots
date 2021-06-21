import { Component, OnInit } from '@angular/core';
// @ts-ignore
import {main_Growing,SetAtomSelect,generateMolSketcherGrowing} from '../../../../Backend/MainJS.js';
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
  Detected_Functions:Function[]=[
    {Position:'9',Name:"Primary Amine"},
    {Position:'6',Name:"Secondary Amine"},
    {Position:'',Name:"None"},
  ];
  constructor() {}

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
    var doc =(<HTMLInputElement>document.getElementById("smilesMolecule"));
    if(doc!=null){
      this.smile=doc.value;
    }
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
    //On met à jour la valeur du smile
    var smildoc =(<HTMLInputElement>document.getElementById("smilesMolecule"));
    if(smildoc!=null){
      this.smile=smildoc.value;
    }
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

    return;
  }
  Check_Function(){
    //On met à jour la valeur du smile
    var smildoc =(<HTMLInputElement>document.getElementById("smilesMolecule"));
    if(smildoc!=null){
      this.smile=smildoc.value;
    }

  }
  ConvertRestultFunction(output:string[]){

  }


}
