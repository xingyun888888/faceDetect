import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { TableComponent } from './table.component';

/**
 * 摄像机页面路由
 */
const TableRoutes: Routes = [
  { path: '', component: TableComponent }
]


@NgModule({
  imports: [
    RouterModule.forChild(TableRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TableRoutingModule { }
