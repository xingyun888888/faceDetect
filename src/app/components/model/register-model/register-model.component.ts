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
  _formData = {
    id: '',
    name: '',
    seriernum: '',
    gender: '',
    type: '',
    code: '',
    path: '',
    phoneno: '',
    md5: '',
    feapath: '',
    time: '',
    address: '',
    source: '',
    zoneno: '',
    zonename: '',
    facelibid: '',
    dc: '',
    imgid: ''
  };

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

  uploadImgList: string[] = [];

  defaultImg: string = '../../../assets/images/upload-icon.png';


  /**
   * 删除上传图片列表uploadImgList里面的图片
   * @param e
   * @param index
   */
  deleteImg(e,index){
    this.uploadImgList.splice(index,1);
    if(index>0){
      this._formData.path = this.uploadImgList[index-1];
    }else{
      this._formData.path = this.uploadImgList[this.uploadImgList.length-1];
    }
  }


  fileChange(e) {
    console.log(e);
    let img = e.target.files[0];
    console.log(e.target.files[0].name);
    this._formData.path = e.target.files[0].name;
    this.uploadImgList.push(e.target.files[0].name);
    let formData = new FormData();
    formData.append('uploadFile', img);
    let reader = new FileReader();
    reader.readAsDataURL(img);
    reader.onload = (res: FileReaderEvent) => {
      this.priviewImg = res.target.result;
      this.http.post(api.uploadImg, formData).subscribe((res) => {
        const result = <any>res;
        this._formData.path = result.path;
        this.defaultImg = this.priviewImg;
      }, (error) => {
      });
    };
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
    if(!this.validateForm.valid){
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

  constructor(private fb: FormBuilder, private http: HttpClient,private confirmServ: NzModalService) {
  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      id: [''],
      name: ['', [ Validators.required ]],
      seriernum: [''],
      gender: [''],
      type: [''],
      code: [''],
      path: ['', [ Validators.required ]],
      phoneno: [''],
      md5: [''],
      feapath: [''],
      time: [''],
      address: [''],
      source: [''],
      zoneno: [''],
      zonename: [''],
      facelibid: [''],
      dc: [''],
      imgid: ['']
    });
  }
}
