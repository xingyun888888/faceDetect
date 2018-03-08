import { NgModule,CUSTOM_ELEMENTS_SCHEMA }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { ReportDataAnalyzeComponent }   from './report-data-analyze.component';
import { ReportDataAnalyzeRoutingModule} from './report-data-analyze-routing.module';
import {SearchComponent} from "../../components/search/search.component";
import {SearchModule} from "../../components/search/search.module";
import {NgZorroAntdModule} from "ng-zorro-antd";

@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  imports:      [
    CommonModule,
    FormsModule,
    ReportDataAnalyzeRoutingModule,
    SearchModule,
    NgZorroAntdModule.forRoot(),
  ],
  declarations: [
    ReportDataAnalyzeComponent
  ],
  exports:[],
  providers:[]
})
export class ReportDataAnalyzeModule { }
