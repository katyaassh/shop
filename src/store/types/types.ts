import { ISidebarState, SidebarActions } from './sidebar.types';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { IProductsState, ProductsActions } from './products.types';
import { FiltersActions, IFiltersState } from './filters.types';

type IPayload<P> = [P] extends [undefined] ? {} : { payload: P };

export type IAction<T, P = any> = Action<T> & IPayload<P>;

export interface IState {
    sidebar: ISidebarState;
    products: IProductsState;
    filters: IFiltersState;
}

export type IDispatch = ThunkDispatch<IState, null, Action<string>>;

export type IActions = SidebarActions | ProductsActions | FiltersActions;
