import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-servermonitor',
  templateUrl: './servermonitor.component.html',
  styleUrls: ['./servermonitor.component.less']
})
export class ServermonitorComponent implements OnInit {

  _titlesofservice:Array<any> =[
    {
      key:"name",
      name:"服务器ID"
    },{
      key:"age",
      name:"运行温度"
    },{
      key:"code",
      name:"GPU负载"
    },{
      key:"sex",
      name:"CPU负载"
    },{
      key:"aaa",
      name:"内存负载"
    },{
      key:"time",
      name:"上线时间"
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
  options: any;

  constructor() {
  }

  ngOnInit() {
    // let xAxisData = [];
    // let data1 = [];
    // let data2 = [];
    //
    // for (let i = 0; i < 100; i++) {
    //   xAxisData.push('category' + i);
    //   data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
    //   data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
    // }

    this.options = {
      title : {
        // text: '实时监控情况',
        // subtext:['今日平均负载:80%','峰值负载运行时间:42分钟','负载最大的服务器种类:算法服务器']
      },
      tooltip : {
        trigger: 'axis'
      },
      legend: {
        data:['检测识别服务器', '存储服务器', '媒体服务器', '文件服务器', '结构化服务器']
      },
      toolbox: {
        show : true,
        feature : {
          mark : {show: true},
          dataView : {show: true, readOnly: false},
          magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
          restore : {show: true},
          saveAsImage : {show: true}
        }
      },
      calculable : true,
      xAxis : [
        {
          type : 'category',
          boundaryGap : false,
          data : ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00']
        }
      ],
      yAxis : [
        {
          type : 'value'
        }
      ],
      series : [
        {
          name:'检测识别服务器',
          type:'line',
          smooth:true,
          itemStyle: {normal: {areaStyle: {type: 'default'}}},
          data:[12, 32, 10, 34, 90, 30, 10, 90, 30]
        },
        {
          name:'存储服务器',
          type:'line',
          smooth:true,
          itemStyle: {normal: {areaStyle: {type: 'default'}}},
          data:[20, 18, 19, 23, 29, 33, 31, 34, 43]
        },
        {
          name:'媒体服务器',
          type:'line',
          smooth:true,
          itemStyle: {normal: {areaStyle: {type: 'default'}}},
          data:[50, 32, 20, 15, 90, 30, 40, 32, 13]
        },
        {
          name:'文件服务器',
          type:'line',
          smooth:true,
          itemStyle: {normal: {areaStyle: {type: 'default'}}},
          data:[20, 32, 30, 34, 39, 30, 20, 43, 22]
        },
        {
          name:'结构化服务器',
          type:'line',
          smooth:true,
          itemStyle: {normal: {areaStyle: {type: 'default'}}},
          data:[20, 32, 90, 34, 90, 30, 20, 22, 34]
        }
      ]
    };

  }
}
