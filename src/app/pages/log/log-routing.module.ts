import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { LogComponent } from './log.component';

/**
 * 摄像机页面路由
 */
const logRoutes: Routes = [
  { path: '', component: LogComponent }
]


@NgModule({
  imports: [
    RouterModule.forChild(logRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class LogRoutingModule { }
