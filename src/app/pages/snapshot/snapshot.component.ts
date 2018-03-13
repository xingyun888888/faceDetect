import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snapshot',
  templateUrl: './snapshot.component.html',
  styleUrls: ['./snapshot.component.css']
})
export class SnapshotComponent implements OnInit {
  _searchTitle: Array<any> = [
    {key: 'name', name: '姓名', type: '', nzSpan: 4},
    {key: 'gender', name: '监控区域', type: '', nzSpan: 6},
    {key: 'dc', name: '人脸库', type: '', nzSpan: 6}
  ];

  /**这个字段是保存着table的自定义列标签*/
  _titles: Array<any> = [
    {
      key: 'name',
      name: '姓名',
      type: 'text'
    },
    {
      key: 'gender',
      name: '路径',
      type: 'text'
    },
    {
      key: 'dc',
      name: '证件号',
      type: 'text'
    },
    {
      key: 'time',
      name: '人脸库',
      type: 'date'
    },
    {
      key: 'zoneNum',
      name: '摄像头ID',
      type: 'text'
    },
    {
      key: 'zoneNum',
      name: '危险等级',
      type: 'text'
    },
    {
      key: 'zoneNum',
      name: '拍摄时间',
      type: 'text'
    }
  ];
  /**
   * 保存table数据
   * @type {any[]}
   * @private
   */
  _dataSet = [];


  constructor() { }

  ngOnInit() {
  }

}
