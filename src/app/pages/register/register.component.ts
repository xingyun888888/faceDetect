import { Component, OnInit } from '@angular/core';

import {ActivatedRoute, Params} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import api from '../../api';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  _titles: Array<any> = [
    {
      key: 'id',
      name: 'ID'
    },
    {
      key: 'name',
      name: '用户姓名'
    },
    {
      key: 'seriernum',
      name: '编号'
    },
    {
      key: 'sex',
      name: '性别'
    },
    {
      key: 'type',
      name: '证件类型'
    },
    {
      key: 'code',
      name: '证件号码'
    },
    {
      key: 'path',
      name: '路径'

    },
    {
      key: 'feapath',
      name: 'Fea文件路径'
    },
    {
      key: 'facelibid',
      name: '人脸库id'
    }
  ];
  isEdit = false;


  isAdd = false;

  _dataSet = [];

  formData = {};

  id: any = '';

  getRowData(value){
    /**
     * 这里判断拿出的value是否是undefined
     * 如果是就按新增处理  否则 就是编辑
     *
     */
    console.log(value);
    this.formData = {};
    this.formData  = Object.assign({},value);
    if(!value){
      this.isAdd = true;
    }else{
      this.isEdit = true;
    }
  };

  /**
   * 这里是关模态框调用的方法
   *
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
    this.http.get(api.deleteRegister+"?id="+data.id).subscribe((res)=>{
      this.getRegister();
    },(error)=>{
      this.getRegister();
    });
  }
  sendData(data){
    console.log(data);
    /**
     *
     在这里做请求操作
     请求的时候同样判断一下 当前是新增操作还是修改操作
     根据 isEdit 和 isAdd的值判断
     *
     */
    if(this.isAdd){
      this.http.post(api.addRegister,data,{headers:new HttpHeaders({
          'Content-type':'application/json;charset=UTF-8'
        })}).subscribe((res)=>{
        this.getRegisterAll();
      },(error)=>{
        this.getRegisterAll();
      });
      this.isAdd = false;
    }else if(this.isEdit){
      this.http.post(api.editRegister,data,{headers:new HttpHeaders({
          'Content-type':'application/json;charset=UTF-8'
        })}).subscribe((res)=>{
        this.getRegister();
      },(error)=>{
        this.getRegister();
      });
      this.isEdit = false;
    }

  }

  constructor(private routerInfo: ActivatedRoute, private http: HttpClient) {
    routerInfo.queryParams.subscribe(queryParams => {
      console.log(queryParams);
    });
  }

  /**
   * 在这里调用刷新
   */
  refresh(e){
    this.getRegisterAll();
  }

  getRegisterAll(){
    this.http.get(api.queryRegisterAll).subscribe((res) => {
      console.dir(res);
      const list = <any>res;
      this._dataSet = list;
    },(error)=>{
      const list = [{
        id:1,
        imgPath:"",
        name:"",
        seriernum:"",
        sex:"",
        type:"",
        code:"",
        path:"",
        feapath:"",
        facelibid:""
      }];
      this._dataSet = list;

    });
  }
  getRegister(){ //之前这个byid的接口是干嘛点击入库按钮发送的请求
    this.http.get(api.queryRegister + '?id=' + this.id).subscribe((res) => {
      console.dir(res);
      const list = <any>res;
      this._dataSet = list;
    },(error)=>{
      const list = [{
        id:1,
        imgPath:"",
        name:"",
        seriernum:"",
        sex:"",
        type:"",
        code:"",
        path:"",
        feapath:"",
        facelibid:""
      }];
      this._dataSet = list;

    });
  }


  ngOnInit() {
    this.id = this.routerInfo.snapshot.queryParams['id'];
    this.getRegister();
  }
}
