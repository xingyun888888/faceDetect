import { Component, OnInit } from '@angular/core';
import api from '../../../api';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-clientmonitor',
  templateUrl: './clientmonitor.component.html',
  styleUrls: ['./clientmonitor.component.less']
})
export class ClientmonitorComponent implements OnInit {
  _titles:Array<any> =[
    {
      key:"name",
      name:"客户端账户"
    },{
      key:"age",
      name:"接受视频数"
    },{
      key:"code",
      name:"正在处理报警ID"
    },{
      key:"sex",
      name:"本次工作时间"
    }]


  _dataSet = [{
    key:0,
    name:"dsfdf",
    age:"d",
    code:"dsf",
    sex:"dd",
    aaa:"dfd"
  },{
    key:0,
    name:"dsfdf",
    age:"d",
    code:"dsf",
    sex:"dd",
    aaa:"dfd"
  },{
    key:0,
    name:"dsfdf",
    age:"d",
    code:"dsf",
    sex:"dd",
    aaa:"dfd"
  },{
    key:0,
    name:"dsfdf",
    age:"d",
    code:"dsf",
    sex:"dd",
    aaa:"dfd"
  },{
    key:0,
    name:"dsfdf",
    age:"d",
    code:"dsf",
    sex:"dd",
    aaa:"dfd"
  },{
    key:0,
    name:"dsfdf",
    age:"d",
    code:"dsf",
    sex:"dd",
    aaa:"dfd"
  }]
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getServerInfo();
  }
  /**查询服务器数据信息*/
  getServerInfo() {
    this.http.get(api.getClientInfo).subscribe((res) => {
      console.dir(res);
      const list = <any>res;
      this._dataSet = list;
    });
  }
}
