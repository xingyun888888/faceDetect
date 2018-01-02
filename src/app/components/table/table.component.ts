import { Component, OnInit,Input ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less']
})
export class TableComponent implements OnInit {

  _allChecked = false;
  _disabledButton = true;
  _checkedNumber = 0;
  _displayData: Array<any> = [];

  _operating = false;


  /**
   * 操作选项显示的内容
   * 接收父组件的传值
   * @type {{type1: string; type2: string}}
   */
  @Input()
  actionType:String = "type1";


  //接收表格数据
  @Input()
  _dataSet:Array<any> = [];

  //配置表格字段
  @Input()
  _titles:Array<any> = [];

  @Output()
  editData: EventEmitter<any> = new EventEmitter();


  @Output()
  refresh:EventEmitter<any> = new EventEmitter();

  /**
   * 子组件传给父组件  然后在父组件订阅子组件的事件
   * @type {EventEmitter<any>}
   */
  @Output()
  deleteData:EventEmitter<any> = new EventEmitter()
  _indeterminate = false;
  editRow = []; //可编辑的行
  tempEditObject = [];//编辑暂存区
  pageSize = 5;//每页多少条数据
  total = 0; //总条数
  currentPageIndex = 1;//当前页码


  /**
   * 保留  暂时没有用到
   * @private
   */
  _multiEdit() {
    this.editRow = [];
    this.tempEditObject = this._dataSet.concat();
    this._displayData.forEach((item,index)=>{
      if(item.checked){
        this.editRow.push(item.key)
      }
    })
  }

  /**
   * 保留  暂时没有用到
   * @private
   */
  _multiSave() {
    this._dataSet = this.tempEditObject.concat();
    this.editRow = [];
  }

  /**
   * 保留  暂时没有用到
   * @private
   */
  _multiDelete(){
    let data = this._dataSet.concat();
    for(let i=this._displayData.length-1;i>=0;i--){
      if(this._displayData[i].checked){
        data.splice(i,1);
      }
    }
    this._dataSet = data;
  }

  /**
   * 单个删除按钮
   * @param e
   * @param data
   */
  singleDelete(e,data){
    this.deleteData.emit(data);
  }

  /**
   * 单个编辑按钮
   * @param e
   * @param data
   */
  singleEdit(e,data){
    this.editData.emit(data);
  }

  /**
   * 单个增加按钮
   * @param e
   */
  add(e){
    this.editData.emit();
  }

  /**
   * 刷新按钮
   * @param e
   * @private
   */
  _refreshData(e){
     this.refresh.emit();
  }

  _displayDataChange($event) {
    this._displayData = $event;
    console.log($event);
  }

  /**
   * 刷新状态的方法 (暂没有用到--保留)
   * @private
   */
  _refreshStatus() {
    const allChecked = this._displayData.every(value => value.checked === true);

    const allUnChecked = this._displayData.every(value => !value.checked);

    this._allChecked = allChecked;
    this._indeterminate = (!allChecked) && (!allUnChecked);
    this._disabledButton = !this._dataSet.some(value => value.checked);
    this._checkedNumber = this._dataSet.filter(value => value.checked).length;
  }


  /**
   * 选中所有的方法
   * @param value
   * @private
   */
  _checkAll(value) {
    console.log(value);
    console.dir(this._displayData);
    if (value) {
      this._displayData.forEach(data => data.checked = true);
    } else {
      this._displayData.forEach(data => data.checked = false);
    }
    this._refreshStatus();
  }

  /***
   *
   * 页码改变的回调函数
   * @param visible
   * @private
   */
  _pageSizeChange(visible){
    console.log(visible);
  }

  ngOnInit() {
    this.total = this._dataSet.length;
  }

}


