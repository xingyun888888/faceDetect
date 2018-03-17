import {Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import api from '../../../api';
import {NzModalService} from 'ng-zorro-antd';

interface FileReaderEventTarget extends EventTarget {
  result: string
}

interface FileReaderEvent extends Event {
  target: FileReaderEventTarget;
}

@Component({
  selector: 'app-register-model',
  templateUrl: './register-model.component.html',
  styleUrls: ['./register-model.component.css']
})
export class RegisterModelComponent implements OnInit {
  /***该输入属性，里面包含着table中的所有字段*/
  @Input()
  _formData = null;

  /**
   * 证件类型下拉内容配置项
   */
  @Input()
  certTypeOptions = [];

  /**
   * 危险等级下拉内容配置项
   */
  @Input()
  dangerOptions = [];

  /**
   * 性别下拉内容配置项
   */
  @Input()
  genderOptions = [];


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

  @ViewChild('imgSelect', {read: ElementRef}) imgSelect: ElementRef;


  priviewImg: string = '';



  fileSelect(e) {
    this.imgSelect.nativeElement.click();
    console.log(this.imgSelect);
  }

  uploadImgNameList: string[] = [];

  uploadImgList: any[] = [];


  defaultImg: string = '../../../assets/images/upload-icon.png';

  uploadApi = api.uploadImg;
  /**
   * 删除上传图片列表uploadImgList里面的图片
   * @param e
   * @param index
   */
  deleteImg(e, index) {
    this.uploadImgList.splice(index, 1);
    if (index > 0) {
      this._formData.path = this.uploadImgList[index - 1];
    } else {
      this._formData.path = this.uploadImgList[this.uploadImgList.length - 1];
    }
  }


  /**
   * 批量上传
   */
  batchUploadHandler({file,fileList}){
    const status = file.status;
    if (status !== 'uploading') {
      console.log(file, fileList);
    }
    if (status === 'done') {
    } else if (status === 'error') {
    }
  }

  imgUploadHandler(e){
    let formData = new FormData();
    console.dir(this.uploadImgList);
    if(this.uploadImgList.length==0){
      this.confirmServ.error({
        zIndex: 2000,
        title: "请先选择图片"
      })
      return;
    }
    formData.append('uploadFile',this.uploadImgList[0]);
    let reader = new FileReader();
    reader.readAsDataURL(this.uploadImgList[0]);
    reader.onload = (res: FileReaderEvent) => {
      this.priviewImg = res.target.result;
      this.http.post(api.uploadImg, formData).subscribe((res) => {
        const result = <any>res;
        this._formData.path = result.msgBody.dataSend.PictureList[0]&&result.msgBody.dataSend.PictureList[0].PicturePathDir;
        this.defaultImg = this.priviewImg;
        this.confirmServ.success({
          zIndex: 2000,
          title: "缩略图添加成功"
        })
      }, (error) => {
        this._formData.path = "";
        this.confirmServ.success({
          zIndex: 2000,
          title: "缩略图添加失败"
        })
      });
    };
  }

  /**
   * @param e
   */
  fileChange(e) {
    console.log(e);
    //let img = e.target.files[0];
    console.log(e.target.files[0].name);
    this.uploadImgList[0] = e.target.files[0];
    this._formData.path = e.target.files[0].name;
    this.uploadImgNameList.push(e.target.files[0].name);
  }

  /**这个是关闭表单的方法*/
  handleCancel = (e) => {
    this.resetForm(e);
    this.closeModel.emit();
  }

  /**提交表单，提交时做校验操作*/
  submitForm = ($event, value) => {
    $event.preventDefault();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
    }
    console.log(value);
    /**
     * 在这里验证字段是否通过校验
     */
    if (!this.validateForm.valid) {
      return;
    }
    /**在这里请求处理提交表单数据*/
    this.requestData.emit(value);
    this.validateForm.reset();
  }

  /**重置表单*/
  resetForm($event: MouseEvent) {
    $event.preventDefault();
    this.validateForm.reset();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsPristine();
    }
    this.uploadImgList = [];
  }

  /**这个方法是获取当前表单元素绑定的值*/
  getFormControl(name) {
    return this.validateForm.controls[name];
  }

  constructor(private fb: FormBuilder, private http: HttpClient, private confirmServ: NzModalService) {
  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      id: [''],
      name: ['', [Validators.required]],
      seriernum: [''],
      gender: [0],
      type: [0],
      code: [''],
      path: ['', [Validators.required]],
      phoneno: [''],
      md5: [''],
      feapath: [''],
      time: [''],
      address: [''],
      source: [''],
      zoneno: [''],
      zonename: [''],
      faceLibid: [''],
      dc: [0],
      imgid: ['']
    });
  }
}
