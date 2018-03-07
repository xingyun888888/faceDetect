import { NgModule }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { ParamComponent }   from './param.component';
import { ParamRoutingModule} from './param-routing.module';
import {SearchModule} from "../../components/search/search.module";


@NgModule({
  imports:      [
    CommonModule,
    FormsModule,
    ParamRoutingModule,
    SearchModule
  ],
  declarations: [
    ParamComponent
  ],
  exports:[],
  providers:[]
})
export class ParamModule { }
