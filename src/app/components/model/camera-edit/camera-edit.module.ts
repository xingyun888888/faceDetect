import { NgModule }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { CameraEditComponent }   from './camera-edit.component';
import { CameraEditRoutingModule  } from './camera-edit-routing.module';


@NgModule({
  imports:      [
    CommonModule,
    FormsModule,
    CameraEditRoutingModule,
  ],
  declarations: [
    CameraEditComponent
  ],
  exports:[],
  providers:[]
})
export class CameraEditModule { }
