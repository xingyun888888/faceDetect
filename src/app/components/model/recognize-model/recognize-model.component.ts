import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-recognize-model',
  templateUrl: './recognize-model.component.html',
  styleUrls: ['./recognize-model.component.css']
})
export class RecognizeModelComponent implements OnInit {
  /**
   *该输入属性，里面包含着table中的所有字段
   */
  @Input()
  _formData = {
    id: '',
    name: '',
    serialNum: '',
    sex: '',
    zoneNum: '',
    camId: '',
    direction: '',
    similarDegree: '',
    path: '',
    snapPath: '',
    time: '',
    dc: ''
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
  }

  /**
   *提交表单，提交时做校验操作
   */
  submitForm = ($event, value) => {
    $event.preventDefault();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
    }
    console.log(value);
    //在这里请求处理提交表单数据
    this.requestData.emit(value);
    this.validateForm.reset();
  }

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

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      id: [''],
      name: ['', [Validators.required]],
      serialNum: ['', [Validators.required]],
      sex: ['', [Validators.required]],
      zoneNum: ['', [Validators.required]],
      camId: ['', [Validators.required]],
      direction: ['', [Validators.required]],
      similarDegree: ['', [Validators.required]],
      path: ['', [Validators.required]],
      snapPath: ['', [Validators.required]],
      time: ['', [Validators.required]],
      dc: ['', [Validators.required]]
    });
  }
}
