import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { UserModelComponent } from './user-model.component';

/**
 * 摄像机页面路由
 */
const UserModelRoutes: Routes = [
  { path: '', component: UserModelComponent }
]


@NgModule({
  imports: [
    RouterModule.forChild(UserModelRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class UserModelRoutingModule { }
