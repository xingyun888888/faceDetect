import { NgModule }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { ReportDataAnalyzeComponent }   from './report-data-analyze.component';
import { ReportDataAnalyzeRoutingModule} from './report-data-analyze-routing.module';
import {SearchComponent} from "../../components/search/search.component";
import {SearchModule} from "../../components/search/search.module";


@NgModule({
  imports:      [
    CommonModule,
    FormsModule,
    ReportDataAnalyzeRoutingModule,
    SearchModule
  ],
  declarations: [
    ReportDataAnalyzeComponent
  ],
  exports:[],
  providers:[]
})
export class ReportDataAnalyzeModule { }
