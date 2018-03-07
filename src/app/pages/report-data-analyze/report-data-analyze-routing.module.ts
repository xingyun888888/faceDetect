import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { ReportDataAnalyzeComponent } from './report-data-analyze.component';

/**
 * 摄像机页面路由
 */
const reportDataAnalyzeRoutes: Routes = [
  { path: '', component: ReportDataAnalyzeComponent }
]


@NgModule({
  imports: [
    RouterModule.forChild(reportDataAnalyzeRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ReportDataAnalyzeRoutingModule { }
