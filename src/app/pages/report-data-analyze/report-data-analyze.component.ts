import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-report-data-analyze',
  templateUrl: './report-data-analyze.component.html',
  styleUrls: ['./report-data-analyze.component.less']
})
export class ReportDataAnalyzeComponent implements OnInit {
  _startDate = null;
  _endDate = null;

  newArray = (len) => {
    const result = [];
    for (let i = 0; i < len; i++) {
      result.push(i);
    }
    return result;
  };

  _startValueChange = () => {
    if (this._startDate > this._endDate) {
      this._endDate = null;
    }
  };

  _endValueChange = () => {
    if (this._startDate > this._endDate) {
      this._startDate = null;
    }
  };

  _disabledStartDate = (startValue) => {
    if (!startValue || !this._endDate) {
      return false;
    }
    return startValue.getTime() >= this._endDate.getTime();
  };

  _disabledEndDate = (endValue) => {
    if (!endValue || !this._startDate) {
      return false;
    }
    return endValue.getTime() <= this._startDate.getTime();
  };

  get _isSameDay() {
    return this._startDate && this._endDate && moment(this._startDate).isSame(this._endDate, 'day');
  }

  get _endTime() {
    return {
      nzHideDisabledOptions: true,
      nzDisabledHours: () => {
        return this._isSameDay ? this.newArray(this._startDate.getHours()) : [];
      },
      nzDisabledMinutes: (h) => {
        if (this._isSameDay && h === this._startDate.getHours()) {
          return this.newArray(this._startDate.getMinutes());
        }
        return [];
      },
      nzDisabledSeconds: (h, m) => {
        if (this._isSameDay && h === this._startDate.getHours() && m === this._startDate.getMinutes()) {
          return this.newArray(this._startDate.getSeconds());
        }
        return [];
      }
    };
  }

  options: any;

  constructor() {
  }

  ngOnInit() {
    let xAxisData = [];
    let data1 = [];
    let data2 = [];

    for (let i = 0; i < 100; i++) {
      xAxisData.push('category' + i);
      data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
      data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
    }

    this.options = {
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['人流量', '服务器负载', '人脸分析次数', '网络流量', '抓水客数', '报警频度', '人脸库底图数', '摄像头在线数']
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
          data: ['01-11', '02-11', '03-11', '04-11', '05-11', '06-11', '07-11', '08-11', '09-11',]
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '人流量',
          type: 'line',
          stack: '总量',
          itemStyle: {normal: {areaStyle: {type: 'default'}}},
          data: [120, 132, 101, 134, 90, 230, 210, 290, 330]
        },
        {
          name: '服务器负载',
          type: 'line',
          stack: '总量',
          itemStyle: {normal: {areaStyle: {type: 'default'}}},
          data: [220, 182, 191, 234, 290, 330, 310, 342, 432]
        },
        {
          name: '人脸分析次数',
          type: 'line',
          stack: '总量',
          itemStyle: {normal: {areaStyle: {type: 'default'}}},
          data: [150, 232, 201, 154, 190, 330, 410, 432, 113]
        },
        {
          name: '网络流量',
          type: 'line',
          stack: '总量',
          itemStyle: {normal: {areaStyle: {type: 'default'}}},
          data: [320, 332, 301, 334, 390, 330, 320, 343, 212]
        },
        {
          name: '抓水客数',
          type: 'line',
          stack: '总量',
          itemStyle: {normal: {areaStyle: {type: 'default'}}},
          data: [820, 932, 901, 934, 1290, 1330, 1320, 1222, 324]
        },
        {
          name: '报警频度',
          type: 'line',
          stack: '总量',
          itemStyle: {normal: {areaStyle: {type: 'default'}}},
          data: [820, 932, 901, 934, 1290, 1330, 1320, 1000, 999]
        },
        {
          name: '人脸库底图数',
          type: 'line',
          stack: '总量',
          itemStyle: {normal: {areaStyle: {type: 'default'}}},
          data: [820, 932, 901, 934, 1290, 1330, 1320, 1111, 225]
        },
        {
          name: '摄像头在线数',
          type: 'line',
          stack: '总量',
          itemStyle: {normal: {areaStyle: {type: 'default'}}},
          data: [820, 932, 901, 934, 1290, 1330, 1320, 999, 234]
        },
      ]
    };
  }
}
