import { applyMiddleware, CombinedState, combineReducers, createStore, Reducer, Store } from 'redux';
import { sidebarReducer } from './reducers/sidebar.reducer';
import thunk from 'redux-thunk';
import { IActions, IState } from './types/types';
import { productsReducer } from './reducers/products.reducer';

let reducers: Reducer<CombinedState<IState>, IActions> = combineReducers({
    sidebar: sidebarReducer,
    products: productsReducer,
});

export let store: Store<IState, IActions> = createStore(reducers, applyMiddleware(thunk));
