import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { CalcComponent } from './calc/calc.component';
import { TodoComponent } from './todo/todo.component';
import { ArrdemoComponent } from './arrdemo/arrdemo.component';
import { StudentComponent } from './student/student.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    CalcComponent,
    TodoComponent,
    ArrdemoComponent,
    StudentComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
