import { NgModule ,CUSTOM_ELEMENTS_SCHEMA}   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule ,ReactiveFormsModule}        from '@angular/forms';
import { VedioComponent }   from './vedio.component';
import {VedioRoutingModule} from './vedio-routing.module';
import  {CommonUiModule} from '../../components/common.module'

@NgModule({
  imports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CommonUiModule,
    VedioRoutingModule,
  ],
  declarations: [VedioComponent],
  exports:[],
  providers:[]
})
export class VedioModule{ }
