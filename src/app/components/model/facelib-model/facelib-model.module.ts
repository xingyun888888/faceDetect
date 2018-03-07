import { NgModule }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import {FacelibModelComponent }   from './facelib-model.component';
import { FacelibModelRoutingModule  } from './facelib-model-routing.module';


@NgModule({
  imports:      [
    CommonModule,
    FormsModule,
    FacelibModelRoutingModule,
  ],
  declarations: [
    FacelibModelComponent
  ],
  exports:[],
  providers:[]
})
export class FacelibModelModule { }
