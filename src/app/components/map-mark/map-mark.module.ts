import { NgModule }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import {MapMarkComponent }   from './map-mark.component';
import { MapMarkRoutingModule  } from './map-mark-routing.module';
import {NgZorroAntdModule} from "ng-zorro-antd";


@NgModule({
  imports:      [
    CommonModule,
    FormsModule,
    MapMarkRoutingModule,
    NgZorroAntdModule.forRoot(),
  ],
  declarations: [
    MapMarkComponent
  ],
  exports:[],
  providers:[]
})
export class MapMarkModelModule{ }
