import { NgModule }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';

import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CameraComponent }   from './camera.component';
import { CameraRoutingModule  } from './camera-routing.module';
import {CameraEditModule} from "../../components/model/camera-edit/camera-edit.module";
import {SearchModule} from "../../components/search/search.module";


@NgModule({
  imports:      [
    CommonModule,
    FormsModule,
    CameraRoutingModule,
    SearchModule,
    NgZorroAntdModule.forRoot(),
  ],
  declarations: [
    CameraComponent
  ],
  exports:[],
  providers:[]
})
export class CameraModule { }
