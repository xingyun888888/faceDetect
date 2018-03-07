import { NgModule }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import {ServerModelComponent }   from './server-model.component';
import { ServerModelRoutingModule  } from './server-model-routing.module';


@NgModule({
  imports:      [
    CommonModule,
    FormsModule,
    ServerModelRoutingModule,
  ],
  declarations: [
    ServerModelComponent
  ],
  exports:[],
  providers:[]
})
export class ServerModelModule { }
