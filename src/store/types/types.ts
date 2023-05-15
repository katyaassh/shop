import { ISidebarState, SidebarActions } from './sidebar.types';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { IProductsState, ProductsActions } from './products.types';
import { FiltersActions, IFiltersState } from './filters.types';
import { IProductState, ProductActions } from './product.types';
import { IPopUpState, PopUpActions } from './popUp.types';
import { IUserState, UserActions } from './user.types';
import { CartActions, ICartState } from './cart.types';
import { IOrdersState, OrdersActions } from './orders.types';

type IPayload<P> = [P] extends [undefined] ? {} : { payload: P };

export type IAction<T, P = any> = Action<T> & IPayload<P>;

export interface IState {
    sidebar: ISidebarState;
    products: IProductsState;
    filters: IFiltersState;
    product: IProductState;
    popUp: IPopUpState;
    user: IUserState;
    cart: ICartState;
    orders: IOrdersState;
}

export type IDispatch = ThunkDispatch<IState, null, Action<string>>;

export type IActions =
    | SidebarActions
    | ProductsActions
    | FiltersActions
    | ProductActions
    | PopUpActions
    | UserActions
    | CartActions
    | OrdersActions;
