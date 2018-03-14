import { NgModule }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { MapComponent }   from './map.component';
import { MapRoutingModule } from './map-routing.module';
import {NgZorroAntdModule} from "ng-zorro-antd";

@NgModule({
  imports:      [
    CommonModule,
    FormsModule,
    MapRoutingModule,
    NgZorroAntdModule.forRoot(),
  ],
  declarations: [
    MapComponent
  ],
  exports:[],
  providers:[]
})
export class MapModule { }
