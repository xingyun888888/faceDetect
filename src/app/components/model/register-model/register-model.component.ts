import {Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import api from '../../../api';
import {NzModalService} from 'ng-zorro-antd';
import {CustomValidService} from '../../../service/custom-valid.service';
import {validOptions} from '../facelib-model/faceFormValidConf';
import {ImgPreviewService} from '../../../service/img-preview.service';
import {getFileName, parseParam} from '../../../utils/common';
import {LoadingService} from '../../../service/loading.service';

interface FileReaderEventTarget extends EventTarget {
  result: string;
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

  /**引用模板**/
  @ViewChild("contentTpl")
    previewContent;

  /**人脸库名称下拉列表*/
  faceLibOptions = [];

  /**人脸库此时还可以上传多少张照片*/
  _faceCount: any = '';

  /**表单里面这人脸库此时还可以上传多少张照片*/
  _singleUploadfaceCount = '';

  /***该输入属性，里面包含着table中的所有字段*/
  @Input()
  _formData = null;

  /***  证件类型下拉内容配置项  ***/
  @Input()
  certTypeOptions = [];

  /***  危险等级下拉内容配置项  ***/
  @Input()
  dangerOptions = [];

  /***  性别下拉内容配置项  ***/
  @Input()
  genderOptions = [];

  /***  来源下拉内容配置项  ***/
  @Input()
  sourceOptions = [];

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

  priviewImg = '';

  fileSelect(e) {
    this.imgSelect.nativeElement.click();
    console.log(this.imgSelect);
  }

  @Output()
  getFacelibNames = new EventEmitter(); //将facelib查出的人脸库信息发送给父组件使用

  /**
   * 保存已经上传的图片名称
   * @type {any[]}
   */
  uploadedImgNameList: string[] = [];

  /******  保存单个上传选择的文件  ******/
  uploadImgList: any[] = [];

  /******  图片展示 需要预览时会用到  ******/
  defaultImg = '../../../assets/images/upload-icon.png';


  uploadApi = api.batchUpload;

  /******  删除上传图片列表uploadImgList里面的图片  ******/
  deleteImg(e,data) {
    /**  this.uploadImgList.splice(index, 1);
     if (index > 0) {
        this._formData.path = this.uploadImgList[index - 1];
      } else {
        this._formData.path = this.uploadImgList[this.uploadImgList.length - 1];
      }**/

    //先在这里模拟删除成功  在这里写请求
    this.http.post(api.deleteRegisterImage, data ).subscribe((res)=>{
       let result  = <any>res;
       if(result.code == '10000'){
         this.confirmServ.success({
           zIndex: 3000,
           title: "删除成功"
         })
         this._formData.fileName  = null;
         this.uploadImgList[0] = null;
       }else{
         this.confirmServ.error({
           zIndex: 3000,
           title: "删除失败"
         })
       }
    })
  }
  /**预览图片**/
  showImg(e, path) {
    this.imgPreviewServ.show(this.previewContent);
  }

  /****** 单个上传   ******/
  imgUploadHandler(e) {
    /******  创建一个FormData表单对象，用来封装保存表单数据  ******/
    const formData = new FormData();
    console.dir(this.uploadImgList);
    /******  在这里判断当前选择的文件是否为空，如果为空就提示，否则继续下一步  ******/
    if (this.uploadImgList.length == 0) {
      this.confirmServ.error({
        zIndex: 2000,
        title: '请先选择图片'
      });
      return;
    }
    /******  将选择的文件添加到创建好的表单对象中  ******/
    formData.append('uploadFile', this.uploadImgList[0]);
    /******  请求后台地址 提交已经封装好的表单对象  ******/
    this.loadingServ.isLoading.emit(true);
    this.http.post(api.singleUpload, formData).subscribe((res) => {
      const result = <any>res;
      /****** 请求响应200时，将返回的结果数据解析，并赋值到_formData里面   ******/
      // this._formData.path = result.msgBody.dataSend.PictureList[0]&&result.msgBody.dataSend.PictureList[0].PicturePathDir;
      this._formData.feapath = result.msgBody.dataSend.PictureList[0] && result.msgBody.dataSend.PictureList[0].FeaDir;
      this._formData.path = result.msgBody.dataSend.PictureList[0] && result.msgBody.dataSend.PictureList[0].PicturePathDir;
      /**截取取出图片名称**/
      this._formData.fileName = getFileName(this._formData.path);
      /******  这里是给图片展示用的，暂时没有用  ******/
      this.defaultImg = this.priviewImg;

      this._formData.fileName = this.uploadedImgNameList[0];   //因为只上传一张 所以都维护到这个fileName字段里面
     this.uploadedImgNameList[0] = null;
      /******  提示用户图片添加成功  ******/
      this.confirmServ.success({
        zIndex: 2000,
        title: '图片添加成功'
      });
      this.loadingServ.isLoading.emit(false);
    }, (error) => {
      /******  错误的回调函数，提示上传失败 清空  ******/
      this._formData.path = '';
      this.confirmServ.success({
        zIndex: 2000,
        title: '图片添加失败'
      });
      this.loadingServ.isLoading.emit(false)
    });
  }

  /******  维护上传的状态  ******/
  uploading = false;

  /******  维护当前选择的文件列表  ******/
  fileList = [];

  /******  返回false就是取消上传  ******/
  beforeUpload(file) {
    if (!this.validFileType(file.name, 'jpg')) {
      this.confirmServ.warning({
        zIndex: 2000,
        title: '请选择jpg类型的图片上传'
      });
    } else {
      this.fileList.push(file);
    }
    console.log(file);
    return false;
  }

  /*校验上传文件类型*/
  validFileType(fileName, type) {
    let reg = new RegExp('\\.' + type + '$');
    if (reg.test(fileName)) {
      return true;
    } else {
      return false;
    }
  }


  /******  确认批量上传  ******/
  handleUpload(e) {
    if (this.fileList.length == 0) {
      this.confirmServ.error({
        zIndex: 2000,
        title: '请先选择图片'
      });
      return;
    }
    const formData = new FormData();
    /******  与单个上传不同的是，遍历选择的文件列表-添加  下面都一样  ******/
    this.fileList.forEach((file: any) => {
      console.log(file);
      formData.append('files', file);
    });
    formData.append('facelibId', this._formData.batchFacelibId);
    this.uploading = true;

    this.loadingServ.isLoading.emit(true);
    this.http.post(api.batchUpload, formData, {
      headers: new HttpHeaders({})
    }).subscribe((res: any) => {
      console.log(res);
      let failFile = '';
      res.msgBody.dataSend.PictureList.map((item, index) => {
        if (item.code == 1) {
          console.log(item.PicturePathDir);
          failFile += getFileName(item.PicturePathDir) + '、';
        }
      });
      this.uploading = false;
      this.fileList = [];
      if (failFile.length != 0) {
        this.loadingServ.isLoading.emit(false);
        this.confirmServ.error({
          zIndex: 3000,
          title: '上传失败',
          content: failFile.substring(0, failFile.length - 1) + ' 等,文件上传失败'
        });
        return;
      }
      this.loadingServ.isLoading.emit(false);
      this.confirmServ.success({
        zIndex: 3000,
        content: '上传成功'
      });
    }, (err) => {
      this.uploading = false;
      this.loadingServ.isLoading.emit(false);
      this.confirmServ.error({
        zIndex: 3000,
        content: '上传失败'
      });
      this.fileList = [];
    });
  }

  fileChange(e) {
    /**在这里加一个判断  如果当前已经上传了图片 那么需要先删除旧的 在上传新的 **/
    if(this._formData.fileName){
      this.confirmServ.warning({
        zIndex: 2000,
        title: '请先将下面的图片删除，再进行添加'
      });
      return;
    }
    if (!this.validFileType(e.target.files[0].name, 'jpg')) {
      this.confirmServ.warning({
        zIndex: 2000,
        title: '请选择jpg类型的图片上传'
      });
      return;
    }
    console.log(e.target.files[0].name);
    this.uploadImgList[0] = e.target.files[0];
    let fileName = getFileName(e.target.files[0].name);
    this.uploadedImgNameList[0] = fileName;

    /** 下面这几步都是图片预览的功能 **/

    /******  创建一个文件读取对象  ******/
    const reader = new FileReader();

    /******  读取文件保存成url类型  ******/
    reader.readAsDataURL(this.uploadImgList[0]);

    /******  以上两步当前端界面不需要展示图片的话可以省略  ******/
    reader.onload = (res: FileReaderEvent) => {
      /**将读取到的图片base64位数据保存起来 **/
      this.priviewImg = reader.result;
    };
  }

  /**这个是关闭表单的方法*/
  handleCancel = (e) => {
    this.resetForm(e);
    this.closeModel.emit();
  };

  /***  提交表单，提交时做校验操作  ***/
  submitForm = ($event, value) => {
    $event.preventDefault();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
    }
    console.log(value);
    if (!this.validateForm.valid) {
      /***  使用表单验证服务的valid方法，接收两个参数，第一个是表单对象，第二个参数是配置选项，提示校验错误的信息 ***/
      this.customValidServ.valid(this.validateForm, validOptions);
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
    this.uploadImgList = [];
  }

  /**这个方法是获取当前表单元素绑定的值*/
  getFormControl(name) {
    return this.validateForm.controls[name];
  }

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private http: HttpClient, private confirmServ: NzModalService, private customValidServ: CustomValidService,
              private imgPreviewServ:ImgPreviewService,private loadingServ:LoadingService) {
    this.beforeUpload = this.beforeUpload.bind(this);
    this.getfaceLibName();
  }

  /**获取人脸库的名称下拉列表*/
  getfaceLibName() {
    this.http.get(api.queryFacelib).subscribe((res) => {
      console.dir(res);
      const list = <any>res;
      //将查出结果传给给b父组件register.comonent使用
      this.getFacelibNames.emit(list);

      /****  在这里list是一个数组，需要取到MaxNum和faceCount，就先遍历   ****/
      list.map((item, index) => {
        /****  将相减的值直接再保存到list里面   ****/
        item._faceCount = item.maxNum - item.faceCount;
      });
      console.log(list);
      this.faceLibOptions = list;
    });
  }

  /****  选择不同人脸库的时候就   显示该人脸库下剩余的数量   ****/
  batchFacelibIdChange(currentId) {
    this.faceLibOptions.map((item, index) => {
      if (item.id == currentId) {
        this._faceCount = item._faceCount;
      }
    });
  }

  faceLibIdChange(currentId) {
    this.faceLibOptions.map((item, index) => {
      if (item.id == currentId) {
        this._singleUploadfaceCount = item._faceCount;
      }
    });
  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      id: [''],
      name: ['', [Validators.required, Validators.maxLength(22)]],
      gender: ['', [Validators.required]],
      type: ['', [Validators.required]],
      code: ['', [Validators.required]],
      path: ['', [Validators.maxLength(200)]],
      fileName: [''], /**---这里维护一个状态字段 用来保存照片的名字---**/
      phoneno: ['', [Validators.maxLength(200)]],
      // md5: [''],
      feapath: [''],
      // time: [''],
      address: ['', [Validators.maxLength(100)]],
      source: [''],
      // zoneno: [''],
      // zonename: [''],
      faceLibid: ['', [Validators.required]],
      dc: ['', [Validators.required]],
      batchFacelibId: ['']
      // imgid: ['']
    });
  }
}
