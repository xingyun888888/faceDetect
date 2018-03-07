import { NgModule }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import {NavComponent }   from './nav.component';
import { NavRoutingModule  } from './nav-routing.module';


@NgModule({
  imports:      [
    CommonModule,
    FormsModule,
    NavRoutingModule,
  ],
  declarations: [
    NavComponent
  ],
  exports:[],
  providers:[]
})
export class NavModelModule { }
