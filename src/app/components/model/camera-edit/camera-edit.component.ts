import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import api from '../../../api';

import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import {numberValidator} from '../../../validator/validators';


@Component({
  selector: 'app-camera-edit',
  templateUrl: './camera-edit.component.html',
  styleUrls: ['./camera-edit.component.css']
})

export class CameraEditComponent implements OnInit {
  /**
   *该输入属性，里面包含着table中的所有字段
   */
  @Input()
  _formData = {
    id: '',
    type: '',
    name: '',
    serialNum: '',
    ip: '',
    direction: '',
    analyserID: '',
    zoneID: '',
    strategyID: '',
    doorID: '',
    port: '',
    user: '',
    pwd: '',
    rtspPort: '',
    rtspPath: '',
    camInfo: ''
  };

  options = [];

  /**
   *这个是将table组件中传过来的值放入表单中
   */
  @Input()
  set formData(value){
    this._formData = Object.assign({}, value);
  }
  /**
   *这个是获取表单的字段名
   */
  get formData(){
    return this._formData;
  }
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
  val: Validators;
  /**
   *这个是关闭表单的方法
   */
  handleCancel = (e) => {
    this.resetForm(e);
    this.closeModel.emit();
  }
  /**
   *提交表单，提交时做校验操作
   */
  submitForm = ($event, value) => {
    $event.preventDefault();
    console.log(this.validateForm.valid);
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[ key ].markAsDirty();
    }
    //console.log(value);
    //在这里请求处理提交表单数据
    this.requestData.emit(value);
  }
  /**
   *重置表单
   */
  resetForm($event: MouseEvent) {
    $event.preventDefault();
    this.validateForm.reset();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[ key ].markAsPristine();
    }
  }

  /**
   *这个方法是获取当前表单元素绑定的值
   */
  getFormControl(name) {
    return this.validateForm.controls[ name ];
  }

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.getAnalyserName();
  }

  /**
   *获取分析仪的名称列表
   */
  getAnalyserName() {
    this.http.get(api.queryAnalyserName).subscribe((res) => {
      console.dir(res);
      const list = <any>res;
      this.options = list;
    });
  }

  ngOnInit() {
    /**
     *响应式表单，Validators.required表示必填
     */
    this.validateForm = this.fb.group({
      id: [''],
      name: ['', [Validators.required, Validators.maxLength(10)]],
      type: ['', [ Validators.required ]],
      serialNum: ['', [ Validators.required ]],
      ip: ['', [ Validators.required ]],
      direction: ['', [ Validators.required , numberValidator]],
      analyserID: ['',[Validators.required]],
      zoneID: ['', [ Validators.required ]],
      strategyID: ['', [ Validators.required ]],
      doorID: ['', [ Validators.required ]],
      port: ['', [ Validators.required ]],
      user: ['', [ Validators.required ]],
      pwd: ['', [ Validators.required, Validators.maxLength(9), Validators.pattern('[0-9]+')]],
      rtspPort: ['', [ Validators.required ]],
      rtspPath: ['', [ Validators.required ]],
      camInfo: ['', [ Validators.required ]]
    });
  }
}


