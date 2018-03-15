import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientmonitor',
  templateUrl: './clientmonitor.component.html',
  styleUrls: ['./clientmonitor.component.css']
})
export class ClientmonitorComponent implements OnInit {
  _titlesofservice:Array<any> =[
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
  constructor() { }

  ngOnInit() {
  }

}
