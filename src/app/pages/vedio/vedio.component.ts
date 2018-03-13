import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vedio',
  templateUrl: './vedio.component.html',
  styleUrls: ['./vedio.component.css']
})
export class VedioComponent implements OnInit {
  _searchTitle: Array<any> = [
    {key: 'name', name: '视频ID', type: '', nzSpan: 6},
    {key: 'gender', name: '区域选择', type: '', nzSpan: 6},
    {key: 'dc', name: '拍摄时间', type: 'date', nzSpan: 6}
  ];

  /**这个字段是保存着table的自定义列标签*/
  _titles: Array<any> = [
    {
      key: 'name',
      name: '视频ID',
      type: 'text'
    },
    {
      key: 'gender',
      name: '路径',
      type: 'text'
    },
    {
      key: 'dc',
      name: '时间长短',
      type: 'text'
    },
    {
      key: 'time',
      name: '摄像头ID',
      type: 'date'
    },
    {
      key: 'zoneNum',
      name: '拍摄时间',
      type: 'text'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
