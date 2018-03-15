import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {NzModalService} from 'ng-zorro-antd';

@Component({
  selector: 'app-displaytable',
  templateUrl: './displaytable.component.html',
  styleUrls: ['./displaytable.component.less']
})
export class DisplaytableComponent implements OnInit {

  /**定义展示数据的数组*/
  _displayData: Array<any> = [];


  /**
   * 这里是控制(表格操作选项)回退按钮是否展示出来;
   * @type {boolean}
   */
  // @Input()
  // isCanReback = false;

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
  // editRow = []; //可编辑的行
  // tempEditObject = []; //编辑暂存区
  pageSize = 5; //每页多少条数据
  total = 0; //总条数
  currentPageIndex = 1; //当前页码
  constructor(public router: Router, private confirmServ: NzModalService) {
  }
  _displayDataChange($event) {
    this._displayData = $event;
    console.log($event);
  }

  ngOnInit() {
    this.total = this._dataSet.length;
  }

}
