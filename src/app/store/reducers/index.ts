/**
 * Created by smileMAC on 3/19/18.
 */
import * as GloabalActions from './../actions';
export interface State {
  isLoading:boolean,
  loadingTitle:string
}

export const INIT_LOADING_STATE: State = {
  isLoading:false,
  loadingTitle:"正在加载中..."
};


export function reducer(state: State = INIT_LOADING_STATE, {type,payload,title}: GloabalActions.All): State {
  switch (type) {
    case GloabalActions.SETLOADING : {
      if(!title){
        title = "正在加载中...";
      }
      return Object.assign({}, state, {isLoading:payload,loadingTitle:title})
    }

    default : {
      return state;
    }
  }
}


// SELECTORS
export const getCurrentLoading = (state: State) => state.isLoading;
export const getCurrentLoadingTitle = (state: State) => state.loadingTitle;
