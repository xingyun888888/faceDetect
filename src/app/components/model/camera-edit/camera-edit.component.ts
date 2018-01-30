import {Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {NzModalService} from 'ng-zorro-antd';
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
  styleUrls: ['./camera-edit.component.less']
})

export class CameraEditComponent implements OnInit {
  /**该输入属性，里面包含着table中的所有字段*/
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
    camInfo: '',
    position: ''
  };

  /**分析仪下拉列表*/
  options = [];

  /**楼层下拉列表*/
  floorOptions = [
    { value: 'floor1', label: '地下一层',src:"../../../../assets/images/map-default.png"},
    { value: 'floor2', label: '地下二层',src:"../../../../assets/images/map-default1.png"},
    { value: 'floor3', label: '地下三层',src:"../../../../assets/images/map-default2.png"},
    { value: 'floor4', label: '地下四层',src:"../../../../assets/images/map-default3.png"},
    { value: 'floor5', label: '地下五层',src:"../../../../assets/images/map-default.png"}
  ];

  /**当前值select展示的值*/
  selectedMap = this.floorOptions[0];

  /**这个是将table组件中传过来的值放入表单中*/
  @Input()
  set formData(value) {
    this._formData = Object.assign({}, value);
  }

  /**这个是获取表单的字段名*/
  get formData() {
    return this._formData;
  }

  /**这个是控制模态框是否弹出的状态属性*/
  @Input()
  isVisible;

  /**向父组件发送数据请求*/
  @Output()
  requestData = new EventEmitter();

  /**向父组件发送关闭表单的请求*/
  @Output() closeModel = new EventEmitter();

  /**向父组件发送关闭添加坐标的表单页面的请求 --这个不用父组件处理了

  /**是否展示地图;*/
  isShowMap = false;

  /**地图摄像头标志默认位置*/
  defaultOffsetPosition = {
    x: 0,
    y: 0
  };

  /**打开地图模态框  并且根据数据设置摄像头位置的默认位置*/
  openMapModel(e){
    this.isShowMap=true;
    let [x,y] = this._formData.position.split(/,|，/g);
    this.camera.nativeElement.style.left = x+"px";
    this.camera.nativeElement.style.top = y+"px";
  }
  /**这个可以直接取到那个标志的元素  然后在控制器里操作它(注意:这里拿到的是dom元素)*/
  @ViewChild('camera') camera: ElementRef;

  /**拖拽开始事件*/
  dragStartHandler(e) {
    this.defaultOffsetPosition.x = e.offsetX;
    this.defaultOffsetPosition.y = e.offsetY;
  }

  /**拖拽放置事件*/
  dropHandler(e) {
    e.preventDefault();
    this.camera.nativeElement.style.left = (e.offsetX - this.defaultOffsetPosition.x) + 'px';
    this.camera.nativeElement.style.top = (e.offsetY - this.defaultOffsetPosition.y) + 'px';
    this._formData.position = `${e.offsetX - this.defaultOffsetPosition.x},${e.offsetY - this.defaultOffsetPosition.y}`;
  }

  /**拖拽*/
  dragoverHandler(e) {
    e.preventDefault();
  }

  /**定义表单*/
  validateForm: FormGroup;

  /**这个是关闭表单的方法*/
  handleCancel = (e) => {
    this.resetForm(e);
    this.closeModel.emit();
  }

  /**这个是关闭表单的方法*/
  handleMapCancel = (e) => {
    this.isShowMap = false;

  }

  /**提交表单，提交时做校验操作*/
  submitForm = ($event, value) => {
    $event.preventDefault();
    console.log(this.validateForm.valid);
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
    }
    /**如果表单验证失败*/
    if (!this.validateForm.valid) {
      this.confirmServ.warning({
        content: '表单填写错误,请检查'
      });
      this.closeModel.emit();
    } else {
      /**在这里请求处理提交表单数据*/
      this.requestData.emit(value);
      this.validateForm.reset();
    }
  }

  /**重置表单*/
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

  constructor(private http: HttpClient, private fb: FormBuilder, private confirmServ: NzModalService) {
    this.getAnalyserName();
  }

  /**获取分析仪的名称列表*/
  getAnalyserName() {
    this.http.get(api.queryAnalyserName).subscribe((res) => {
      console.dir(res);
      const list = <any>res;
      this.options = list;
    });
  }

  ngOnInit() {
    /**响应式表单，Validators.required表示必填*/
    this.validateForm = this.fb.group({
      id: [''],
      name: ['', [Validators.required, Validators.maxLength(10)]],
      type: ['', [Validators.required]],
      serialNum: ['', [Validators.required, Validators.maxLength(6)]],
      ip: ['', [Validators.required]],
      direction: ['', [Validators.required, numberValidator]],
      analyserID: ['', [Validators.required]],
      zoneID: ['', [Validators.required]],
      strategyID: ['', [Validators.required]],
      doorID: ['', [Validators.required]],
      port: ['', [Validators.required]],
      user: ['', [Validators.required]],
      pwd: ['', [Validators.required, Validators.maxLength(9), Validators.pattern('[0-9]+')]],
      rtspPort: ['', [Validators.required]],
      rtspPath: ['', [Validators.required]],
      camInfo: ['', [Validators.required]],
      position: ['', [Validators.required]]
    });
  }
}


