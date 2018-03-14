import { NgModule,CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule ,ReactiveFormsModule}        from '@angular/forms';
import {RouterModule} from '@angular/router';
import {NgZorroAntdModule} from "ng-zorro-antd";
import { TableComponent } from './table/table.component';
import {SearchComponent} from './search/search.component';

@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports:[
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    NgZorroAntdModule.forRoot()
  ],
  declarations: [TableComponent,SearchComponent],
  exports:[ReactiveFormsModule,TableComponent,SearchComponent,NgZorroAntdModule],
  providers:[]
})
export class CommonUiModule{ }
