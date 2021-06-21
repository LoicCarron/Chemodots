import { Component, OnInit } from '@angular/core';
// @ts-ignore
import {main_Linking,SetAtomSelect,generateMolSketcherLinking1,generateMolSketcherLinking2} from '../../../../Backend/MainJS.js';

@Component({
  selector: 'app-linking',
  templateUrl: './linking.component.html',
  styleUrls: ['./linking.component.css']
})
export class LinkingComponent implements OnInit {
  smile1:String='';
  smile2:String='';
  ngOnInit(): void {

    main_Linking();
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
      } else if (doc != null) {
        doc.style.display = "none";
        vThis.className = "fas fa-caret-down";
      }
    }
    return;
  }
  Higlightfunction(num_sketch:Number,pos:String){
    SetAtomSelect(num_sketch,pos);
  }
  GenerateMol1() {
    generateMolSketcherLinking1(this.smile1);
  }
  GenerateMol2() {
    generateMolSketcherLinking2(this.smile2);
  }
}
