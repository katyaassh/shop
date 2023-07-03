import { IAction } from './types';
import { IProduct } from '../../models/product';
import { SET_ORDER } from '../actions/orders.actions';
import { IOrder } from '../../models/order';

export interface IOrdersState {
    order: IOrder;
}

export type SetOrderAction = IAction<typeof SET_ORDER, IOrder>;

export type OrdersActions = SetOrderAction;
