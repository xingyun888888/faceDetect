import { NgModule,CUSTOM_ELEMENTS_SCHEMA }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import {NgZorroAntdModule} from "ng-zorro-antd";
import { ReportDataAnalyzeComponent }   from './report-data-analyze.component';
import { ReportDataAnalyzeRoutingModule} from './report-data-analyze-routing.module';
/**
 * 引入图表库
 */
import { NgxEchartsModule } from 'ngx-echarts';
@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports:[
    CommonModule,
    FormsModule,
    NgxEchartsModule,
    NgZorroAntdModule.forRoot(),
    ReportDataAnalyzeRoutingModule,
  ],
  declarations: [
    ReportDataAnalyzeComponent
  ],
  exports:[],
  providers:[]
})
export class ReportDataAnalyzeModule{ }
