import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { FacelibComponent } from './facelib.component';

/**
 * 摄像机页面路由
 */
const facelibRoutes: Routes = [
  { path: '', component: FacelibComponent }
]


@NgModule({
  imports: [
    RouterModule.forChild(facelibRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class FacelibRoutingModule { }
