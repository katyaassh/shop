import { ThunkAction } from 'redux-thunk';
import { Action, Dispatch } from 'redux';
import { IState } from '../types/types';
import { productsAPI } from '../../api/products.api';
import { setProducts, setSpecialOffers } from '../actions/products.actions';

export const getProducts = (query = ''): ThunkAction<void, IState, null, Action<string>> => {
    return async (dispatch: Dispatch): Promise<void> => {
        let response = await productsAPI.getProducts(query);
        dispatch(setProducts(response));
    };
};

export const getSpecialOffers = (): ThunkAction<void, IState, null, Action<string>> => {
    return async (dispatch: Dispatch): Promise<void> => {
        let responses = await Promise.all([
            productsAPI.getProducts('?isNovelty=true'),
            productsAPI.getProducts('?isDiscount=true'),
        ]);
        dispatch(setSpecialOffers([responses[0].products, responses[1].products]));
    };
};
