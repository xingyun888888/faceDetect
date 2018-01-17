import { Directive,Renderer2,ElementRef,Input,OnInit,HostBinding,OnChanges,SimpleChanges,Attribute} from '@angular/core';
import {TableComponent} from "../components/table/table.component";

@Directive({
  selector: '[appDateFormat][ngModel]'
})
export class DateFormatDirective implements OnInit,OnChanges{
  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
     if(this.date){
       this.date = this.date.replace(/(\d+)-(\d+)-(\d+)/g,function($1,$2,$3,$4):any{
         if($2<10)$3="0"+$3;
         if($3<10)$4="0"+$4;
         return `${$2}-${$3}-${$4}`;
       })
     }
  }
  @HostBinding('ngModel') value;
  @Input("appDateFormat") date:any;

  constructor(private ele:ElementRef,private renderer2:Renderer2) {

  }

}
