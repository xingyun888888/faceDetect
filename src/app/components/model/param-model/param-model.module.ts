import { NgModule }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import {ParamModelComponent }   from './param-model.component';
import { ParamModelRoutingModule  } from './param-model-routing.module';
import {NgZorroAntdModule} from "ng-zorro-antd";

@NgModule({
  imports:      [
    CommonModule,
    FormsModule,
    ParamModelRoutingModule,
    NgZorroAntdModule.forRoot(),
  ],
  declarations: [
    ParamModelComponent
  ],
  exports:[],
  providers:[]
})
export class ParamModelModule { }
