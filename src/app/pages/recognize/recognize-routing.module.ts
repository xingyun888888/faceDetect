import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { RecognizeComponent } from './recognize.component';

/**
 * 摄像机页面路由
 */
const recognizeRoutes: Routes = [
  { path: '', component: RecognizeComponent }
]


@NgModule({
  imports: [
    RouterModule.forChild(recognizeRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RecognizeRoutingModule { }
