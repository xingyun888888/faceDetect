import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'transforType'
})
export class TransforTypePipe implements PipeTransform {

  transform(value: any, options?: any): any {
    let res;
    options.map((item, index) => {
      if (item.value == value) {
        res = item.name;
      }
    });
    return res;
  }

}
