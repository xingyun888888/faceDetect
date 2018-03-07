import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { CameraEditComponent } from './camera-edit.component';

/**
 * 摄像机页面路由
 */
const cameraEditRoutes: Routes = [
  { path: '', component: CameraEditComponent }
]


@NgModule({
  imports: [
    RouterModule.forChild(cameraEditRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CameraEditRoutingModule { }
