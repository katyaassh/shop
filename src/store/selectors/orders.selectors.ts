import { IState } from '../types/types';
import { createSelector } from 'reselect';
import { IOrdersState } from '../types/orders.types';
import { IOrder } from '../../models/order';

export const selectOrdersState = (state: IState): IOrdersState => state.orders;

export const selectOrder = createSelector(selectOrdersState, (state: IOrdersState): IOrder => state.order);
