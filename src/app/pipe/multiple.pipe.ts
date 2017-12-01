import { Pipe, PipeTransform } from '@angular/core';

@Pipe({//管道元数据装饰器的类 管道装饰器 是从angular的核心模块中引入的 必须是一个有效的标识符
  //实现了一个PipeTransform的接口 第一个参数就是管道输入进来的原始的值

  name: 'multiple'
})
export class MultiplePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    //需要一个原始值是一个number  我要返回的东西就是我的原始值*我的参数值
    if(!args){
       return args*value
    }
  }

}
