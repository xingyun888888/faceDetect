import { NgModule }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';


import { FacelibComponent }   from './facelib.component';
import { FacelibRoutingModule } from './facelib-routing.module';
import {FacelibModelModule} from "../../components/model/facelib-model/facelib-model.module";
import {SearchModule} from "../../components/search/search.module";
import {NgZorroAntdModule} from "ng-zorro-antd";

@NgModule({
  imports:      [
    CommonModule,
    FormsModule,
    FacelibRoutingModule,
    FacelibModelModule,
    SearchModule,
    NgZorroAntdModule.forRoot(),
  ],
  declarations: [
    FacelibComponent
  ],
  exports:[],
  providers:[]
})
export class FacelibModule { }
