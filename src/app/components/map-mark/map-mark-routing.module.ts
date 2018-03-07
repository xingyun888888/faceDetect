import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { MapMarkComponent } from './map-mark.component';

/**
 * 摄像机页面路由
 */
const MapMarkRoutes: Routes = [
  { path: '', component: MapMarkComponent }
]


@NgModule({
  imports: [
    RouterModule.forChild(MapMarkRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MapMarkRoutingModule { }
