import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {
  res:string="";
  x:string="";
  no1:number;
  no2:number;
  f:number=0;
  ans:number=0;
  y="";

  constructor() { }

  ngOnInit() {
  }
  onclickone(){
    this.y+="1";

  }
  onclicktwo(){
    this.y+="2";
  }
  onclickthree(){
    this.y+="3";
  }
  onclickfour(){
    this.y+="4";
  }
  onclickfive(){
    this.y+="5";
  }
  onclicksix(){
    this.y+="6";
  }
  onclickseven(){
    this.y+="7";
  }
  onclickeight(){
    this.y+="8";
  }
  onclicknine(){
    this.y+="9";
  }
  onclickzero(){
    this.y+="0";
  }
  onclickplus(){
    this.no1=parseInt(this.y);
    this.y="";
    this.f=1;
  }
  onclickminus(){
    this.no1=parseInt(this.y);
    this.y="";
    this.f=2;
  }
  onclickmul(){
    this.no1=parseInt(this.y);
    this.y="";
    this.f=3;
  }
  onclickdivison(){
    this.no1=parseInt(this.y);
    this.y="";
    this.f=4;
  }
  onclickeq(){
    this.no2=parseInt(this.y)
    if(this.f==1){
      this.ans=this.no1+this.no2;
      this.y=this.ans+"";
    }
    if(this.f==2){
      this.ans=this.no1-this.no2;
      this.y=this.ans+"";
    }
    if(this.f==3){
      this.ans=this.no1*this.no2;
      this.y=this.ans+"";
    }
    if(this.f==4){
      this.ans=this.no1/this.no2;
      this.y=this.ans+"";
    }
  }
}
