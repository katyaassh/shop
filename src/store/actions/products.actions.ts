import { SetProductsAction, SetSpecialOffersAction } from '../types/products.types';
import { IProductItem } from '../../models/product-item';

export const SET_PRODUCTS = 'SET_PRODUCTS';
export const SET_SPECIAL_OFFERS = 'SET_SPECIAL_OFFERS';

export const setProducts = (products: IProductItem[]): SetProductsAction => {
    return {
        type: SET_PRODUCTS,
        payload: products,
    };
};
export const setSpecialOffers = (products: [IProductItem[], IProductItem[]]): SetSpecialOffersAction => {
    return {
        type: SET_SPECIAL_OFFERS,
        payload: products,
    };
};
