import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { CameraComponent } from './camera.component';

/**
 * 摄像机页面路由
 */
const cameraRoutes: Routes = [
  { path: '', component: CameraComponent }
]


@NgModule({
  imports: [
    RouterModule.forChild(cameraRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CameraRoutingModule { }
