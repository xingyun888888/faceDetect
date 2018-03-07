import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { ParamModelComponent } from './param-model.component';

/**
 * 摄像机页面路由
 */
const paramModelRoutes: Routes = [
  { path: '', component: ParamModelComponent }
]


@NgModule({
  imports: [
    RouterModule.forChild(paramModelRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ParamModelRoutingModule { }
