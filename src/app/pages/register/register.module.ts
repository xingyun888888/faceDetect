import { NgModule,CUSTOM_ELEMENTS_SCHEMA }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { RegisterComponent }   from './register.component';
import { RegisterRoutingModule} from './register-routing.module';
import {CommonUiModule} from "../../components/common.module";
import {RegisterModelComponent} from "../../components/model/register-model/register-model.component";

@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports:[
    CommonModule,
    FormsModule,
    CommonUiModule,
    RegisterRoutingModule,
  ],
  declarations: [
    RegisterComponent,RegisterModelComponent
  ],
  exports:[],
  providers:[]
})
export class RegisterModule { }
