import { NgModule ,CUSTOM_ELEMENTS_SCHEMA}   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { ServerComponent }   from './server.component';
import { ServerRoutingModule} from './server-routing.module';
import {ServerModelComponent} from "../../components/model/server-model/server-model.component";
import {CommonUiModule} from "../../components/common.module";

@NgModule({
  imports:[
    CommonModule,
    FormsModule,
    CommonUiModule,
    ServerRoutingModule,
  ],
  declarations: [
    ServerComponent,ServerModelComponent
  ],
  exports:[],
  providers:[]
})
export class ServerModule { }
