import { NgModule }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import {MapMarkComponent }   from './map-mark.component';
import { MapMarkRoutingModule  } from './map-mark-routing.module';


@NgModule({
  imports:      [
    CommonModule,
    FormsModule,
    MapMarkRoutingModule,
  ],
  declarations: [
    MapMarkComponent
  ],
  exports:[],
  providers:[]
})
export class MapMarkModelModule{ }
