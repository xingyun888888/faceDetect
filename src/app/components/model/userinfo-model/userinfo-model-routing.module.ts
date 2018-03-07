import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { UserinfoModelComponent } from './userinfo-model.component';

/**
 * 摄像机页面路由
 */
const UserinfoModelRoutes: Routes = [
  { path: '', component: UserinfoModelComponent }
]


@NgModule({
  imports: [
    RouterModule.forChild(UserinfoModelRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class UserinfoModelRoutingModule { }
