import {Component, EventEmitter, ElementRef,ViewChild,Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-strategy-model',
  templateUrl: './strategy-model.component.html',
  styleUrls: ['./strategy-model.component.css']
})
export class StrategyModelComponent implements OnInit {


  /**
   * 开始结束时间拉下选择框
   * @type {[{value: string; label: string},{value: string; label: string},{value: string; label: string},{value: string; label: string},{value: string; label: string},{value: string; label: string},{value: string; label: string},{value: string; label: string}]}
   */
  dateOptions = [
    { value: 'android', label: 'android'},
    { value: 'apple', label: 'apple'},
    { value: 'windows', label: 'windows'},
    { value: 'ie', label: 'ie' },
    { value: 'chrome', label: 'chrome'},
    { value: 'github', label: 'github'},
    { value: 'aliwangwang', label: 'aliwangwang'},
    { value: 'dingding', label: 'dingding'},
  ];
  /**
   * 开始时间
   */
  selectedStartDate = this.dateOptions[0];


  /**
   * 结束时间
   */
  selectedEndDate  =  this.dateOptions[0];


  /**
   * 摄像头选择模态框是否展示
   * @type {boolean}
   */
  cameraSelectIsShow = false;

   selectDeviceOperateOptions = [
    { label: '接受所有视频流', value: '接受所有视频流',checked:true},
    { label: '广播所有视频流', value: '广播所有视频流' },
    { label: '人脸分析', value: '人脸分析' },
    { label: '人脸检测', value: '人脸检测' },
    { label: '形体分析', value: '形体分析' },
    { label: '跟踪', value: '跟踪' },
    { label: '存储所有视频', value: '存储所有视频' },
    { label: '告警', value: '告警' },
   ]

   thisSystemOperateOptions = [
     { label: '存储视频', value: '存储视频',checked:true},
     { label: '告警', value: '告警' },
     { label: '人脸分析', value: '人脸分析' },
     { label: '人脸检测', value: '人脸检测' },
     { label: '形体分析', value: '形体分析' },
     { label: '跟踪', value: '跟踪' },
   ]


  @ViewChild('thisSystem') thisSystem: ElementRef;

  @ViewChild("selectDevice")  selectDevice:ElementRef;

  /**
   * 表示当前哪张表单激活状态
   * @type {string}
   */
  currentActiveForm = "thisSystem";


  /**
   *该输入属性，里面包含着table中的所有字段
   */
  @Input()
  _formData = {
    id: '',
    name: '',
    type: '',
    operateType: '',
    description: '',
    createTime: '',
    creater: '',
    modifyTime: '',
    modifier: '',
    minPixel: '',
    pQ: '',
    timeSlotId: ''
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


  /**
   * 摄像头选择取消事件
   */
  cameraSelectCancel(e){
     this.cameraSelectIsShow = false;
  }

  /**
   * 摄像头选择确认事件
   * @param e
   */
  cameraSelectConfirm(e){
    this.cameraSelectIsShow = false;

  }
  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      id: [''],
      name: ['', [Validators.required]],
      type: ['', [ Validators.required ]],
      operateType: ['', [ Validators.required ]],
      description: ['', [Validators.required]],
      createTime: ['', [ Validators.required ]],
      creater: ['', [Validators.required]],
      modifyTime: ['', [Validators.required]],
      modifier: ['', [ Validators.required ]],
      minPixel: ['', [ Validators.required ]],
      pQ: ['', [ Validators.required ]],
      timeSlotId: ['', [ Validators.required ]]
    });
  }

}
