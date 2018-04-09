import {AfterViewChecked, Component, Input, OnInit, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import api from '../../../api';
import {parseParam} from '../../../utils/common';
import "rxjs/Rx";
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-servermonitor',
  templateUrl: './servermonitor.component.html',
  styleUrls: ['./servermonitor.component.less']
})
export class ServermonitorComponent implements OnInit, AfterViewChecked {
  constructor(private http: HttpClient) {
      // setInterval(() => {
        this.getServerInfo();
        this.getServerListInfo();
      // }, 3000);
  }

  ngOnInit() {
  }

  ngAfterViewChecked(): void {
    this.options = {
      title: {
        // text: '实时监控情况',
        // subtext:['今日平均负载:80%','峰值负载运行时间:42分钟','负载最大的服务器种类:算法服务器']
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['检测识别服务器', '存储服务器', '媒体服务器', '文件服务器', '结构化服务器']
      },
      toolbox: {
        show: true,
        feature: {
          mark: {show: true},
          dataView: {show: true, readOnly: false},
          magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
          restore: {show: true},
          saveAsImage: {show: true}
        }
      },
      calculable: true,
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: this._dataSetsTimes
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '检测识别服务器',
          type: 'line',
          smooth: true,
          itemStyle: {normal: {areaStyle: {type: 'default'}}},
          data: this._detectServer
        },
        {
          name: '存储服务器',
          type: 'line',
          smooth: true,
          itemStyle: {normal: {areaStyle: {type: 'default'}}},
          data: this._storeServer
        },
        {
          name: '媒体服务器',
          type: 'line',
          smooth: true,
          itemStyle: {normal: {areaStyle: {type: 'default'}}},
          data: this._mediaServer
        },
        {
          name: '文件服务器',
          type: 'line',
          smooth: true,
          itemStyle: {normal: {areaStyle: {type: 'default'}}},
          data: this._fileServer
        },
        {
          name: '结构化服务器',
          type: 'line',
          smooth: true,
          itemStyle: {normal: {areaStyle: {type: 'default'}}},
          data: this._structServer
        }
      ]
    };
  }

  _titles: Array<any> = [
    {
      key: 'id',
      name: '服务器ID',
      type: 'text'
    }, {
      key: 'temperature',
      name: '运行温度',
      type: 'text'
    }, {
      key: 'gPU',
      name: 'GPU负载',
      type: 'text'
    }, {
      key: 'cPU',
      name: 'CPU负载',
      type: 'text'
    }, {
      key: 'rAM',
      name: '内存负载',
      type: 'text'
    }, {
      key: 'time',
      name: '上线时间',
      type: 'date'
    }];

  /**这里存放着table需要的数据*/
  _dataSet: Array<any> = [];
  _dataSetsTimes: Array<any> = [];
  _detectServer: Array<any> = [];
  _storeServer: Array<any> = [];
  _mediaServer: Array<any> = [];
  _fileServer: Array<any> = [];
  _structServer: Array<any> = [];
  options: any;

  /**查询服务器数据信息*/
  getServerInfo() {
    this.http.get(api.getServerInfo).subscribe((res) => {
      console.dir(res);
      const list = <any>res;
      this._dataSet = list;
    });
  }

  /**查询服务器数据信息*/
  getServerListInfo() {
    this.http.get(api.getServerListInfo).subscribe((res) => {
      console.dir(res);
      const list = <any>res;
      // this._dataSets = list;
      var serverDataInfo = (<ServerDataInfo>list);
      for (let entry in serverDataInfo) {
        this._dataSetsTimes.push(serverDataInfo[entry].times);
        this._detectServer.push(serverDataInfo[entry].detectServer);
        this._storeServer.push(serverDataInfo[entry].storeServer);
        this._mediaServer.push(serverDataInfo[entry].mediaServer);
        this._fileServer.push(serverDataInfo[entry].fileServer);
        this._structServer.push(serverDataInfo[entry].structServer);
      }
      console.dir(this._dataSetsTimes);
    });
  }
}

export class ServerDataInfo {
  private _times: number;
  private _detectServer: number;
  private _storeServer: number;
  private _mediaServer: number;
  private _fileServer: number;
  private _structServer: number;

  set times(value: number) {
    this._times = value;
  }

  set detectServer(value: number) {
    this._detectServer = value;
  }

  set storeServer(value: number) {
    this._storeServer = value;
  }

  set mediaServer(value: number) {
    this._mediaServer = value;
  }

  set fileServer(value: number) {
    this._fileServer = value;
  }

  set structServer(value: number) {
    this._structServer = value;
  }
}
