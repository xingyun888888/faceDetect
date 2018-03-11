import { NgModule,CUSTOM_ELEMENTS_SCHEMA }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { StrategyComponent }   from './strategy.component';
import {StrategyRoutingModule} from './strategy-routing.module';
import {SearchModule} from "../../components/search/search.module";
import {NgZorroAntdModule} from "ng-zorro-antd";

@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  imports:[
    CommonModule,
    FormsModule,
    SearchModule,
    NgZorroAntdModule.forRoot(),
    StrategyRoutingModule,
  ],
  declarations: [
    StrategyComponent
  ],
  exports:[],
  providers:[]
})
export class StrategyModule { }
