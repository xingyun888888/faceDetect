import { Directive, Input, HostListener, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appImagePriview]'
})
export class ImagePriviewDirective {

  @Input("imgList")
  imgList: Array<any>;

  @HostListener('click')
  onClick(){ //监听宿主元素的点击事件

  }


  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

}
