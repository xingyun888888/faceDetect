import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { NavComponent } from './nav.component';

/**
 * 摄像机页面路由
 */
const NavRoutes: Routes = [
  { path: '', component: NavComponent }
]


@NgModule({
  imports: [
    RouterModule.forChild(NavRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class NavRoutingModule { }
