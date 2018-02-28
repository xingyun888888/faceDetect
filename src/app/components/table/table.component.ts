import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import api from '../../api';
import {Router} from '@angular/router';

import {NzModalService} from 'ng-zorro-antd';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less']
})
export class TableComponent implements OnInit {
  /**默认所有复选框不被选中*/
  _allChecked = false;
  /**禁用按钮的操作*/
  _disabledButton = true;
  /**默认复选框被选中的数量为0*/
  _checkedNumber = 0;
  /**定义展示数据的数组*/
  _displayData: Array<any> = [];

  /**
   * 保存当前已经上传的文件
   * @type {Array}
   */
  fileList: Array<any> = [];
  /**
  /**
   * 批量上传接口地址  暂时不用了
   * @type {string}
   */
  mulUploadApi = '';


  @Input()
  isCanBatchUpload = false;

  @Input()
  isCanReback = false;

  @Input()
  isShowOperate = true;

  /**操作选项显示的内容,接收父组件的传值*/
  @Input()
  actionType: String = 'type1';

  /**接收表格数据*/
  @Input()
  _dataSet: Array<any> = [];

  /**配置表格字段*/
  @Input()
  _titles: Array<any> = [];

  /**
   * 修改或者增加操作时, 通知父组件 发送要增加或者修改的数据
   * @type {EventEmitter<any>}
   */
  @Output()
  editData: EventEmitter<any> = new EventEmitter();


  /**
   * 刷新操作 通知父组件
   * @type {EventEmitter<any>}
   */
  @Output()
  refresh: EventEmitter<any> = new EventEmitter();

  /**
   * 子组件传给父组件  然后在父组件订阅子组件的事件
   */
  @Output()
  deleteData: EventEmitter<any> = new EventEmitter();





  /**
   * 这个暂时也没有用到,
   * @type {boolean}
   * @private
   */
  _indeterminate = false;

  /**
   * 保存编辑行的数据
   * @type {any[]}
   */
  editRow = []; //可编辑的行
  tempEditObject = []; //编辑暂存区
  pageSize = 5; //每页多少条数据
  total = 0; //总条数
  currentPageIndex = 1; //当前页码

  /**
   * 保存文件上传状态
   * @type {boolean}
   */
  uploading = false;

  constructor(public router: Router, public http: HttpClient, private confirmServ: NzModalService) {
    this.beforeUpload = this.beforeUpload.bind(this);
  }

  /**
   * @param e 确认上传
   */
  handleUpload(e){
    const formData = new FormData();
    this.fileList.forEach((file: any) => {
      formData.append('files', file);
    });
    this.uploading = true;
    this.http.post(api.batchUpload, formData, {headers: new HttpHeaders({
    })}).subscribe((event: any) => {
      this.uploading = false;
      this.fileList = [];
    }, (err) => {
      this.uploading = false;
      this.fileList = [];
    });
  }


  /**
   * 返回false就是取消上传
   * @param file
   * @returns {boolean}
   */
  beforeUpload(file){
    this.fileList.push(file);
    console.log(file);
    return false;
  }

  /**
   * 取消上传
   * @param e
   */
  cancalUpload(e){
    this.fileList = [];
  }





  /**
   * 单个删除按钮
   */
  singleDelete(e, data) {
    const _this = this;
    _this.confirmServ.confirm({
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
   * 页码改变的回调函数   --暂时没有用到 保留
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
    const _this = this;
    const data = this._dataSet.concat();
    /**
     * 这里存储的多选的 准备删除的数据 ,所以是应该判断这个有没有值.
     */
    const ids = [];
    for (let i = _this._displayData.length - 1; i >= 0; i--) {
      if (_this._displayData[i].checked) {
        ids.push(_this._displayData[i].id);
      }
    }
    if (ids.length === 0) {
      this.confirmServ.warning({
        title: '请选择您要删除的数据！',
        content: '<b></b>',
        onOk() {
          return;
        }
      });
    }else {
      this.confirmServ.confirm({
        title: '您是否确认要删除',
        content: '<b></b>',
        onOk() {
          console.log('确认删除');
          _this.deleteData.emit({ids});
          console.log(ids);
        },
        onCancel() {
        }
      });
    }
  }

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

