import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class LoadingService {

  isLoading: any  =  new EventEmitter();
  constructor() { }

}
