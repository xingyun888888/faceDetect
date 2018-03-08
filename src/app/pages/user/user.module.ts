import { NgModule,CUSTOM_ELEMENTS_SCHEMA }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { UserComponent }   from './user.component';
import {UserRoutingModule} from './user-routing.module';
import {SearchModule} from "../../components/search/search.module";
import {NgZorroAntdModule} from "ng-zorro-antd";

@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  imports:[
    CommonModule,
    FormsModule,
    UserRoutingModule,
    SearchModule,
    NgZorroAntdModule.forRoot(),
  ],
  declarations: [
    UserComponent
  ],
  exports:[],
  providers:[]
})
export class UserModule { }
