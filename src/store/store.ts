import { applyMiddleware, CombinedState, combineReducers, createStore, Reducer, Store } from 'redux';
import { sidebarReducer } from './reducers/sidebar-reducer';
import thunk from 'redux-thunk';
import { IActions, IState } from './types/types';
import { catalogReducer } from './reducers/catalog-reducer';

let reducers: Reducer<CombinedState<IState>, IActions> = combineReducers({
    sidebar: sidebarReducer,
    catalog: catalogReducer,
});

export let store: Store<IState, IActions> = createStore(reducers, applyMiddleware(thunk));
