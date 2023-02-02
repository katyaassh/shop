import { SetDiscountProductsAction, SetNewProductsAction, SetProductsAction } from '../types/catalog.types';
import { IProductItem } from '../../models/product-item';

export const SET_PRODUCTS = 'SET_PRODUCTS';
export const SET_NEW_PRODUCTS = 'SET_NEW_PRODUCTS';
export const SET_DISCOUNT_PRODUCTS = 'SET_DISCOUNT_PRODUCTS';

export const setProducts = (products: [IProductItem]): SetProductsAction => {
    return {
        type: SET_PRODUCTS,
        payload: products,
    };
};
export const setNewProducts = (products: [IProductItem]): SetNewProductsAction => {
    return {
        type: SET_NEW_PRODUCTS,
        payload: products,
    };
};
export const setDiscountProducts = (products: [IProductItem]): SetDiscountProductsAction => {
    return {
        type: SET_DISCOUNT_PRODUCTS,
        payload: products,
    };
};
