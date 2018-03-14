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
    port: '',
    mediaIP: '',
    mediaPort: '',
    direction: '',
    analyserID: '',
    zoneID: '',
    strategyID: '',
    doorID: '',
    user: '',
    pwd: '',
    rtspPort: '',
    rtspPath: '',
    camInfo: '',
    camMapX: '',
    camMapY: '',
    camState: '',
    streamType: '',
    districtID: '',
    districtName: '',
    area: '',
    areaID: '',
    areaName: '',
    distictUrl: '',
    img_url: ''
  };

  /**分析仪下拉列表*/
  options = [];

  /**楼层下拉列表*/
  mapOptions = [];

  /**当前值select展示的值*/
  selectedMap = this.mapOptions[0];


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
  openMapModel(e) {
    this.isShowMap = true;
    const x = this._formData.camMapX;
    const y = this._formData.camMapY;
    this.camera.nativeElement.style.left = x + 'px';
    this.camera.nativeElement.style.top = y + 'px';
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
    /** this._formData.position = `${e.offsetX - this.defaultOffsetPosition.x},${e.offsetY - this.defaultOffsetPosition.y}`;*/
    this._formData.camMapX = `${e.offsetX - this.defaultOffsetPosition.x}`;
    this._formData.camMapY = `${e.offsetY - this.defaultOffsetPosition.y}`;
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


  /**
   * 获取地图列表
   */
  getMapList() {
    this.http.get(api.queryMapList + '?type=map').subscribe((res) => {
      console.dir(res);
      let list = <any>res;
      /**
       * 判断如果文件是file协议;
       */
      list.map((item,index)=>{
          if(/^\\\\/.test(item.value)){
            console.log(item.value);
            item.value ="file:"+item.value.replace(/\\/g,"/");
          }
      })
      this.mapOptions = list;
      this.selectedMap = list[0];
    });
  }

  /**
   *
   * @param e
   * @param data
   */
  mapSelectHandler(e) {
    /**
     * 遍历地图数组 然后判断 当前id对应的地图;取出id的名字  并跟坐标设置modal里面的选择框关联起来
     */
    this.mapOptions.map((item, index) => {
      if (item.id == this._formData.districtID) {
        this._formData.districtName = item.name;
        this.selectedMap = item;
      }
    });
  }


  /**
   * 为了跟表单 地图选择下拉框关联起来 才绑定这么一个方法
   * @param e
   */
  modalMapChangeHandle(e) {
    this._formData.districtID = this.selectedMap.id;
  }

  constructor(private http: HttpClient, private fb: FormBuilder, private confirmServ: NzModalService) {
    this.getAnalyserName();
    this.getMapList();
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
      type: [''],
      name: [''],
      serialNum: [''],
      ip: [''],
      port: [''],
      mediaIP: [''],
      mediaPort: [''],
      direction: ['', [numberValidator]],
      analyserID: [''],
      zoneID: [''],
      strategyID: [''],
      doorID: [''],
      user: [''],
      pwd: ['', [Validators.maxLength(9), Validators.pattern('[0-9]+')]],
      rtspPort: [''],
      rtspPath: [''],
      camInfo: [''],
      camMapX: [''],
      camMapY: [''],
      camState: [''],
      streamType: [''],
      districtID: [''],
      districtName: [''],
      area: [''],
      areaID: [''],
      areaName: [''],
      distictUrl: [''],
      img_url: ['']
    });
  }
}


