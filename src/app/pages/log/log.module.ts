import { NgModule }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { LogComponent }   from './log.component';
import { LogRoutingModule } from './log-routing.module';
import {NgZorroAntdModule} from "ng-zorro-antd";
import {CommonUiModule} from "../../components/common.module";

@NgModule({
  imports:      [
    CommonModule,
    FormsModule,
    CommonUiModule,
    LogRoutingModule,
  ],
  declarations: [
    LogComponent
  ],
  exports:[],
  providers:[]
})
export class LogModule { }
