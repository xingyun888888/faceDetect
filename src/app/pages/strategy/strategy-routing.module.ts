import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { StrategyComponent } from './strategy.component';

/**
 * 摄像机页面路由
 */
const strategyRoutes: Routes = [
  { path: '', component: StrategyComponent }
]


@NgModule({
  imports: [
    RouterModule.forChild(strategyRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class StrategyRoutingModule { }
