import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import {Router} from '@angular/router';

import {NzModalService} from 'ng-zorro-antd';

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


  @Input()
  isCanReback = false;

  /**操作选项显示的内容,接收父组件的传值*/
  @Input()
  actionType: String = 'type1';

  /**接收表格数据*/
  @Input()
  _dataSet: Array<any> = [];

  /**配置表格字段*/
  @Input()
  _titles: Array<any> = [];

  @Output()
  editData: EventEmitter<any> = new EventEmitter();

  @Output()
  refresh: EventEmitter<any> = new EventEmitter();

  /**
   * 子组件传给父组件  然后在父组件订阅子组件的事件
   */
  @Output()
  deleteData: EventEmitter<any> = new EventEmitter();
  _indeterminate = false;
  editRow = []; //可编辑的行
  tempEditObject = []; //编辑暂存区
  pageSize = 5; //每页多少条数据
  total = 0; //总条数
  currentPageIndex = 1; //当前页码

  constructor(public router: Router, private confirmServ: NzModalService) {
  }

  /**
   * 单个删除按钮
   */
  singleDelete(e, data) {
    const _this = this;
    this.confirmServ.confirm({
      title: '您是否确认要删除',
      content: '<b></b>',
      onOk() {
        console.log('确认删除');
        _this.deleteData.emit({id: data.id});
      },
      onCancel() {
      }
    });
  }

  /**
   * 单个编辑按钮
   */
  singleEdit(e, data) {
    this.editData.emit(data);
  }

  /**
   * 单个增加按钮
   */
  add(e) {
    this.editData.emit();
  }

  /**
   * 刷新按钮
   */
  _refreshData(e) {
    this.refresh.emit();
  }

  _displayDataChange($event) {
    this._displayData = $event;
    console.log($event);
  }

  /**
   * 刷新状态的方法 (暂没有用到--保留)
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

  /**
   * 页码改变的回调函数
   */
  _pageSizeChange(visible) {
    console.log(visible);
  }

  /**
   * 保留,暂时没有用到
   */
  _multiEdit() {
    this.editRow = [];
    this.tempEditObject = this._dataSet.concat();
    this._displayData.forEach((item, index) => {
      if (item.checked) {
        this.editRow.push(item.key);
      }
    });
  }

  /**
   * 保留,暂时没有用到
   */
  _multiSave() {
    this._dataSet = this.tempEditObject.concat();
    this.editRow = [];
  }

  /**
   * 批量删除
   */
  _multiDelete() {
    const data = this._dataSet.concat();
    const ids = [];
    const _this = this;
    this.confirmServ.confirm({
      title: '您是否确认要删除',
      content: '<b></b>',
      onOk() {
        console.log('确认删除');
        for (let i = _this._displayData.length - 1; i >= 0; i--) {
          if (_this._displayData[i].checked) {
            ids.push(_this._displayData[i].id);
            // data.splice(i, 1);
          }
        }
        _this.deleteData.emit({ids});
        // _this._dataSet = data;
        //这里获取到删除行的id 放在一个数组里面 然后传给服务端 将数据库删除
        console.log(ids);
      },
      onCancel() {
      }
    });
  }

  /**
   * 确认删除对话框
   */

  ngOnInit() {
    this.total = this._dataSet.length;
  }
}

/**
 * 无效代码：（不过这个是在控制器中调用router的navigate方法进行路由跳转的）
 * 查询人脸库下的数据列表
 queryBaseData(e, data){
    console.log(data);
    //his.router.navigate(["/register",{queryParams:{id:34242}}]);
  }*/

