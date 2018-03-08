import { NgModule }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import {UserModelComponent }   from './user-model.component';
import { UserModelRoutingModule  } from './user-model-routing.module';
import {NgZorroAntdModule} from "ng-zorro-antd";

@NgModule({
  imports:      [
    CommonModule,
    FormsModule,
    UserModelRoutingModule,
    NgZorroAntdModule.forRoot(),
  ],
  declarations: [
    UserModelComponent
  ],
  exports:[],
  providers:[]
})
export class UserModelModule{ }
