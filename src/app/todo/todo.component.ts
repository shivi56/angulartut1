import { Component, OnInit } from '@angular/core';
import { task } from './task';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  tasks:task[]=[
    new task(1,'go to movie','pending'),
    new task(2,'read a book','done'),
    new task(3,'go to long drive','pending')
  ];
  arrstatus:string[]=[
    'done',
    'pending'
  ];
  

  constructor() { }

  ngOnInit() {
  }
  onDelete(item){
    this.tasks.splice(this.tasks.indexOf(item),1)
  }
  onUpdate(item){
    if(item.status=='pending')
    {
      item.status='done';
    }
    else{
      item.status='pending';
    }
  }
  onAdd(id,title,status){
    this.tasks.push(new task(id,title,status))
  }
}
