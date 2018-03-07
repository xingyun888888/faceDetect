import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { ServerComponent } from './server.component';

/**
 * 摄像机页面路由
 */
const serverRoutes: Routes = [
  { path: '', component: ServerComponent }
]


@NgModule({
  imports: [
    RouterModule.forChild(serverRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ServerRoutingModule { }
