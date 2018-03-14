import { NgModule }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { RegisterComponent }   from './register.component';
import { RegisterRoutingModule} from './register-routing.module';
import {NgZorroAntdModule} from "ng-zorro-antd";

@NgModule({
  imports:      [
    CommonModule,
    FormsModule,
    RegisterRoutingModule,
    NgZorroAntdModule.forRoot(),
  ],
  declarations: [
    RegisterComponent
  ],
  exports:[],
  providers:[]
})
export class RegisterModule { }
