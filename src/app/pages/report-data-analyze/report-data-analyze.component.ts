import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';
import {parseParam, dateFormat} from '../../utils/common';
import api from '../../api';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {timeOptions} from '../../config/selectConf';

@Component({
  selector: 'app-report-data-analyze',
  templateUrl: './report-data-analyze.component.html',
  styleUrls: ['./report-data-analyze.component.less']
})
export class ReportDataAnalyzeComponent implements OnInit {

  _startDate = null; // 开始日期
  _endDate = null; // 结束日期
  _stype = null; // 查询周期
  options: any = []; // 定义空的echarts
  legendData = ['服务器负载总和', '人脸分析次数', '网络流量总和', '报警频度', '新增人脸底图数', '摄像头在线次数']; // 定义统计的数据项
  xAxisName = []; // 定义x轴的显示名称,按照天、周、月或者年显示
  cameraNum = []; // 摄像头在线总次数
  networkFlowNum = []; // 网络流量总和
  serverLoadNum = []; // 服务器负载总和
  registerNum = []; // 新增人脸底图数
  recognizeNum = []; // 人脸分析次数
  alarmNum = []; // 报警频度

  /**
   * 周期类型
   */
  _timeOptions = timeOptions;

  /**
   * 查询分析数据
   * @param e
   */
  getAnalyzeData() {
    const now = new Date();
    const date = new Date();
    /**
     * 载入页面，自动查询本月的每日数据
     */
    if (this._startDate == null) {
      date.setMonth(date.getMonth());
      date.setDate(1);
      date.setHours(0);
      date.setMinutes(0);
      date.setSeconds(0);
      this._startDate = date;
    }
    if (this._endDate == null) {
      this._endDate = now;
    }
    if (this._stype == null || this._stype === '') {
      this._stype = 1;
    }
    console.log(this._startDate);
    console.log(this._endDate);
    /**
     * 日期格式 2018-01-01
     */
    const data = {
      startTime: dateFormat(new Date(this._startDate), 'yyyy-MM-dd hh:mm:ss'),
      endTime: dateFormat(new Date(this._endDate), 'yyyy-MM-dd hh:mm:ss'),
      type: this._stype
    };
    // 从接口请求数据并绑定
    this.http.get(api.queryReportData + '?startTime=' + data.startTime + '&endTime='
      + data.endTime + '&type=' + data.type).subscribe((res) => {
      const list = <any>res;
      this.xAxisName = [];
      this.cameraNum = [];
      this.networkFlowNum = [];
      this.serverLoadNum = [];
      this.registerNum = [];
      this.recognizeNum = [];
      this.alarmNum = [];
      list.map((it: any, index: any) => {
        this.xAxisName.push(it.name);
        this.cameraNum.push(it.cameraNum);
        this.networkFlowNum.push(it.networkFlowNum);
        this.serverLoadNum.push(it.serverLoadNum);
        this.registerNum.push(it.registerNum);
        this.recognizeNum.push(it.recognizeNum);
        this.alarmNum.push(it.alarmNum);
      });
      console.log(this.xAxisName);
      this.getECharts();
    });
  }

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

  /**
   * 将数据绑定到echarts
   */
  getECharts() {
    this.options = {
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: this.legendData
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
          data: this.xAxisName
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '服务器负载总和',
          type: 'line',
          stack: '总量',
          itemStyle: {normal: {areaStyle: {type: 'default'}}},
          data: this.serverLoadNum
        },
        {
          name: '人脸分析次数',
          type: 'line',
          stack: '总量',
          itemStyle: {normal: {areaStyle: {type: 'default'}}},
          data: this.recognizeNum
        },
        {
          name: '网络流量总和',
          type: 'line',
          stack: '总量',
          itemStyle: {normal: {areaStyle: {type: 'default'}}},
          data: this.networkFlowNum
        },
        {
          name: '报警频度',
          type: 'line',
          stack: '总量',
          itemStyle: {normal: {areaStyle: {type: 'default'}}},
          data: this.alarmNum
        },
        {
          name: '新增人脸底图数',
          type: 'line',
          stack: '总量',
          itemStyle: {normal: {areaStyle: {type: 'default'}}},
          data: this.registerNum
        },
        {
          name: '摄像头在线次数',
          type: 'line',
          stack: '总量',
          itemStyle: {normal: {areaStyle: {type: 'default'}}},
          data: this.cameraNum
        },
      ]
    };
  };

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.getAnalyzeData();
  }
}
