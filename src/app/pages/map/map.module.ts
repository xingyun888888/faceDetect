import { NgModule }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { MapComponent }   from './map.component';
import { MapRoutingModule } from './map-routing.module';
import {SearchModule} from "../../components/search/search.module";


@NgModule({
  imports:      [
    CommonModule,
    FormsModule,
    MapRoutingModule,
    SearchModule
  ],
  declarations: [
    MapComponent
  ],
  exports:[],
  providers:[]
})
export class MapModule { }
