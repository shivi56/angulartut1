import { Component, OnInit } from '@angular/core';
import { record } from './record';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
arr:record[]=[
  new record(1,'shivani','887970808','female','abad',30000),
  new record(2,'abhi','887750958','male','mumbai',50000),
  new record(3,'janki','980970808','female','baroda',45000),
  new record(4,'pri','88870808','female','goa',70000),
 

];
  constructor() { }
  
  g:string="";
  // id:number=0;
  // n:string="";
  // mn:string="";
  // c:
  ngOnInit() {
  }

  onDelete(item){
    this.arr.splice(this.arr.indexOf(item),1)
  }
  onAdd(id,name,mobno,gen,city,fees){
    this.arr.push(new record(id,name,mobno,gen,city,fees))
  }
  onUpdate(item:record){
    if(item.gender=='female')
    {
      item.gender='male';
    }
    else{
      item.gender='female';
    }
  }
  // onselect(){
  //   if(this.a)
  //   {
  //     this.g=this.a;
  //   }
  //   else{
  //     this.g=this.b;
  //   }
  // }
}
