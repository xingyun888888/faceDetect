import {FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs/Observable';

/**
 *声明typescript的全局函数，用export来暴露出去,箭头函数作用,里面的作用域跟外部同一作用域
 */
export let numberValidator = (control: FormControl) => {
  const val = control.value;
  const numberReg =  /^\d+$/g;
  const result = numberReg.test(val);
  return result ? null : {info: "信息错误"};
};
