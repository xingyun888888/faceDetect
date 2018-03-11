import { NgModule ,CUSTOM_ELEMENTS_SCHEMA}   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule ,ReactiveFormsModule}        from '@angular/forms';
import { VedioComponent }   from './vedio.component';
import {VedioRoutingModule} from './vedio-routing.module';
import { TableComponent } from '../../components/table/table.component';
import { SearchComponent } from '../../components/search/search.component';
import {NgZorroAntdModule} from "ng-zorro-antd";
import  {CommonUiModule} from '../../components/common.module'

@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  imports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule.forRoot(),
    CommonUiModule,
    VedioRoutingModule,
  ],
  declarations: [VedioComponent],
  exports:[],
  providers:[]
})
export class VedioModule{ }
