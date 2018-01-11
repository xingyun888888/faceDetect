import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-recognize-model',
  templateUrl: './recognize-model.component.html',
  styleUrls: ['./recognize-model.component.css']
})
export class RecognizeModelComponent implements OnInit {
  @Input()
  _formData = {
    id:"",
    name:"",
    serialNum:"",
    sex:"",
    zoneNum:"",
    camId:"",
    direction:"",
    similarDegree:"",
    path:"",
    snapPath:"",
    time:"",
    dc:""
  }


  @Input()
  set formData(value){
    this._formData = Object.assign({},value);
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

  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      id:[""],
      name : ["", [ Validators.required ] ],
      serialNum: [""],
      sex : ["", [ Validators.required ] ],
      zoneNum:[""],
      camId: ["",[Validators.required ] ],
      direction: [""],
      similarDegree: [""],
      path: [""],
      snapPath: ["",[Validators.required ] ],
      time: [""],
      dc: [""]
    });
  }
  numberValidator = (control: FormControl): any => {
    const val = control.value;
    const numberReg =  /^\d+$/g;
    const result = numberReg.test(val);
    return result?null:{pwd:{info:"密码必须是数字"}}
  }
}
