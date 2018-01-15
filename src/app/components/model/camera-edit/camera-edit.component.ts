import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import {numberValidator} from '../../../validator/validators';

@Component({
  selector: 'app-camera-edit',
  templateUrl: './camera-edit.component.html',
  styleUrls: ['./camera-edit.component.css']
})

export class CameraEditComponent implements OnInit {
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

  @Input()
  set formData(value){
    this._formData = Object.assign({}, value);
  }

  get formData(){
    return this._formData;
  }

  @Input()
  isVisible;

  @Output()
  requestData = new EventEmitter();

  @Output() closeModel = new EventEmitter();

  validateForm: FormGroup;

  handleCancel = (e) => {
    this.resetForm(e);
    this.closeModel.emit();
  }

  submitForm = ($event, value) => {
    $event.preventDefault();

    /**
     * 提交时校验
     */
    console.log(this.validateForm.valid);


    for (const key in this.validateForm.controls) {
      this.validateForm.controls[ key ].markAsDirty();
    }
    console.log(value);
    //在这里请求处理提交表单数据
    this.requestData.emit(value);
  }

  resetForm($event: MouseEvent) {
    $event.preventDefault();
    this.validateForm.reset();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[ key ].markAsPristine();
    }
  }


  userNameAsyncValidator = (control: FormControl): any => {
    return Observable.create(function (observer) {
      setTimeout(() => {
        if (control.value === 'JasonWood') {
          observer.next({ error: true, duplicated: true });
        } else {
          observer.next(null);
        }
        observer.complete();
      }, 1000);
    });
  }

  getFormControl(name) {
    return this.validateForm.controls[ name ];
  }

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    /*响应式表单，Validators.required表示必填*/
    this.validateForm = this.fb.group({
      id: [''],
      name: ['', [Validators.required, Validators.maxLength(10)]],
      type: ['', Validators.required],
      serialNum: ['', Validators.required],
      ip: ['', Validators.required],
      direction: ['', Validators.required],
      analyserID: ['', Validators.required],
      zoneID: ['', Validators.required],
      strategyID: ['', Validators.required],
      doorID: ['', Validators.required],
      port: ['', Validators.required],
      user: ['', Validators.required],
      pwd: ['', [ Validators.required, Validators.maxLength(9), Validators.pattern('[0-9]+')]],
      rtspPort: ['', Validators.required],
      rtspPath: ['', Validators.required],
      camInfo: ['', Validators.required]
    });
  }


}


