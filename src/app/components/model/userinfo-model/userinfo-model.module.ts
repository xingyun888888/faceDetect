import { NgModule }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import {UserinfoModelComponent }   from './userinfo-model.component';
import { UserinfoModelRoutingModule  } from './userinfo-model-routing.module';
import {NgZorroAntdModule} from "ng-zorro-antd";

@NgModule({
  imports:      [
    CommonModule,
    FormsModule,
    UserinfoModelRoutingModule,
    NgZorroAntdModule.forRoot(),
  ],
  declarations: [
    UserinfoModelComponent
  ],
  exports:[],
  providers:[]
})
export class UserinfoModelModule { }
