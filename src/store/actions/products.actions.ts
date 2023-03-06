import { SetProductsAction, SetSpecialOffersAction } from '../types/products.types';
import { IProductItem } from '../../models/product-item';
import { IProductsResponse } from '../../models/products-response';

export const SET_PRODUCTS = 'SET_PRODUCTS';
export const SET_SPECIAL_OFFERS = 'SET_SPECIAL_OFFERS';

export const setProducts = (response: IProductsResponse): SetProductsAction => {
    return {
        type: SET_PRODUCTS,
        payload: response,
    };
};

export const setSpecialOffers = (products: [IProductItem[], IProductItem[]]): SetSpecialOffersAction => {
    return {
        type: SET_SPECIAL_OFFERS,
        payload: products,
    };
};
