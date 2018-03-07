import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { ParamComponent } from './param.component';

/**
 * 摄像机页面路由
 */
const paramRoutes: Routes = [
  { path: '', component: ParamComponent }
]


@NgModule({
  imports: [
    RouterModule.forChild(paramRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ParamRoutingModule { }
