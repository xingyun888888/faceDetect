import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { TableComponent } from './table/table.component';
import {SearchComponent} from './search/search.component';

/**
 * 摄像机页面路由
 */
const snapshotRoutes: Routes = [
  { path: '', component: TableComponent },
  {path:'',component:SearchComponent}
]


@NgModule({
  imports: [
    RouterModule.forChild(snapshotRoutes)
  ],

  exports: [
    RouterModule
  ]
})
export class CommonUiRoutingModule{ }
