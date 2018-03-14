import { NgModule,CUSTOM_ELEMENTS_SCHEMA }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { StrategyComponent }   from './strategy.component';
import {StrategyRoutingModule} from './strategy-routing.module';
import {CommonUiModule} from "../../components/common.module";

@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  imports:[
    CommonModule,
    FormsModule,
    CommonUiModule,
    StrategyRoutingModule,
  ],
  declarations: [
    StrategyComponent
  ],
  exports:[],
  providers:[]
})
export class StrategyModule { }
