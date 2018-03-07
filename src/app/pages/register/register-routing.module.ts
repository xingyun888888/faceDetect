import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { RegisterComponent } from './register.component';

/**
 * 摄像机页面路由
 */
const registerRoutes: Routes = [
  { path: '', component: RegisterComponent }
]


@NgModule({
  imports: [
    RouterModule.forChild(registerRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RegisterRoutingModule { }
