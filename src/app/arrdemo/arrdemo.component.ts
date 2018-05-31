import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrdemo',
  templateUrl: './arrdemo.component.html',
  styleUrls: ['./arrdemo.component.css']
})
export class ArrdemoComponent implements OnInit {

  constructor() { }
  no1:number=0;
  no2:number=0;
  res:number=0;
  arr:string="shivani";
  flag:boolean=true;
  str:string[]=[
    "shivani",
    "janki",
    "bhumi"
  ]
  ngOnInit() {
  }
onclick(){
  this.res=this.no1+this.no2;
}
onPrint(){
  if(this.flag)
  {
    this.flag=false;

  }
  else{
    this.flag=true;
  }
}
  
}
