import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import api from '../../../api';

@Component({
  selector: 'app-mobilemonitor',
  templateUrl: './mobilemonitor.component.html',
  styleUrls: ['./mobilemonitor.component.less']
})
export class MobilemonitorComponent implements OnInit {

  _titles: Array<any> = [
    {
      key: 'id',
      name: '账号',
      type: 'text'
    },
    {
      key: 'ip',
      name: '正在处理的视频',
      type: 'text'
    },
    {
      key: 'port',
      name: '型号',
      type: 'text'
    },
    {
      key: 'state',
      name: '本次工作时间',
      type: 'text'
    },
  ];

  /**这里存放着table需要的数据*/
  _dataSet = [];

  /**这里存放着从服务端接收到的数据，模态框需要*/
  formData = {};
  constructor(private http: HttpClient) {

  }

  /**在这里调用刷新,点击刷新按钮之后就会调用这个方法,刷新就是调用一次查询接口*/
  refresh(e) {
    this.getMobile();
  }

  /**调用查询接口，查询到结果之后将拿到的res赋值给_dataSet才能显示到table*/
  getMobile() {
    this.http.get(api.queryMobile).subscribe((res) => {
      console.dir(res);
      const list = <any>res;
      this._dataSet = list;
    }, (error) => {
      const list = [{
        id: 1,
        ip: '192.168.1.1',
        port: '80',
        state: '1'
      }];
      this._dataSet = list;
    });
  }

  /**组件初始化的时候调用一次*/
  ngOnInit() {
    this.getMobile();
  }

}
