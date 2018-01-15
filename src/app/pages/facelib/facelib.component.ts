import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import api from '../../api';

@Component({
  selector: 'app-facelib',
  templateUrl: './facelib.component.html',
  styleUrls: ['./facelib.component.css']
})
export class FacelibComponent implements OnInit {
  /**
   * 这个字段是保存着table的自定义列标签
   */
  _titles: Array<any> = [
    {
      key:'id',
      name:'ID'
    },
    {
      key:'name',
      name:'数据库名称'
    },
    {
      key:'path',
      name: '库路径'
    },
    {
      key:'createTime',
      name:'创建时间'
    },
    {
      key:'maxNum',
      name:'人脸个数'
    },
    {
      key:'state',
      name:'状态'
    }
  ];

  /**
   * isEdit 和 isAdd 这两个属性维护着当前模态框是编辑还是新增
   */
  isEdit = false;
  isAdd = false;

  /**
   * 这里存放着table需要的数据
   */
  _dataSet = [];

  /**
   * 这里存放着从服务端接收到的数据，模态框需要
   */
  formData = {};

  /**
   * 这个方法是订阅的子组件传进来的事件,当子组件触发的时候就会获取到值value,判断拿出的value是否是undefined,如果是新增处理,否则编辑处理
   */
  getRowData(value){
    console.log(value);
    this.formData = {};
    this.formData  = Object.assign({},value);
    if(!value){
      this.isAdd = true;
    }else{
      this.isEdit = true;
    }
  }

  /**
   * 这里是关模态框调用的方法
   */
  close() {
    if (this.isEdit) {
      this.isEdit = !this.isEdit;
    } else if (this.isAdd) {
      this.isAdd = !this.isAdd;
    }
  }

  /**
   *
   * 删除功能处理  在这里调用删除的接口
   * 删除要接收什么参数 ？？？给后台发送一个ID就好  应该用post  只有id查询 是get  其他操作都用post en
   * @param data
   */
  deleteRow(data){
    console.log(data);
    this.http.get(api.deleteFacelib+"?id="+data.id).subscribe((res)=>{
      this.getFacelib();
    },(error)=>{
      this.getFacelib();
    });
  }
  /**
   在这里做请求操作
   请求的时候同样判断一下 当前是新增操作还是修改操作
   根据 isEdit 和 isAdd的值判断
   */
  sendData(data) {
    if(this.isAdd) {
      this.http.post(api.addFacelib,data,{headers:new HttpHeaders({
        'Content-type':'application/json;charset=UTF-8'
      })}).subscribe((res) => {
        this.getFacelib();
      }, (error) => {
        this.getFacelib();
      });
      this.isAdd = false;
    }else if (this.isEdit) {
      this.http.post(api.editFacelib, data , {headers: new HttpHeaders({
        'Content-type':'application/json;charset=UTF-8'
      })}).subscribe((res) => {
        this.getFacelib();
      }, (error) => {
        this.getFacelib();
      });
      this.isEdit = false;
    }

  }
  constructor(private http: HttpClient,){

  }

  getFacelib() {
    this.http.get(api.queryFacelib).subscribe((res)=>{
      console.dir(res);
      let list = <any>res;
      this._dataSet = list
    }, (error) => {
       let list = [{
          id: 1,
          name: "",
          path: "234",
          createTime: "dsfds",
          maxNum: 1,
          state: 1
       }]
       this._dataSet = list;
    });
  }

  ngOnInit() {
    this.getFacelib();
  }

}

