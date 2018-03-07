import { NgModule }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import {StrategyModelComponent }   from './strategy-model.component';
import { StrategyModelRoutingModule  } from './strategy-model-routing.module';


@NgModule({
  imports:      [
    CommonModule,
    FormsModule,
    StrategyModelRoutingModule,
  ],
  declarations: [
    StrategyModelComponent
  ],
  exports:[],
  providers:[]
})
export class StrategyModelModule { }
