import { NgModule,CUSTOM_ELEMENTS_SCHEMA }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule,ReactiveFormsModule }        from '@angular/forms';
import { UserComponent }   from './user.component';
import {UserRoutingModule} from './user-routing.module';
import {CommonUiModule} from "../../components/common.module";
import {UserModelComponent} from "../../components/model/user-model/user-model.component";

@NgModule({
  imports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CommonUiModule,
    UserRoutingModule,
  ],
  declarations: [
    UserComponent,UserModelComponent
  ],
  exports:[],
  providers:[]
})
export class UserModule { }
