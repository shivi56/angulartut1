import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  ans:number=0;
  x:string="shivani";
  
  onclick(m,n)
  {
    this.ans=parseInt(m)+parseInt(n);
    alert(m);
    alert(this.x);
  }
}
