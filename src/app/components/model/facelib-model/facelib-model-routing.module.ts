import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { FacelibModelComponent } from './facelib-model.component';

/**
 * 摄像机页面路由
 */
const facelibModelRoutes: Routes = [
  { path: '', component: FacelibModelComponent }
]


@NgModule({
  imports: [
    RouterModule.forChild(facelibModelRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class FacelibModelRoutingModule { }
