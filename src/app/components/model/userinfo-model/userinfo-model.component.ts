import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-userinfo-model',
  templateUrl: './userinfo-model.component.html',
  styleUrls: ['./userinfo-model.component.css']
})
export class UserinfoModelComponent implements OnInit {

  @Input()
  _formData = {
    userName:"aa",
    showName:"aa",
    password:"aa",
    moduleName:"aa",
    role:"aa",
    isUse:"aa",
    nowStatus:"aa"

  };

  @Input()
  isVisible;


  @Output()
   requestData = new EventEmitter();

  @Output() closeModel = new EventEmitter();

  validateForm: FormGroup;

  handleCancel = (e) => {
    this.closeModel.emit();
  };



  submitForm = ($event, value) => {
    $event.preventDefault();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[ key ].markAsDirty();
    }
    console.log(value);

    //在这里请求处理提交表单数据

    this.requestData.emit(value);


  };

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
  };

  getFormControl(name) {
    return this.validateForm.controls[ name ];
  }


  constructor(private fb: FormBuilder) {
    this.validateForm = this.fb.group({
      userName            : [this._formData.userName||"", [ Validators.required ] ],
      showName               : [this._formData.showName||"",],
      password            : [ this._formData.password||"", [ Validators.required ] ],
      moduleName: [ this._formData.moduleName||"" ],
      role             : [ this._formData.role||"", [ Validators.required ] ],
      isUse:[this._formData.isUse||""],
      nowStatus:[this._formData.nowStatus||""]
    });
  }

  ngOnInit() {
  }

}
