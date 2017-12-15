import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.less']
})
export class DemoComponent implements OnInit {

  _titles:Array<any> =[
  {
    key:"name",
    name:"姓名"
  },{
    key:"age",
    name:"年龄"
  },{
    key:"code",
    name:"编码"
  },{
    key:"sex",
    name:"性别"
  },{
    key:"aaa",
    name:"没了"
  },]


  _dataSet = [{
    key:0,
    name:"dsfdf",
    age:"d",
    code:"dsf",
    sex:"dd",
    aaa:"dfd"
  },{
    key:1,
    name:"dsfdf",
    age:"d",
    code:"dsf",
    sex:"dd",
    aaa:"dfd"
  },{
    key:2,
    name:"dsfdf",
    age:"d",
    code:"dsf",
    sex:"dd",
    aaa:"dfd"
  },]
  ngOnInit() {


  }
}
