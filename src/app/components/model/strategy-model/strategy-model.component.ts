import {Component, EventEmitter, ElementRef, ViewChild, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomValidService} from '../../../service/custom-valid.service';
import api from '../../../api';
import {HttpClient} from '@angular/common/http';
import {validOptions} from './strategyFormValidConf';
import {forEach} from '@angular/router/src/utils/collection';
import {NzModalService} from 'ng-zorro-antd';
import {parseParam} from '../../../utils/common';
import {StrategyWeekOptions} from '../../../config/selectConf';

// import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-strategy-model',
  templateUrl: './strategy-model.component.html',
  styleUrls: ['./strategy-model.component.css']
})
export class StrategyModelComponent implements OnInit {

  /**
   * 摄像头选择模态框是否展示
   * @type {boolean}
   */
  cameraSelectIsShow = false;

  /**
   * 周期选择模态框是否展示
   * @type {boolean}
   */
  weekSelectIsShow = false;

  /**
   * 生效周期
   */
  strategyWeekOptions = [];

  cameraOptionsBack = null;


  /**
   * 摄像头集合
   * @type {any[]}
   */
  cameraOptions;

  /**
   *该输入属性，里面包含着table中的所有字段
   */
  @Input()
  _formData = null;


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
  };

  sTimeChangeHandler(e) {
    console.log(e);
  }

  eTimeChangeHandler(e) {
    console.log(e);
  }

  weekChange(val) {
    console.log(val);
  }

  /**
   * 根据策略ID获取摄像头列表
   */
  getCameraList(ShowOrHide) {
    this.cameraSelectIsShow = ShowOrHide;
    let strategyId: number = 0;
    if (this._formData.id !== undefined && this._formData.id !== null) {
      strategyId = this._formData.id;
    }
    console.log('发送的ID是：' + strategyId);
    // 从接口拿到所有的摄像头并绑定选中
    this.http.get(api.getCameraByStrategy + '?strategyId=' + strategyId).subscribe((res) => {
      const list = <any>res;
      console.log(list);
      let cameraOptions = [];
      list.map((item, index) => {
        if (item.type === '1') {
          cameraOptions.push({label: item.name, value: item.id, checked: true});
        } else {
          cameraOptions.push({label: item.name, value: item.id, checked: false});
        }
      });
      this.cameraOptions = cameraOptions;
    });
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

    if (!this.validateForm.valid) {
      /**
       * 在这里使用表单验证 提示校验错误的信息
       * 使用表单验证服务的valid方法  接收两个参数 第一个是表单对象  第二个参数是配置选项
       */
      this.customValidServ.valid(this.validateForm, validOptions);
      /**
       * 判断checkbox是否选中,先注释,因为采用了radio进行判断
       */
      // if (count === 0) {
      //   this.confirmServ.warning({
      //     zIndex: 2000,
      //     title: '策略生效周期必须选择'
      //   });
      // }
      if (value.ckWeek === undefined) {
        this.confirmServ.warning({
          zIndex: 2000,
          title: '策略生效周期必须选择'
        });
        return;
      }
      if (value.ckType === undefined) {
        this.confirmServ.warning({
          zIndex: 2000,
          title: '生效摄像头必须选择'
        });
        return;
      }
    } else {
      value.camera = this.cameraOptions;
      this.requestData.emit(value);
      this.resetForm($event);
    }
  };


  /**
   *重置表单
   */
  resetForm($event: MouseEvent) {
    $event.preventDefault();
    this.validateForm.reset();
    this._formData.week = Object.assign({}, (new StrategyWeekOptions)).data;
    // this.validateForm.controls["week"].setValue(Object.assign({},(new StrategyWeekOptions)).data);
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
  cameraSelectCancel(e) {
    this.cameraSelectIsShow = false;
  }

  /**
   * 摄像头选择确认事件
   * @param e
   */
  cameraSelectConfirm(e) {
    this.cameraSelectIsShow = false;
  }

  /**
   * 周期选择取消事件
   */
  weekSelectCancel(e) {
    this.weekSelectIsShow = false;
  }

  /**
   * 周期选择确认事件
   * @param e
   */
  weekSelectConfirm(e) {
    this.weekSelectIsShow = false;
  }

  constructor(private http: HttpClient, private fb: FormBuilder,
              private customValidServ: CustomValidService, private confirmServ: NzModalService) {
  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      id: [''],
      checkCamera: [-1],
      name: ['', [Validators.required, Validators.maxLength(22)]],
      sTime: ['', [Validators.required]],
      eTime: ['', [Validators.required]],
      week: [null],
      description: ['', [Validators.maxLength(22)]],
      minAlarmThreshold: ['', [Validators.required, Validators.pattern('[0-9]+')]],
      minPixel: ['', [Validators.required, Validators.pattern('[0-9]+')]],
      pQ: ['', [Validators.required, Validators.pattern('[0-9]+')]],
      ckType: ['', []],
      ckWeek: ['', []],
      camera: [null],
      timeSlotId: [''],
      timeSchedule: [''],
      type: [''],
      operateType: ['']
    });

  }

}
