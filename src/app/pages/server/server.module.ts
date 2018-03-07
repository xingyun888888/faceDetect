import { NgModule }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { ServerComponent }   from './server.component';
import { ServerRoutingModule} from './server-routing.module';
import {SearchModule} from "../../components/search/search.module";


@NgModule({
  imports:      [
    CommonModule,
    FormsModule,
    ServerRoutingModule,
    SearchModule
  ],
  declarations: [
    ServerComponent
  ],
  exports:[],
  providers:[]
})
export class ServerModule { }
