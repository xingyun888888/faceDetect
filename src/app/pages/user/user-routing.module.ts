import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { UserComponent } from './user.component';

/**
 * 摄像机页面路由
 */
const userRoutes: Routes = [
  { path: '', component: UserComponent }
]


@NgModule({
  imports: [
    RouterModule.forChild(userRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class UserRoutingModule { }
