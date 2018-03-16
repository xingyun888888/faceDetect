import {Component, OnInit} from '@angular/core';

import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.less']
})
export class NavComponent implements OnInit {
  constructor(private http: HttpClient) {
  }

  /**
   * 主菜单激活的索引
   */
  activeLinkIndex: number = -1;

  /**
   * 子菜单激活的索引
   */
  activeSubLinkIndex: number = -1;

  currentIndex: number = -1;

  navList: any = [{name: '首页', routeName: '/home', icon: 'assets/images/icon/home-fill.png'},
    {name: '数据监控', routeName: '/datamonitor', icon: 'assets/images/icon/data-moniting.png'},
    {name: '报表数据分析', routeName: '/reportAnalyze', icon: 'assets/images/icon/table-ana.png'},
    {name: '查询', icon: 'assets/images/icon/query.png',
      children: [{name: '抓拍查询', routeName: '/snapshot'},
                 {name: '视频查询', routeName: '/vedio'},
                 {name: '日志查询', routeName: '/log'},
                 {name: '登录查询', routeName: '/user'},
                 {name: '告警查询', routeName: '/recognize'}]},
    {name: '人脸库管理', icon: 'assets/images/icon/face-ma.png', routeName: '/facelib'},
    {name: '硬件管理', icon: 'assets/images/icon/hardware.png',
      children: [{name: '摄像头信息', routeName: '/camera'},
                {name: '服务端信息', routeName: '/server'},
                {name: '移动端硬件信息', routeName: '/mobile'}]},
    {name: '布控策略', icon: 'assets/images/icon/bukong.png', routeName: '/strategy'},
    {name: '地图管理', routeName: '/map', icon: 'assets/images/icon/map-ma.png'},
    {name: '系统管理', icon: 'assets/images/icon/system-set.png',
      children: [{name: '参数配置', routeName: '/param'},
                 {name: '权限管理', routeName: '/user'},
                 {name: '分析仪设置', routeName: '/analyzer'}]}];

  showList(e, curIndex) {
    this.currentIndex = curIndex;
  }

  ngOnInit() {
  }

  activeLink(e, index) {
    this.activeLinkIndex = index;
  }

  activeSubLink(e, index) {
    this.activeSubLinkIndex = index;
  }
}





