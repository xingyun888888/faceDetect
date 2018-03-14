import { NgModule,CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule,ReactiveFormsModule }from '@angular/forms';
import { RecognizeComponent }   from './recognize.component';
import { RecognizeRoutingModule} from './recognize-routing.module';
import {CommonUiModule} from "../../components/common.module";
import {RecognizeModelComponent} from "../../components/model/recognize-model/recognize-model.component";

@NgModule({
  imports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CommonUiModule,
    RecognizeRoutingModule,
  ],
  declarations: [
    RecognizeComponent,RecognizeModelComponent
  ],
  exports:[],
  providers:[]
})
export class RecognizeModule { }
