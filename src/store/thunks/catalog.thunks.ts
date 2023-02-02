import { ThunkAction } from 'redux-thunk';
import { Action, Dispatch } from 'redux';
import { IState } from '../types/types';
import { productsAPI } from '../../api/products.api';
import { setDiscountProducts, setNewProducts, setProducts } from '../actions/catalog.actions';

export const getProducts = (): ThunkAction<void, IState, null, Action<string>> => {
    return async (dispatch: Dispatch): Promise<void> => {
        let response = await productsAPI.getProducts();
        dispatch(setProducts(response.products));
    };
};

export const getNewProducts = (): ThunkAction<void, IState, null, Action<string>> => {
    return async (dispatch: Dispatch): Promise<void> => {
        let response = await productsAPI.getProducts('isNovelty=true');
        dispatch(setNewProducts(response.products));
    };
};

export const getDiscountProducts = (): ThunkAction<void, IState, null, Action<string>> => {
    return async (dispatch: Dispatch): Promise<void> => {
        let response = await productsAPI.getProducts('isDiscount=true');
        dispatch(setDiscountProducts(response.products));
    };
};
