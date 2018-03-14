import { NgModule }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { ParamComponent }   from './param.component';
import { ParamRoutingModule} from './param-routing.module';
import {NgZorroAntdModule} from "ng-zorro-antd";

@NgModule({
  imports:      [
    CommonModule,
    FormsModule,
    ParamRoutingModule,
    NgZorroAntdModule.forRoot(),
  ],
  declarations: [
    ParamComponent
  ],
  exports:[],
  providers:[]
})
export class ParamModule { }
