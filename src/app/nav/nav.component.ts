import { Component, OnInit } from '@angular/core';

import {HttpClient} from '@angular/common/http';

import  {Observable} from 'rxjs/Observable';

import "rxjs/add/operator/map";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.less']
})
export class NavComponent implements OnInit {

  constructor(private http:HttpClient) { }

  currentIndex:number = -1;

  navList:any= [{name:"首页",children:[{name:"首页",routeName:"/detail"},{name:"首页",routeName:"/hello"},{name:"首页",routeName:"/table-detail"},{name:"首页"},{name:"首页"}]},{name:"工作台"},{name:"登记拟稿"},{name:"通知公告"},{name:"登记拟稿",children:[{name:'来问登记',routeName:"/demo"},{name:"发文拟稿"},{name:"一般申请"}]},{name:"通知公告"},{name:"工作台"},{name:"登记拟稿"},{name:"通知公告"},];

  showList(e,curIndex){
    this.currentIndex = curIndex;
  }
  ngOnInit() {

     // this.http.get("/api/bioauth/test").subscribe((res)=>{
     //     console.dir(res);

     // })
  }

}
