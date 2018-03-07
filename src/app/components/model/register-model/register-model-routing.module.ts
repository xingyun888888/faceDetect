import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { RegisterModelComponent } from './register-model.component';

/**
 * 摄像机页面路由
 */
const registerModelRoutes: Routes = [
  { path: '', component: RegisterModelComponent }
]


@NgModule({
  imports: [
    RouterModule.forChild(registerModelRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RegisterModelRoutingModule { }
