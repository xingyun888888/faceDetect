/**
 * Created by smileMAC on 3/19/18.
 */
import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';

import * as gloabalStore from './reducers';

export interface State {
  loading: gloabalStore.State
  // more state here
}

export const reducers: ActionReducerMap<State> = {
  loading: gloabalStore.reducer
  // more reducers here
};

/// selectors
export const getUiState = createFeatureSelector<gloabalStore.State>('loading');
export const getCurrentLoading = createSelector(getUiState, gloabalStore.getCurrentLoading);
export const getCurrentLoadingTitle = createSelector(getUiState, gloabalStore.getCurrentLoadingTitle);
