import { NgModule }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { MobileComponent }   from './mobile.component';
import { MobileRoutingModule } from './mobile-routing.module';
import {CommonUiModule} from "../../components/common.module";

@NgModule({
  imports:      [
    CommonModule,
    FormsModule,
    CommonUiModule,
    MobileRoutingModule,
  ],
  declarations: [
    MobileComponent
  ],
  exports:[],
  providers:[]
})
export class MobileModule { }
