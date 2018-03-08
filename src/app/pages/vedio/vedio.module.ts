import { NgModule ,CUSTOM_ELEMENTS_SCHEMA}   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { VedioComponent }   from './vedio.component';
import {VedioRoutingModule} from './vedio-routing.module';
import {SearchModule} from "../../components/search/search.module";
import {NgZorroAntdModule} from "ng-zorro-antd";

@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  imports:[
    CommonModule,
    FormsModule,
    VedioRoutingModule,
    SearchModule,
    NgZorroAntdModule.forRoot(),
  ],
  declarations: [
    VedioComponent
  ],
  exports:[],
  providers:[]
})
export class VedioModule{ }
