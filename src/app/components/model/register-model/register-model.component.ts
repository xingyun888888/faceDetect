import { Component, OnInit, Input, Output, EventEmitter,ViewChild,ElementRef} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-register-model',
  templateUrl: './register-model.component.html',
  styleUrls: ['./register-model.component.css']
})
export class RegisterModelComponent implements OnInit {
  @Input()
  _formData = {
    id:'',
    imgPath:"",
    name:'',
    seriernum:'',
    sex:'',
    type:'',
    code:'',
    path:'',
    feapath:'',
    facelibid:''
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

  @ViewChild("imgSelect",{read:ElementRef}) imgSelect:ElementRef;


  fileSelect(e){
    this.imgSelect.nativeElement.click();
    console.log(this.imgSelect)
  }

  fileChange(e){
    console.log(e);
  }


  handleCancel = (e) => {
    this.resetForm(e);
    this.closeModel.emit();
  }

  submitForm = ($event, value) => {
    $event.preventDefault();
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
    this.validateForm = this.fb.group({
      id: [''],
      imgPath:[''],
      name: [''],
      seriernum: [''],
      sex: [''],
      type: [''],
      code: [''],
      path: [''],
      feapath: [''],
      facelibid: ['']
    });
  }

}
