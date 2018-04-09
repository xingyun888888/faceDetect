import {Component, OnInit, Input, Output, EventEmitter, ViewChild} from '@angular/core';
import {NgxCarousel} from 'ngx-carousel';
import {photoWidth} from '../../../config/imgConfig';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {CustomValidService} from '../../../service/custom-valid.service';
import {validOptions} from '../facelib-model/faceFormValidConf';
import {ImgPreviewService} from '../../../service/img-preview.service';

@Component({
  selector: 'app-recognize-model',
  templateUrl: './recognize-model.component.html',
  styleUrls: ['./recognize-model.component.css']
})
export class RecognizeModelComponent implements OnInit {
  /**定义carousel配置**/
  public carouselOne: NgxCarousel = {
    grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
    slide: 1,
    speed: 400,
    interval: 4000,
    point: {
      visible: true
    },
    load: 2,
    touch: true,
    loop: true,
    custom: 'banner'
  };

  photoWidth = photoWidth;

  /***  危险等级下拉内容配置项  ***/
  @Input()
  dangerOptions = [];

  /***  性别下拉内容配置项  ***/
  @Input()
  genderOptions = [];

  /**该输入属性，里面包含着table中的所有字段*/
  @Input()
  _formData = null;

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

  /**定义表单*/
  validateForm: FormGroup;

  @ViewChild('contentTpl')
  previewContent;

  priviewImg: string;

  previewImg(e, value, width) {
    this.priviewImg = value;
    this.imgPreviewServ.show(this.previewContent, width);
  }

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
       * 在这里使用表单验证 提示校验错误的信息
       * 使用表单验证服务的valid方法  接收两个参数 第一个是表单对象  第二个参数是配置选项
       */
      this.customValidServ.valid(this.validateForm, validOptions);
      // this.closeModel.emit();
    } else {
      /**在这里请求处理提交表单数据*/
      this.requestData.emit(value);
      this.validateForm.reset();
    }
  };

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

  constructor(private fb: FormBuilder, private customValidServ: CustomValidService, private imgPreviewServ: ImgPreviewService) {
  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      id: [''],
      name: [''],
      personid: [''],
      serialNum: [''],
      gender: [''],
      zoneNum: [''],
      camId: [''],
      direction: [''],
      similarDegree: [''],
      path: [''],
      snapPath: [''],
      time: [''],
      dc: [''],
      type: [''],
      card: [''],
      basepath: [''],
      url: [''],
      mappath: [''],
      mappath_new: [''],
      state: ['']
    });
  }
}
