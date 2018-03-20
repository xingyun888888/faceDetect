/**
 * Created by smileMAC on 3/19/18.
 */
import * as GloabalActions from './../actions';
export interface State {
  currentState: boolean
}

export const INIT_LOADING_STATE: State = {
  currentState: false
};


export function reducer(state: State = INIT_LOADING_STATE, {type, payload}: GloabalActions.All): State {

  switch (type) {

    case GloabalActions.SETLOADING : {
      return Object.assign({}, state, {currentState: payload})
    }

    default : {
      return state;
    }
  }
}


// SELECTORS
export const getCurrentState = (state: State) => state.currentState;
