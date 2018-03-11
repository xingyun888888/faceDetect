import { NgModule }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { LogComponent }   from './log.component';
import { LogRoutingModule } from './log-routing.module';
import {SearchModule} from "../../components/search/search.module";
import {NgZorroAntdModule} from "ng-zorro-antd";

@NgModule({
  imports:      [
    CommonModule,
    FormsModule,
    LogRoutingModule,
    NgZorroAntdModule.forRoot(),
  ],
  declarations: [
    LogComponent
  ],
  exports:[],
  providers:[]
})
export class LogModule { }
