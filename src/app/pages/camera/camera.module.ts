import { NgModule,CUSTOM_ELEMENTS_SCHEMA }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { CameraComponent }   from './camera.component';
import { CameraRoutingModule  } from './camera-routing.module';
import {CameraEditComponent} from "../../components/model/camera-edit/camera-edit.component";
import {CommonUiModule} from "../../components/common.module";


@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports:      [
    CommonModule,
    FormsModule,
    CommonUiModule,
    CameraRoutingModule,
  ],
  declarations: [
    CameraComponent,CameraEditComponent
  ],
  exports:[],
  providers:[]
})
export class CameraModule { }
