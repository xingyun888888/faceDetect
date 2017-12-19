import { Component, OnInit,Input } from '@angular/core';

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



  //接收表格数据
  @Input()
  _dataSet:Array<any> = [];


  //配置表格字段  
  @Input()
  _titles:Array<any> = [];



  _indeterminate = false;
  editRow = []; //可编辑的行
  tempEditObject = [];//编辑暂存区
  pageSize = 5;//每页多少条数据
  total = 0; //总条数
  currentPageIndex = 1;//当前页码

  _multiEdit() {
    this.editRow = [];
    this.tempEditObject = this._dataSet.concat();
    this._displayData.forEach((item,index)=>{
      if(item.checked){
        this.editRow.push(item.key)
      }
    })
  }
  _multiSave() {
    this._dataSet = this.tempEditObject.concat();
    this.editRow = [];
  }
  _multiDelete(){
    let data = this._dataSet.concat();
    for(let i=this._displayData.length-1;i>=0;i--){
      if(this._displayData[i].checked){
        data.splice(i,1);
      }
    }
    this._dataSet = data;
  }

  singleDelete(e,data){
    console.log(data);
    let arr = this._dataSet.concat();
    let index = arr.indexOf(data);
    console.log(index);  
    arr.splice(index,1);
    this._dataSet = arr;
   

  }




  // edit(data){
  //   this.editRow = [];
  //   this.tempEditObject=this._dataSet.concat();
  //   this.editRow.push(data.key);
  // }
  // save(data){
  //   this.editRow = [];
  //   this._dataSet.forEach((item,index)=>{
  //     if(item.key==data.key){
  //       Object.assign(item,data);
  //     }
  //   })
  //   this.editRow = [];
  // }

  _displayDataChange($event) {
    this._displayData = $event;
    console.log($event);
  }


  _refreshStatus() {
    const allChecked = this._displayData.every(value => value.checked === true);

    const allUnChecked = this._displayData.every(value => !value.checked);

    this._allChecked = allChecked;
    this._indeterminate = (!allChecked) && (!allUnChecked);
    this._disabledButton = !this._dataSet.some(value => value.checked);
    this._checkedNumber = this._dataSet.filter(value => value.checked).length;
  }

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

  // _operateData() {
  //   this._operating = true;
  //   setTimeout(_ => {
  //     this._dataSet.forEach(value => value.checked = false);
  //     this._refreshStatus();
  //     this._operating = false;
  //   }, 1000);
  // }

  _pageSizeChange(visible){
    console.log(visible);
  }

  ngOnInit() {
    this.total = this._dataSet.length;
  }

}