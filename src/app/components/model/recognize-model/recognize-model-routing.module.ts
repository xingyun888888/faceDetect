import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { RecognizeModelComponent } from './recognize-model.component';

/**
 * 摄像机页面路由
 */
const recognizeModelRoutes: Routes = [
  { path: '', component: RecognizeModelComponent }
]


@NgModule({
  imports: [
    RouterModule.forChild(recognizeModelRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RecognizeModelRoutingModule { }
