import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import api from '../../../api';
import {numberValidator} from '../../../validator/validators';
import {HttpClient} from '@angular/common/http';
import {NzModalService} from 'ng-zorro-antd';
import {validOptions} from '../facelib-model/faceFormValidConf';
import {CustomValidService} from '../../../service/custom-valid.service';

@Component({
  selector: 'app-analyzer-model',
  templateUrl: './analyzer-model.component.html',
  styleUrls: ['./analyzer-model.component.less']
})
export class AnalyzerModelComponent implements OnInit {
  /**
   *该输入属性，里面包含着table中的所有字段
   */
  @Input()
  _formData = {
    id: '',
    name: '',
    port: '',
    ip: '',
    state: '',
  };
  /**
   *这个是将table组件中传过来的值放入表单中
   */
  @Input()
  set formData(value) {
    this._formData = Object.assign({}, value);
  }

  /**
   *这个是获取表单的字段名
   */
  get formData() {
    return this._formData;
  }

  /**
   * 状态下拉内容配置项
   */
  @Input()
  analyzerStateOptions = [];

  /**
   *这个是控制模态框是否弹出的状态属性
   */
  @Input()
  isVisible;

  /**
   *向父组件发送数据请求
   */
  @Output()
  requestData = new EventEmitter();

  /**
   *向父组件发送关闭表单的请求
   */
  @Output() closeModel = new EventEmitter();

  /**
   *定义表单
   */
  validateForm: FormGroup;

  /**
   *这个是关闭表单的方法
   */
  handleCancel = (e) => {
    this.resetForm(e);
    this.closeModel.emit();
  };

  /**
   *提交表单，提交时做校验操作
   */
  submitForm = ($event, value) => {
    debugger;
    $event.preventDefault();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
    }
    console.log(value);
    // //在这里请求处理提交表单数据
    // this.requestData.emit(value);
    // this.validateForm.reset();

    if (!this.validateForm.valid) {
      /******  在这里使用表单验证，提示校验错误的信息，使用表单验证服务的valid方法，接收两个参数，第一个是表单对象，第二个参数是配置选项  ******/
      this.customValidServ.valid(this.validateForm, validOptions);
      // this.closeModel.emit();
    } else {
      /******  在这里请求处理提交表单数据  ******/
      this.requestData.emit(value);
      this.validateForm.reset();
    }
  };

  /**
   *重置表单
   */
  resetForm($event: MouseEvent) {
    $event.preventDefault();
    this.validateForm.reset();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsPristine();
    }
  }

  /**
   *这个方法是获取当前表单元素绑定的值
   */
  getFormControl(name) {
    return this.validateForm.controls[name];
  }

  constructor(private fb: FormBuilder, private customValidServ: CustomValidService) {
  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      id: [''],
      name: ['', [Validators.required, Validators.maxLength(40)]],
      port: ['', [Validators.required, Validators.maxLength(5), Validators.pattern('[0-9]+')]],
      ip: ['', [Validators.required, Validators.maxLength(25)]],
      state: ['', [Validators.required]],
    });
  }
}
