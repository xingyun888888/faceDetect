import {FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs/Observable';


/**
 * 箭头函数 作用 里面的作用域跟外部同一作用域
 * 如果返回一个值  ()=>5
 * @param {FormControl} control
 * @returns {{pwd: {info: string}}}
 */
export let numberValidator = (control: FormControl) => {
  const val = control.value;
  const numberReg =  /^\d+$/g;
  const result = numberReg.test(val);
  return result?null:{info:"信息错误"}
}
