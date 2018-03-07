import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { SearchComponent } from './search.component';

/**
 * 摄像机页面路由
 */
const SearchRoutes: Routes = [
  { path: '', component: SearchComponent }
]


@NgModule({
  imports: [
    RouterModule.forChild(SearchRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SearchRoutingModule { }
