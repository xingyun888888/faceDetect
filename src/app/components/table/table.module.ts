import { NgModule }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import {TableComponent }   from './table.component';
import { TableRoutingModule  } from './table-routing.module';


@NgModule({
  imports:      [
    CommonModule,
    FormsModule,
    TableRoutingModule,
  ],
  declarations: [
    TableComponent
  ],
  exports:[],
  providers:[]
})
export class TableModelModule { }
