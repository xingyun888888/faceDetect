import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { ServerModelComponent } from './server-model.component';

/**
 * 摄像机页面路由
 */
const serverModelRoutes: Routes = [
  { path: '', component: ServerModelComponent }
]


@NgModule({
  imports: [
    RouterModule.forChild(serverModelRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ServerModelRoutingModule { }
