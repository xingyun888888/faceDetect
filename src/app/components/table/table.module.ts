import { NgModule }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import {TableComponent }   from './table.component';
import { TableRoutingModule  } from './table-routing.module';

import {NgZorroAntdModule} from "ng-zorro-antd";


@NgModule({
  imports:      [
    CommonModule,
    FormsModule,
    TableRoutingModule,
    NgZorroAntdModule.forRoot()
  ],
  declarations: [
    TableComponent
  ],
  exports:[],
  providers:[]
})
export class TableModule { }
