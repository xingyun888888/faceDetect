import { NgModule }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import {RegisterModelComponent }   from './register-model.component';
import { RegisterModelRoutingModule  } from './register-model-routing.module';


@NgModule({
  imports:      [
    CommonModule,
    FormsModule,
    RegisterModelRoutingModule,
  ],
  declarations: [
    RegisterModelComponent
  ],
  exports:[],
  providers:[]
})
export class RegisterModelModule { }
