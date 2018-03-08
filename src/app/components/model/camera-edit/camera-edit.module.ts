import { NgModule }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { CameraEditComponent }   from './camera-edit.component';
import { CameraEditRoutingModule  } from './camera-edit-routing.module';
import {NgZorroAntdModule} from "ng-zorro-antd";

@NgModule({
  imports:      [
    CommonModule,
    FormsModule,
    CameraEditRoutingModule,
    NgZorroAntdModule.forRoot(),
  ],
  declarations: [
    CameraEditComponent
  ],
  exports:[],
  providers:[]
})
export class CameraEditModule { }
