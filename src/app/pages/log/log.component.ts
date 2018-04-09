import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import api from '../../api';
import {parseParam} from '../../utils/common';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  /**这个字段是保存着search的自定义列标签*/
  _searchTitle: Array<any> = [
    {key: 'userName', name: '用户名', type: '', nzSpan: 5},
    {key: 'role', name: '角色', type: '', nzSpan: 5},
    {key: 'operator', name: '操作', type: '', nzSpan: 5}
  ];
  /**这个字段是保存着table的自定义列标签*/
  _titles: Array<any> = [
    {
      key: 'id',
      name: 'ID',
      type: 'text'
    },
    {
      key: 'userName',
      name: '用户名称',
      type: 'text'
    },
    {
      key: 'role',
      name: '角色',
      type: 'text'
    },
    {
      key: 'operator',
      name: '操作名称',
      type: 'text'
    },
    {
      key: 'moduleName',
      name: '模块',
      type: 'text'
    },
    {
      key: 'time',
      name: '操作时间',
      type: 'datetime'
    },
  ];

  /**这里存放着table需要的数据*/
  _dataSet = [];

  /**是否加载中,是否显示加载状态,true:代表正在加载中,false:代表加载完成*/
  isLoading = false;

  /**删除功能处理，在这里调用删除的接口，给后台发送一个ID，应该用post，只有id查询是get，其他操作都用post
   * 删除成功之后，调用查询方法，更新页面，删除失败之后，调用查询方法，更新页面*/
  deleteRow(data) {
    this.http.post(api.deleteLog, JSON.stringify(data), {
      headers: new HttpHeaders({
        'Content-type': 'application/json;charset=UTF-8'
      })
    }).subscribe((res) => {
      this.getLog();
    }, (error) => {
      this.getLog();
    });
  }

  constructor(private http: HttpClient) {

  }

  /**在这里调用刷新,点击刷新按钮之后就会调用这个方法,刷新就是调用一次查询接口*/
  refresh(e) {
    this.getLog();
  }

  /**调用查询接口，查询到结果之后将拿到的res赋值给_dataSet才能显示到table*/
  getLog() {
    this.isLoading = true;
    this.http.get(api.queryLog).subscribe((res) => {
      console.dir(res);
      const list = <any>res;
      this._dataSet = list;
      /**关闭加载状态*/
      this.isLoading = false;
    }, (error) => {
      const list = [{
        id: 1,
        username: '191',
        role: '80',
        moduleName: '1'
      }];
      this._dataSet = list;
    });
  }

  /**根据条件查询方法*/
  queryLogByConditions(data) {
    this.isLoading = true;
    this.http.get(api.queryLogByConditions + parseParam(data)).subscribe((res) => {
      console.dir(res);
      const list = <any>res;
      this._dataSet = list.data;
      /**关闭加载状态*/
      this.isLoading = false;
    }, (error) => {
    });
  }

  /**组件初始化的时候调用一次*/
  ngOnInit() {
    this.getLog();
  }

}
