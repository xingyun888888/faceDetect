"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var SearchComponent = (function () {
    function SearchComponent(fb) {
        this.fb = fb;
        /**
         * 没有用到了
         * @type {boolean}
         */
        this.upOrDown = true;
        /**
         * 保存查询的数据 通知父组件
         * @type {EventEmitter<any>}
         */
        this.queryCondition = new core_1.EventEmitter();
        /**接收父组件传进来的参数*/
        this._searchTitle = [];
        /**
         * 保存表单的数据
         * @type {any[]}
         * @private
         */
        this._formData = [];
    }
    SearchComponent.prototype.ngOnChanges = function (changes) {
    };
    /**
     * 表单提交的事件
     * @param e
     * @param value
     */
    SearchComponent.prototype.submitForm = function (e, value) {
        /**
         * 在这里请求处理提交表单数据
         * */
        this.queryCondition.emit(value);
        /**
         * 表单提交之后 清空表单为初始值
         */
        this.validateForm.reset();
    };
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.validateForm = this.fb.group({});
        /**
         * 根据传进来的字段  自动生成表单
         */
        this._searchTitle.map(function (item, index) {
            _this._formData[item.key] = '';
            _this.validateForm && _this.validateForm.addControl(item.key, new forms_1.FormControl());
        });
        console.log(this.validateForm);
    };
    __decorate([
        core_1.Input()
    ], SearchComponent.prototype, "upOrDown", void 0);
    __decorate([
        core_1.Output()
    ], SearchComponent.prototype, "queryCondition", void 0);
    __decorate([
        core_1.Input()
    ], SearchComponent.prototype, "_searchTitle", void 0);
    __decorate([
        core_1.Input()
    ], SearchComponent.prototype, "_formData", void 0);
    SearchComponent = __decorate([
        core_1.Component({
            selector: 'app-search',
            templateUrl: './search.component.html',
            styleUrls: ['./search.component.less']
        })
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;
