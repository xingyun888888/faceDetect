/**
 * Created by smileMAC on 3/19/18.
 */
import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';

import * as gloabalStore from './reducers';

export interface State {
  ui: gloabalStore.State
  // more state here
}

export const reducers: ActionReducerMap<State> = {
  ui: gloabalStore.reducer
  // more reducers here
};

/// selectors
export const getUiState = createFeatureSelector<gloabalStore.State>('ui');

export const getCurrentState = createSelector(getUiState, gloabalStore.getCurrentState);
