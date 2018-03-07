import { NgModule }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { VedioComponent }   from './vedio.component';
import {VedioRoutingModule} from './vedio-routing.module';
import {SearchModule} from "../../components/search/search.module";


@NgModule({
  imports:      [
    CommonModule,
    FormsModule,
    VedioRoutingModule,
    SearchModule
  ],
  declarations: [
    VedioComponent
  ],
  exports:[],
  providers:[]
})
export class VedioModule{ }
