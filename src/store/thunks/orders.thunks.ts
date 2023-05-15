import { Action, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { IState } from '../types/types';
import { ordersApi } from '../../api/orders.api';
import { setOrder } from '../actions/orders.actions';

export const getOrder = (id = ''): ThunkAction<void, IState, null, Action<string>> => {
    return async (dispatch: Dispatch): Promise<void> => {
        let response = await ordersApi.getOrder(id);
        dispatch(setOrder(response.order));
    };
};
