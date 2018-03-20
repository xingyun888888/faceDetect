import {Component, EventEmitter, Input, OnInit, Output,OnChanges,SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup,FormControl} from '@angular/forms';
import {NzModalService} from 'ng-zorro-antd';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit, OnChanges{
  ngOnChanges(changes: SimpleChanges): void {
  }

  /**
   * 表单的引用
   */
  validateForm: FormGroup;

  /**
   * 没有用到了
   * @type {boolean}
   */
  @Input()
  upOrDown = true;

  @Input()
  checkName:string = "查询";
  /**
   * 保存查询的数据 通知父组件
   * @type {EventEmitter<any>}
   */
  @Output()
  queryCondition = new EventEmitter();

  /**接收父组件传进来的参数*/
  @Input()
  _searchTitle: any = [];

  /**
   * 保存表单的数据
   * @type {any[]}
   * @private
   */
  @Input()
  _formData: any = [];

  constructor(private fb: FormBuilder, private confirmServ: NzModalService) {
  }

  /**
   * 表单提交的事件
   * @param e
   * @param value
   */
  submitForm(e, value) {
    /**
     * 在这里请求处理提交表单数据
     * */
    const _this = this;
    let flag = true;
    for(let key in value){
      if(value[key]){
        flag = false;
      }
    }

    if(flag){
      this.confirmServ.warning({
        content: '请选择查询条件',
      });
    }else{
      _this.queryCondition.emit(value);
    }
    /**
     * 表单提交之后 清空表单为初始值
     */
    this.validateForm.reset();
  }

  ngOnInit() {
    this.validateForm = this.fb.group({});
    /**
     * 根据传进来的字段  自动生成表单
     */
    this._searchTitle.map((item, index) => {
      this._formData[item.key] = '';
      this.validateForm && this.validateForm.addControl(item.key, new FormControl());
    })
    console.log(this.validateForm);
  }
}
