import {Component, OnInit} from '@angular/core';

import {ActivatedRoute, Params} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import api from '../../api';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  /**
   * 这个字段是保存着table的自定义列标签
   */
  _titles: Array<any> = [
    {
      key: 'id',
      name: 'ID',
       type: 'text'
    },
    {
      key: 'name',
      name: '用户姓名',
       type: 'text'
    },
    {
      key: 'seriernum',
      name: '编号',
       type: 'text'
    },
    {
      key: 'sex',
      name: '性别',
       type: 'text'
    },
    {
      key: 'type',
      name: '证件类型',
       type: 'text'
    },
    {
      key: 'code',
      name: '证件号码',
       type: 'text'
    },
    {
      key: 'path',
      name: '路径',
       type: 'text'

    },
    {
      key: 'feapath',
      name: 'Fea文件路径',
       type: 'text'
    },
    {
      key: 'facelibid',
      name: '人脸库id',
       type: 'text'
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

  id: any = '';

  /**
   * 这个方法是订阅的子组件传进来的事件,当子组件触发的时候就会获取到值value,判断拿出的value是否是undefined,如果是新增处理,否则编辑处理，
   * 首先要把formData的脏值清空，然后将拿到的最新值赋值到formData，如果value有值那就是表明当前是编辑状态，否则说明是新增
   */
  getRowData(value) {
    console.log(value);
    this.formData = {};
    this.formData = Object.assign({}, value);
    if (!value) {
      this.isAdd = true;
    } else {
      this.isEdit = true;
    }
  }

  /**
   * 这里是关模态框调用的方法,关闭也有两种状态,可能是编辑或者新增
   */
  close() {
    if (this.isEdit) {
      this.isEdit = !this.isEdit;
    } else if (this.isAdd) {
      this.isAdd = !this.isAdd;
    }
  }

  /**
   * 删除功能处理，在这里调用删除的接口，给后台发送一个ID，应该用post，只有id查询是get，其他操作都用post
   * 删除成功之后，调用查询方法，更新页面，删除失败之后，调用查询方法，更新页面
   */
  deleteRow(data) {
    console.log(data);
    this.http.get(api.deleteRegister + '?id=' + data.id).subscribe((res) => {
      this.getRegister();
    }, (error) => {
      this.getRegister();
    });
  }

  /**
   * 增加或者编辑操作后点击提交后调用的方法，请求的时候判断一下是新增还是修改，根据isEdit和isAdd的值判断
   * 添加下面的headers头部说明，前端需要接收的是json数据
   */
  sendData(data) {
    console.log(data);
    if (this.isAdd) {
      this.http.post(api.addRegister, data, {
        headers: new HttpHeaders({
          'Content-type': 'application/json;charset=UTF-8'
        })
      }).subscribe((res) => {
        this.getRegisterAll();
      }, (error) => {
        this.getRegisterAll();
      });
      this.isAdd = false;
    } else if (this.isEdit) {
      this.http.post(api.editRegister, data, {
        headers: new HttpHeaders({
          'Content-type': 'application/json;charset=UTF-8'
        })
      }).subscribe((res) => {
        this.getRegister();
      }, (error) => {
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
   * 在这里调用刷新,点击刷新按钮之后就会调用这个方法,刷新就是调用一次查询接口
   */
  refresh(e) {
    this.getRegisterAll();
  }

  /**
   *  调用查询接口，查询到结果之后将拿到的res赋值给_dataSet才能显示到table
   */
  getRegisterAll() {
    this.http.get(api.queryRegisterAll).subscribe((res) => {
      console.dir(res);
      const list = <any>res;
      this._dataSet = list;
    }, (error) => {
      const list = [{
        id: 1,
        imgPath: '',
        name: '',
        seriernum: '',
        sex: '',
        type: '',
        code: '',
        path: '',
        feapath: '',
        facelibid: ''
      }];
      this._dataSet = list;
    });
  }

  /**
   * 通过人脸库ID获取对应的注册信息
   */
  getRegister() {
    this.http.get(api.queryRegister + '?id=' + this.id).subscribe((res) => {
      console.dir(res);
      const list = <any>res;
      this._dataSet = list;
    }, (error) => {
      const list = [{
        id: 1,
        imgPath: '',
        name: '',
        seriernum: '',
        sex: '',
        type: '',
        code: '',
        path: '',
        feapath: '',
        facelibid: ''
      }];
      this._dataSet = list;
    });
  }

  /**
   * 组件初始化的时候调用一次
   */
  ngOnInit() {
    this.id = this.routerInfo.snapshot.queryParams['id'];
    this.getRegister();
  }
}
