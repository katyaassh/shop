import { ISidebarState, SidebarActions } from './sidebar.types';
import { Action, AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

type IPayload<P> = [P] extends [undefined] ? {} : { payload: P };

export type IAction<T, P = any> = Action<T> & IPayload<P>;

export interface IState {
    sidebar: ISidebarState;
}

export type IDispatch = ThunkDispatch<IState, null, Action<string>>;

export type IActions = SidebarActions;
