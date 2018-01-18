import {AfterContentInit, AfterViewInit, Directive, HostBinding, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appDateFormat][formData][fieldName]'
})
export class DateFormatDirective implements OnInit, OnChanges,AfterViewInit{
  ngAfterViewInit(): void {
  }
  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {

    this.date +="";
    if(this.date.indexOf("-")==-1){
      return;
    }
    if(this.date){
      this.date = this.date.replace(/(\d+)[-\/](\d+)[-\/](\d+)/g, function($1, $2, $3, $4): any{
        if($3<10)$3="0"+$3;
        if($4<10)$4="0"+$4;
        return `${$2}-${$3}-${$4}`;
      })
    }
    console.log(this.date);
    console.log(this.formData);
  }
  @Input("appDateFormat") date:any;
  @Input("formData") formData:any;
  @Input("fieldName") fieldName:string;
  constructor() { }

}
