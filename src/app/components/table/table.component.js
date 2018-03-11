"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/common/http');
var api_1 = require('../../api');
var TableComponent = (function () {
    function TableComponent(router, http, confirmServ) {
        this.router = router;
        this.http = http;
        this.confirmServ = confirmServ;
        /**默认所有复选框不被选中*/
        this._allChecked = false;
        /**禁用按钮的操作*/
        this._disabledButton = true;
        /**默认复选框被选中的数量为0*/
        this._checkedNumber = 0;
        /**定义展示数据的数组*/
        this._displayData = [];
        /**
         * 保存当前已经上传的文件
         * @type {Array}
         */
        this.fileList = [];
        /**
         /**
         * 批量上传接口地址  暂时不用了
         * @type {string}
         */
        this.mulUploadApi = '';
        this.isCanBatchUpload = false;
        this.isCanReback = false;
        this.isCanAdd = true;
        this.canDblClick = true;
        /**
         * 是否需要展示table中的操作那一列，默认展示
         * @type {boolean}
         */
        this.isShowOperate = true;
        /**操作选项显示的内容,接收父组件的传值*/
        this.actionType = 'type1';
        /**接收表格数据*/
        this._dataSet = [];
        /**配置表格字段*/
        this._titles = [];
        /**
         * 修改或者增加操作时, 通知父组件 发送要增加或者修改的数据
         * @type {EventEmitter<any>}
         */
        this.editData = new core_1.EventEmitter();
        /**
         * 刷新操作 通知父组件
         * @type {EventEmitter<any>}
         */
        this.refresh = new core_1.EventEmitter();
        /**
         * 子组件传给父组件  然后在父组件订阅子组件的事件
         */
        this.deleteData = new core_1.EventEmitter();
        /**
         * 这个暂时也没有用到,
         * @type {boolean}
         * @private
         */
        this._indeterminate = false;
        /**
         * 保存编辑行的数据
         * @type {any[]}
         */
        this.editRow = []; //可编辑的行
        this.tempEditObject = []; //编辑暂存区
        this.pageSize = 5; //每页多少条数据
        this.total = 0; //总条数
        this.currentPageIndex = 1; //当前页码
        /**
         * 保存文件上传状态
         * @type {boolean}
         */
        this.uploading = false;
        this.beforeUpload = this.beforeUpload.bind(this);
    }
    /**
     * @param e 确认上传
     */
    TableComponent.prototype.handleUpload = function (e) {
        var _this = this;
        var formData = new FormData();
        this.fileList.forEach(function (file) {
            console.log(file);
            formData.append('files', file);
        });
        this.uploading = true;
        this.http.post(api_1.default.batchUpload, formData, {
            headers: new http_1.HttpHeaders({})
        }).subscribe(function (res) {
            console.log(res);
            var failFile = '';
            res.msgBody.dataSend.PictureList.map(function (item, index) {
                if (item.code == 0) {
                    console.log(item.PicturePathDir);
                    failFile += item.PicturePathDir.match(/[\u4e00-\u9fa5_a-zA-Z0-9:\/]+\/(\w+\.\w+)$/i)[1] + '、';
                }
            });
            _this.uploading = false;
            _this.fileList = [];
            if (failFile.length != 0) {
                _this.confirmServ.error({
                    title: '上传失败',
                    content: failFile.substring(0, failFile.length - 1) + '等,文件上传失败'
                });
                return;
            }
            _this.confirmServ.success({
                content: '上传成功'
            });
        }, function (err) {
            _this.uploading = false;
            _this.confirmServ.error({
                content: '上传失败'
            });
            _this.fileList = [];
        });
    };
    /**
     * 返回false就是取消上传
     * @param file
     * @returns {boolean}
     */
    TableComponent.prototype.beforeUpload = function (file) {
        this.fileList.push(file);
        console.log(file);
        return false;
    };
    /**
     * 取消上传
     * @param e
     */
    TableComponent.prototype.cancalUpload = function (e) {
        this.fileList = [];
    };
    /**
     * 单个删除按钮
     */
    TableComponent.prototype.singleDelete = function (e, data) {
        var _this = this;
        _this.confirmServ.confirm({
            title: '您是否确认要删除',
            content: '<b></b>',
            onOk: function () {
                console.log('确认删除');
                _this.deleteData.emit({ id: data.id });
            },
            onCancel: function () {
            }
        });
    };
    /**
     * 单个编辑按钮
     */
    TableComponent.prototype.singleEdit = function (e, data) {
        this.editData.emit(data);
    };
    /**
     * 单个增加按钮
     */
    TableComponent.prototype.add = function (e) {
        this.editData.emit();
    };
    /**
     * 刷新按钮
     */
    TableComponent.prototype._refreshData = function (e) {
        this.refresh.emit();
    };
    TableComponent.prototype._displayDataChange = function ($event) {
        this._displayData = $event;
        console.log($event);
    };
    /**
     * 刷新状态的方法 (暂没有用到--保留)
     */
    TableComponent.prototype._refreshStatus = function () {
        var allChecked = this._displayData.every(function (value) { return value.checked === true; });
        var allUnChecked = this._displayData.every(function (value) { return !value.checked; });
        this._allChecked = allChecked;
        this._indeterminate = (!allChecked) && (!allUnChecked);
        this._disabledButton = !this._dataSet.some(function (value) { return value.checked; });
        this._checkedNumber = this._dataSet.filter(function (value) { return value.checked; }).length;
    };
    /**
     * 选中所有的方法
     */
    TableComponent.prototype._checkAll = function (value) {
        console.log(value);
        console.dir(this._displayData);
        if (value) {
            this._displayData.forEach(function (data) { return data.checked = true; });
        }
        else {
            this._displayData.forEach(function (data) { return data.checked = false; });
        }
        this._refreshStatus();
    };
    /**
     * 页码改变的回调函数   --暂时没有用到 保留
     */
    TableComponent.prototype._pageSizeChange = function (visible) {
        console.log(visible);
    };
    /**
     * 保留,暂时没有用到
     */
    TableComponent.prototype._multiEdit = function () {
        var _this = this;
        this.editRow = [];
        this.tempEditObject = this._dataSet.concat();
        this._displayData.forEach(function (item, index) {
            if (item.checked) {
                _this.editRow.push(item.key);
            }
        });
    };
    /**
     * 保留,暂时没有用到
     */
    TableComponent.prototype._multiSave = function () {
        this._dataSet = this.tempEditObject.concat();
        this.editRow = [];
    };
    /**
     * 批量删除
     */
    TableComponent.prototype._multiDelete = function () {
        var _this = this;
        var data = this._dataSet.concat();
        /**
         * 这里存储的多选的 准备删除的数据 ,所以是应该判断这个有没有值.
         */
        var ids = [];
        for (var i = _this._displayData.length - 1; i >= 0; i--) {
            if (_this._displayData[i].checked) {
                ids.push(_this._displayData[i].id);
            }
        }
        if (ids.length === 0) {
            this.confirmServ.warning({
                title: '请选择您要删除的数据！',
                content: '<b></b>',
                onOk: function () {
                    return;
                }
            });
        }
        else {
            this.confirmServ.confirm({
                title: '您是否确认要删除',
                content: '<b></b>',
                onOk: function () {
                    console.log('确认删除');
                    _this.deleteData.emit({ ids: ids });
                    console.log(ids);
                },
                onCancel: function () {
                }
            });
        }
    };
    TableComponent.prototype.ngOnInit = function () {
        this.total = this._dataSet.length;
    };
    __decorate([
        core_1.Input()
    ], TableComponent.prototype, "isCanBatchUpload", void 0);
    __decorate([
        core_1.Input()
    ], TableComponent.prototype, "isCanReback", void 0);
    __decorate([
        core_1.Input()
    ], TableComponent.prototype, "isCanAdd", void 0);
    __decorate([
        core_1.Input()
    ], TableComponent.prototype, "canDblClick", void 0);
    __decorate([
        core_1.Input()
    ], TableComponent.prototype, "isShowOperate", void 0);
    __decorate([
        core_1.Input()
    ], TableComponent.prototype, "actionType", void 0);
    __decorate([
        core_1.Input()
    ], TableComponent.prototype, "_dataSet", void 0);
    __decorate([
        core_1.Input()
    ], TableComponent.prototype, "_titles", void 0);
    __decorate([
        core_1.Output()
    ], TableComponent.prototype, "editData", void 0);
    __decorate([
        core_1.Output()
    ], TableComponent.prototype, "refresh", void 0);
    __decorate([
        core_1.Output()
    ], TableComponent.prototype, "deleteData", void 0);
    TableComponent = __decorate([
        core_1.Component({
            selector: 'app-table',
            templateUrl: './table.component.html',
            styleUrls: ['./table.component.less']
        })
    ], TableComponent);
    return TableComponent;
}());
exports.TableComponent = TableComponent;
/**
 * 无效代码：（不过这个是在控制器中调用router的navigate方法进行路由跳转的）
 * 查询人脸库下的数据列表
 queryBaseData(e, data){
    console.log(data);
    //his.router.navigate(["/register",{queryParams:{id:34242}}]);
  }*/
