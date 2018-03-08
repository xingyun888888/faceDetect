import { NgModule }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import {FacelibModelComponent }   from './facelib-model.component';
import { FacelibModelRoutingModule  } from './facelib-model-routing.module';
import {NgZorroAntdModule} from "ng-zorro-antd";

@NgModule({
  imports:      [
    CommonModule,
    FormsModule,
    FacelibModelRoutingModule,
    NgZorroAntdModule.forRoot(),
  ],
  declarations: [
    FacelibModelComponent
  ],
  exports:[],
  providers:[]
})
export class FacelibModelModule { }
