import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { VedioComponent } from './vedio.component';

/**
 * 摄像机页面路由
 */
const vedioRoutes: Routes = [
  { path: '/', component: VedioComponent }
]


@NgModule({
  imports: [
    RouterModule.forChild(vedioRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class VedioRoutingModule { }
