import { Component, OnInit } from '@angular/core';
import { pro } from './pro';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  arr:pro[]=[
    new pro(1,'dell-i3',30000,'dell',15,'booked'),
    new pro(2,'dell-i5',50000,'dell',9,'booked'),
    new pro(3,'lenevo-i5',45000,'lenevo',20,'cancel'),
    new pro(4,'hp-i7',60000,'hp',18,'cancel')


  ];
  a:number[]=[

  ];
  constructor() { }

  ngOnInit() {
  }
  onDelete(item){
    this.arr.splice(this.arr.indexOf(item),1);
  }
  onAdd(id,name,price,mfg,soh,order){
    this.arr.push(id,name,price,mfg,soh,order);
  }
  onUpdate(item:pro){
    if(item.order=='booked')
    {
      item.order='cancel';
    }
    else{
      item.order='booked';
    }
  }
  // onno(){
  // for (var i = 0; i < a.length; i++) {
  //   var element = a[i];

  // }

  // }
}





