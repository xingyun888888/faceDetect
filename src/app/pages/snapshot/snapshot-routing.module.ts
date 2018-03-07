import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { SnapshotComponent } from './snapshot.component';

/**
 * 摄像机页面路由
 */
const snapshotRoutes: Routes = [
  { path: '', component: SnapshotComponent }
]


@NgModule({
  imports: [
    RouterModule.forChild(snapshotRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SnapshotRoutingModule { }
