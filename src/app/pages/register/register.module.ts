import { NgModule }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { RegisterComponent }   from './register.component';
import { RegisterRoutingModule} from './register-routing.module';
import {SearchModule} from "../../components/search/search.module";


@NgModule({
  imports:      [
    CommonModule,
    FormsModule,
    RegisterRoutingModule,
    SearchModule
  ],
  declarations: [
    RegisterComponent
  ],
  exports:[],
  providers:[]
})
export class RegisterModule { }
