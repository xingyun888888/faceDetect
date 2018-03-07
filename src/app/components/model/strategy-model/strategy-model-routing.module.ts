import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { StrategyModelComponent } from './strategy-model.component';

/**
 * 摄像机页面路由
 */
const StrategyModelRoutes: Routes = [
  { path: '', component: StrategyModelComponent }
]


@NgModule({
  imports: [
    RouterModule.forChild(StrategyModelRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class StrategyModelRoutingModule { }
