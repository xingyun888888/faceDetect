import { NgModule }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { StrategyComponent }   from './strategy.component';
import {StrategyRoutingModule} from './strategy-routing.module';
import {SearchModule} from "../../components/search/search.module";


@NgModule({
  imports:      [
    CommonModule,
    FormsModule,
    StrategyRoutingModule,
    SearchModule
  ],
  declarations: [
    StrategyComponent
  ],
  exports:[],
  providers:[]
})
export class StrategyModule { }
