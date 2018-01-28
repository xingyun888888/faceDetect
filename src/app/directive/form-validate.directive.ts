import {Directive, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges} from '@angular/core';

/**appFormValidate就是表单验证的指令,在需要验证的input上面加上这个属性,就表示支持这个指令*/
@Directive({
  selector: '[appFormValidate][ngModel][formControlName]'
})
export class FormValidateDirective implements OnInit, OnChanges {
  /** 创建一个用来显示错误信息的div */
  errorChild: Element = document.createElement('div');

  count = 0;

  timer = null;

  /** 传入input的value值 */
  @Input('ngModel') val;

  /** 传入input的key */
  @Input('formControlName') formControlName;

  /** 传入的是需要校验的表单   这个appFormValidate是从哪个地方传过来的？？？？像上面的ngModel和formControlName在模态框的HTML页面里的input中都能找到*/
  @Input('appFormValidate') validForm;

  ngOnInit(): void {
    this.renderer.parentNode(this.elementRef.nativeElement).appendChild(this.errorChild);

    /** 给显示错误信息的div添加样式 */

  }

  ngOnChanges(changes: SimpleChanges): void {
    /**
     * 判断一下:  如果当前定时器没有执行完毕 那么就先清空当前正在执行的定时器
     */
    if(this.timer){
        clearTimeout(this.timer);
        this.timer = null;
      }
      if (!this.validForm.get(this.formControlName).valid && this.count > 0) {
        /**
         * 非空验证提示信息
          */
        if (this.validForm.hasError('required', this.formControlName)) {
          this.errorChild.innerHTML = this.formControlName + '没有填写';
        }
        /**
         * 最大长度限制提示信息
         */
        if (this.validForm.hasError('maxlength', this.formControlName)) {
          this.errorChild.innerHTML = this.formControlName + '最小长度为6';
        }
        /** ``也是代表字符串的引用,比 "" '' 好处就是支持换行处理,还可以支持包含变量*/

         this.errorChild.className = "toop-tip valid-error";
      } else {
        this.errorChild.className = 'valid-success';
      }
    /**
     * 在这里加个定时器的作用就是  控制错误信息显示的时间 超过设定的时间就关闭
     */
    if(!this.timer){
        this.timer = setTimeout(() => {
          this.errorChild.className = 'valid-success';
        },2000);
        this.count++;
    }
  }

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {

  }
}
