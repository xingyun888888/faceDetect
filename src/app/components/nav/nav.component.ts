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

  navList:any= [{name:"首页",icon:"../../assets/images/icon/home-fill.png"},{name:"数据监控",icon:"../../assets/images/icon/data-moniting.png"},{name:"报表数据分析",icon:"../../assets/images/icon/table-ana.png"},{name:"查询",icon:"../../assets/images/icon/query.png",children:[{name:'媒体查询',routeName:"/demo"},{name:"日志查询",},{name:"登录查询"},{name:"告警查询"}]},{name:"人脸库管理",icon:"../../assets/images/icon/face-ma.png"},{name:"硬件管理",icon:"../../assets/images/icon/hardware.png",children:[{name:"摄像头信息",routeName:"/camera"},{name:"服务端信息",routeName:"/server"},{name:"移动端硬件信息",routeName:"/mobile"}]},{name:"布控策略",icon:"../../assets/images/icon/bukong.png"},{name:"地图管理",icon:"../../assets/images/icon/map-ma.png"},{name:"系统管理",icon:"../../assets/images/icon/system-set.png"}];

  showList(e,curIndex){
    this.currentIndex = curIndex;
  }
  ngOnInit() {
  }

}




