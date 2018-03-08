import { NgModule,CUSTOM_ELEMENTS_SCHEMA }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule ,ReactiveFormsModule}        from '@angular/forms';
import {SearchComponent }   from './search.component';
import { SearchRoutingModule  } from './search-routing.module';
import {NgZorroAntdModule} from "ng-zorro-antd";

@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  imports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SearchRoutingModule,
    NgZorroAntdModule.forRoot(),
  ],
  declarations: [
    SearchComponent
  ],
  exports:[],
  providers:[]
})
export class SearchModule { }
