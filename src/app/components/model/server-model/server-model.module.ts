import { NgModule }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import {ServerModelComponent }   from './server-model.component';
import { ServerModelRoutingModule  } from './server-model-routing.module';
import {NgZorroAntdModule} from "ng-zorro-antd";

@NgModule({
  imports:      [
    CommonModule,
    FormsModule,
    ServerModelRoutingModule,
    NgZorroAntdModule.forRoot(),
  ],
  declarations: [
    ServerModelComponent
  ],
  exports:[],
  providers:[]
})
export class ServerModelModule { }
