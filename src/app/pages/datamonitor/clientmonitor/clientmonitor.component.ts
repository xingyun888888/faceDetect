import {AfterViewChecked, Component, OnInit} from '@angular/core';
import api from '../../../api';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-clientmonitor',
  templateUrl: './clientmonitor.component.html',
  styleUrls: ['./clientmonitor.component.less']
})
export class ClientmonitorComponent implements OnInit,AfterViewChecked{
  options: any;
  ngAfterViewChecked(): void {
    this.options = {
      title: {
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['接受视频数', '在线时间'],
        y: 'bottom'
      },
      calculable: true,
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['01-11', '02-11', '03-11', '04-11', '05-11', '06-11', '07-11', '08-11', '09-11', ]
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '接受视频数',
          type: 'line',
          smooth: true,
          itemStyle: {normal: {areaStyle: {type: 'default'}}},
          data: [220, 182, 191, 234, 290, 330, 310, 342, 432]
        },
        {
          name: '在线时间',
          type: 'line',
          smooth: true,
          itemStyle: {normal: {areaStyle: {type: 'default'}}},
          data: [22, 18, 19, 23, 20, 10, 15, 21, 12]
        }
      ]
    };
  }
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
