import { applyMiddleware, CombinedState, combineReducers, createStore, Reducer, Store } from 'redux';
import { sidebarReducer } from './reducers/sidebar.reducer';
import thunk from 'redux-thunk';
import { IActions, IState } from './types/types';
import { productsReducer } from './reducers/products.reducer';
import { filtersReducer } from './reducers/filters.reducer';
import { productReducer } from './reducers/product.reducer';
import { popUpReducer } from './reducers/popUp.reducer';
import { userReducer } from './reducers/user.reducer';
import { cartReducer } from './reducers/cart.reducer';
import { ordersReducer } from './reducers/orders.reducer';

let reducers: Reducer<CombinedState<IState>, IActions> = combineReducers({
    sidebar: sidebarReducer,
    products: productsReducer,
    filters: filtersReducer,
    product: productReducer,
    popUp: popUpReducer,
    user: userReducer,
    cart: cartReducer,
    orders: ordersReducer,
});

export let store: Store<IState, IActions> = createStore(reducers, applyMiddleware(thunk));
