import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { MobileComponent } from './mobile.component';

/**
 * 摄像机页面路由
 */
const mobileRoutes: Routes = [
  { path: '', component: MobileComponent }
]


@NgModule({
  imports: [
    RouterModule.forChild(mobileRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MobileRoutingModule { }
