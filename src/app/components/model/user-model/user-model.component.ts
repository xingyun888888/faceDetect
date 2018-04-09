import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {CustomValidService} from '../../../service/custom-valid.service';
import {validOptions} from './userFormValidConf';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import api from '../../../api';
import {NzModalService} from 'ng-zorro-antd';
import {parseParam} from '../../../utils/common';

@Component({
  selector: 'app-user-model',
  templateUrl: './user-model.component.html',
  styleUrls: ['./user-model.component.css']
})
export class UserModelComponent implements OnInit {
  /**该输入属性，里面包含着table中的所有字段*/
  @Input()
  _formData = null;
  /**
   * 是否启用下拉内容配置项
   */
  @Input()
  isEnableOptions = [];

  /**这个是将table组件中传过来的值放入表单中*/
  @Input()
  set formData(value) {
    this._formData = Object.assign({}, value);
  }

  /**这个是获取表单的字段名*/
  get formData() {
    return this._formData;
  }

  /**
   * 接收父组件，判断是新增还是修改，为true的时候为修改状态，否则为新增,
   */
  @Input()
  isModify;

  /**这个是控制模态框是否弹出的状态属性*/
  @Input()
  isVisible;

  /**向父组件发送数据请求*/
  @Output()
  requestData = new EventEmitter();

  /**向父组件发送关闭表单的请求*/
  @Output() closeModel = new EventEmitter();

  /**定义表单*/
  validateForm: FormGroup;

  /**这个是关闭表单的方法*/
  handleCancel = (e) => {
    this.resetForm(e);
    this.closeModel.emit();
  };

  /**提交表单，提交时做校验操作*/
  submitForm = ($event, value) => {
    $event.preventDefault();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
    }
    console.log(value);
    if (!this.validateForm.valid) {
      /**
       * 在这里使用表单验证 提示校验错误的信息========
       * 使用表单验证服务的valid方法  接收两个参数 第一个是表单对象  第二个参数是配置选项
       */
      this.customValidServ.valid(this.validateForm, validOptions);
      // this.closeModel.emit();
    } else {
      if (!this.isModify) {
        /**在这里请求处理提交表单 数据*/
        this.http.get(api.checkNameIsExist + '?name=' + value.name).subscribe((res) => {
          console.log(res);
          let result = <any>res;
          if (result.code == 10001) {
            this.confirmServ.warning({
              zIndex: 2000,
              title: result.msg
            });
            this._formData.name = '';
          } else {
            this.requestData.emit(value);
            this.validateForm.reset();
          }
        });
      } else {
        this.requestData.emit(value);
        this.validateForm.reset();
      }
    }
  };

  /**重置表单  */
  resetForm($event: MouseEvent) {
    $event.preventDefault();
    this.validateForm.reset();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsPristine();
    }
  }

  /**这个方法是获取当前表单元素绑定的值*/
  getFormControl(name) {
    return this.validateForm.controls[name];
  }


  constructor(private confirmServ: NzModalService, private fb: FormBuilder,
              private customValidServ: CustomValidService, private http: HttpClient) {
  }


  checkNameIsExist(e) {
    /**
     * 要把检查的用户名带过去给后台查询
     */
    this.http.get(api.checkNameIsExist + '?name=' + e.target.value).subscribe((res) => {
      console.log(res);
      let result = <any>res;
      if (result.code == 10001) {
        this.confirmServ.warning({
          zIndex: 2000,
          title: result.msg
        });
        this._formData.name = '';
      }
    });
  }


  ngOnInit() {
    this.validateForm = this.fb.group({
      id: [''],
      name: ['', [Validators.required, Validators.maxLength(10), Validators.pattern('^[0-9a-zA_Z]+$')]],
      displayName: ['', [Validators.required, Validators.maxLength(10)]],
      pwd: ['', [Validators.required, Validators.maxLength(10)]],
      isEnable: ['', [Validators.required]]
    });
  }
}
