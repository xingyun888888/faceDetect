import { Injectable } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd';

@Injectable()
export class ImgPreviewService {

  constructor(private modelServ : NzModalService) {

  }
  public show(content, width?: number){
    this.modelServ.open({
      width, //这里是限制预览图片的宽度
      zIndex:3000,
      content
    })
  }
}
