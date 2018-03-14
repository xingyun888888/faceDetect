import { NgModule }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { ParamComponent }   from './param.component';
import { ParamRoutingModule} from './param-routing.module';
import {ParamModelComponent} from "../../components/model/param-model/param-model.component";
import {CommonUiModule} from "../../components/common.module";

@NgModule({
  imports:      [
    CommonModule,
    FormsModule,
    CommonUiModule,
    ParamRoutingModule,
  ],
  declarations: [
    ParamComponent,ParamModelComponent
  ],
  exports:[],
  providers:[]
})
export class ParamModule { }
