import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-netmonitor',
  templateUrl: './netmonitor.component.html',
  styleUrls: ['./netmonitor.component.less']
})
export class NetmonitorComponent implements OnInit {
  camera_options: any;
  web_options: any;
  client_options: any;
  data_options: any;
  constructor() { }

  ngOnInit() {
    this.camera_options = {
      title : {
        text: '摄像头网络流量',
        // subtext:['今日平均负载:80%','峰值负载运行时间:42分钟','负载最大的服务器种类:算法服务器']
      },
      tooltip : {
        trigger: 'axis'
      },
      legend: {
        data:['网络上行', '网络下行']
      },
      toolbox: {
        show : true,
        feature : {
          mark : {show: true},
          dataView : {show: true, readOnly: false},
          magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
          restore : {show: true},
          saveAsImage : {show: true,title:'保存'}
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
          name:'网络上行',
          type:'line',
          smooth:true,
          itemStyle: {normal: {areaStyle: {type: 'default'},lineStyle: {color: '#B3E759'},color: '#D5E6FF'}},
          data:[12, 32, 10, 34, 90, 30, 10, 90, 30]
        },
        {
          name:'网络下行',
          type:'line',
          smooth:true,
          itemStyle: {normal: {areaStyle: {type: 'default'},lineStyle: {color: '#61A2FE'},color: '#FFFFFF'}},
          data:[20, 18, 19, 23, 29, 33, 31, 34, 43]
        }
      ]
    };
    this.web_options = {
      title : {
        text: 'Web网络流量',
        // subtext:['今日平均负载:80%','峰值负载运行时间:42分钟','负载最大的服务器种类:算法服务器']
      },
      tooltip : {
        trigger: 'axis'
      },
      legend: {
        data:['网络上行', '网络下行']
      },
      toolbox: {
        show : true,
        feature : {
          mark : {show: true},
          dataView : {show: true, readOnly: false},
          magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
          restore : {show: true},
          saveAsImage : {show: true,title:'保存'}
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
          name:'网络上行',
          type:'line',
          smooth:true,
          itemStyle: {normal: {areaStyle: {type: 'default'},lineStyle: {color: '#F56244'},color: '#FEEAE7'}},
          data:[12, 32, 10, 34, 90, 30, 10, 90, 30]
        },
        {
          name:'网络下行',
          type:'line',
          smooth:true,
          itemStyle: {normal: {areaStyle: {type: 'default'},lineStyle: {color: '#826AA8'},color: '#FFFFFF'}},
          data:[20, 18, 19, 23, 29, 33, 31, 34, 43]
        }
      ]
    };
    this.client_options = {
      title : {
        text: '客户端网络流量',
        // subtext:['今日平均负载:80%','峰值负载运行时间:42分钟','负载最大的服务器种类:算法服务器']
      },
      tooltip : {
        trigger: 'axis'
      },
      legend: {
        data:['网络上行', '网络下行']
      },
      toolbox: {
        show : true,
        feature : {
          mark : {show: true},
          dataView : {show: true, readOnly: false},
          magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
          restore : {show: true},
          saveAsImage : {show: true,title:'保存'}
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
          name:'网络上行',
          type:'line',
          smooth:true,
          itemStyle: {normal: {areaStyle: {type: 'default'},lineStyle: {color: '#F9CB23'},color: '#FFF9E7'}},
          data:[12, 32, 10, 34, 90, 30, 10, 90, 30]
        },
        {
          name:'网络下行',
          type:'line',
          smooth:true,
          itemStyle: {normal: {areaStyle: {type: 'default'},lineStyle: {color: '#F99F7C'},color: '#FFFFFF'}},
          data:[20, 18, 19, 23, 29, 33, 31, 34, 43]
        }
      ]
    };
    this.data_options = {
      title : {
        text: '数据库网络流量',
        // subtext:['今日平均负载:80%','峰值负载运行时间:42分钟','负载最大的服务器种类:算法服务器']
      },
      tooltip : {
        trigger: 'axis'
      },
      legend: {
        data:['网络上行', '网络下行']
      },
      toolbox: {
        show : true,
        feature : {
          mark : {show: true},
          dataView : {show: true, readOnly: false},
          magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
          restore : {show: true},
          saveAsImage : {show: true,title:'保存'}
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
          name:'网络上行',
          type:'line',
          smooth:true,
          itemStyle: {normal: {areaStyle: {type: 'default'},lineStyle: {color: '#58388B'},color: '#EFEAF7'}},
          data:[12, 32, 10, 34, 90, 30, 10, 90, 30]
        },
        {
          name:'网络下行',
          type:'line',
          smooth:true,
          itemStyle: {normal: {areaStyle: {type: 'default'},lineStyle: {color: '#8FB1F6'},color: '#FFFFFF'}},
          data:[20, 18, 19, 23, 29, 33, 31, 34, 43]
        }
      ]
    };
  }

}
