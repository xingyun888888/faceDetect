import { NgModule,CUSTOM_ELEMENTS_SCHEMA }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule ,ReactiveFormsModule}        from '@angular/forms';
import {NgZorroAntdModule} from "ng-zorro-antd";
import { TableComponent } from './table/table.component';
import {SearchComponent} from './search/search.component';

@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  imports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule.forRoot(),
  ],
  declarations: [TableComponent,SearchComponent],
  exports:[TableComponent,SearchComponent],
  providers:[]
})
export class CommonUiModule{ }
