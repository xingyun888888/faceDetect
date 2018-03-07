import { NgModule }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { MobileComponent }   from './mobile.component';
import { MobileRoutingModule } from './mobile-routing.module';
import {SearchModule} from "../../components/search/search.module";


@NgModule({
  imports:      [
    CommonModule,
    FormsModule,
    MobileRoutingModule,
    SearchModule
  ],
  declarations: [
    MobileComponent
  ],
  exports:[],
  providers:[]
})
export class MobileModule { }
