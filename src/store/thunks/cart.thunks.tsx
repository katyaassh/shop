import { ThunkAction } from 'redux-thunk';
import { IState } from '../types/types';
import { Action, Dispatch } from 'redux';
import { getCart } from '../../helpers/getCart';
import { IProductInCart } from '../../models/productInCart';
import { setCount } from '../actions/cart.actions';

export const getCountProductsInCart = (): ThunkAction<void, IState, null, Action<string>> => {
    return async (dispatch: Dispatch) => {
        const cart = getCart();
        if (cart) {
            let sum = 0;
            cart.forEach((product: IProductInCart) => (sum += product.count));
            dispatch(setCount(sum));
        } else dispatch(setCount(0));
    };
};
