import { Directive,AfterViewInit,ElementRef,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFormError][ngModel]'
})
export class FormErrorDirective implements AfterViewInit{

  ngAfterViewInit(): void {
    this.renderer2.appendChild(this.ele.nativeElement,"<div></div>")
  }

  constructor(private ele: ElementRef, private renderer2:Renderer2) { }

}
