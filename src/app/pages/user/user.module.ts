import { NgModule }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { UserComponent }   from './user.component';
import {UserRoutingModule} from './user-routing.module';
import {SearchModule} from "../../components/search/search.module";


@NgModule({
  imports:      [
    CommonModule,
    FormsModule,
    UserRoutingModule,
    SearchModule
  ],
  declarations: [
    UserComponent
  ],
  exports:[],
  providers:[]
})
export class UserModule { }
