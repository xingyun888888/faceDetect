import {Component, EventEmitter, Input, OnInit, Output,OnChanges,SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup,FormControl} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit, OnChanges{
  ngOnChanges(changes: SimpleChanges): void {
  }

  validateForm: FormGroup;

  @Input()
  upOrDown = true;

  @Output()
  queryCondition = new EventEmitter();

  /**接收父组件传进来的参数*/
  @Input()
  _searchTitle: any = [];

  @Input()
  _formData: any = [];

  constructor(private fb: FormBuilder) {
  }




  submitForm(e, value) {
    /**在这里请求处理提交表单数据*/
    this.queryCondition.emit(value);
    this.validateForm.reset();
  }

  ngOnInit() {
    this.validateForm = this.fb.group({});
    this._searchTitle.map((item, index) => {
      this._formData[item.key] = '';
      this.validateForm && this.validateForm.addControl(item.key, new FormControl());
    })
    console.log(this.validateForm);
  }
}
