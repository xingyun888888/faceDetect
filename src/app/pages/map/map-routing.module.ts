import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { MapComponent } from './map.component';

/**
 * 摄像机页面路由
 */
const mapRoutes: Routes = [
  { path: '', component: MapComponent }
]


@NgModule({
  imports: [
    RouterModule.forChild(mapRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MapRoutingModule { }
