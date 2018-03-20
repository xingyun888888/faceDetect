/**
 * Created by smileMAC on 3/19/18.
 */
import {Action} from '@ngrx/store';


export const SETLOADING = 'SETLOADING';

export class setLoadingState implements Action {
  readonly type = SETLOADING;
  constructor(public payload?: boolean) {}
}

export type All = setLoadingState;
