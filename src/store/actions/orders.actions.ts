import { IOrder } from '../../models/order';
import { SetOrderAction } from '../types/orders.types';

export const SET_ORDER = 'SET_ORDER';

export const setOrder = (response: IOrder): SetOrderAction => {
    return {
        type: SET_ORDER,
        payload: response,
    };
};
