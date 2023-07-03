import { IOrdersState, OrdersActions } from '../types/orders.types';
import { ordersState } from '../states/orders.state';
import { SET_ORDER } from '../actions/orders.actions';

export const ordersReducer = (state: IOrdersState = ordersState, action: OrdersActions): IOrdersState => {
    switch (action.type) {
        case SET_ORDER: {
            return {
                ...state,
                order: action.payload,
            };
        }
        default:
            return state;
    }
};
