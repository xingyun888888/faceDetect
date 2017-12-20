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

  navList:any= [{name:"首页"},{name:"数据监控"},{name:"报表数据分析"},{name:"查询",children:[{name:'媒体查询',routeName:"/demo"},{name:"日志查询"},{name:"登录查询"},{name:"告警查询"}]},{name:"人脸库管理"},{name:"硬件管理",children:[{name:"摄像头信息",routeName:"/detail"},{name:"服务端信息",routeName:"/hello"},{name:"移动端硬件信息",routeName:"/userinfo"}]},{name:"布控策略"},{name:"地图管理"},{name:"系统管理"},];

  showList(e,curIndex){
    this.currentIndex = curIndex;
  }
  ngOnInit() {

    // this.http.get("/api/bioauth/test").subscribe((res)=>{
    //     console.dir(res);

    // })
  }

}


