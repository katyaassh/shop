import { ISidebarState, SidebarActions } from './sidebar.types';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { ICatalogState } from './catalog.types';

type IPayload<P> = [P] extends [undefined] ? {} : { payload: P };

export type IAction<T, P = any> = Action<T> & IPayload<P>;

export interface IState {
    sidebar: ISidebarState;
    catalog: ICatalogState;
}

export type IDispatch = ThunkDispatch<IState, null, Action<string>>;

export type IActions = SidebarActions;
