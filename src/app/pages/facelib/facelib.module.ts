import { NgModule }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule,ReactiveFormsModule }        from '@angular/forms';
import { FacelibComponent }   from './facelib.component';
import { FacelibRoutingModule } from './facelib-routing.module';
import {CommonUiModule} from "../../components/common.module";
import {FacelibModelComponent} from "../../components/model/facelib-model/facelib-model.component";

@NgModule({
  imports:      [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CommonUiModule,
    FacelibRoutingModule,
  ],
  declarations: [
    FacelibComponent,FacelibModelComponent
  ],
  exports:[],
  providers:[]
})
export class FacelibModule { }
