import { IAction } from './types';
import { SET_DISCOUNT_PRODUCTS, SET_NEW_PRODUCTS, SET_PRODUCTS } from '../actions/catalog.actions';
import { IProductItem } from '../../models/product-item';

export interface ICatalogState {
    products: IProductItem[];
    newProducts: IProductItem[];
    discountProducts: IProductItem[];
}

export type SetProductsAction = IAction<typeof SET_PRODUCTS, IProductItem[]>;
export type SetNewProductsAction = IAction<typeof SET_NEW_PRODUCTS, IProductItem[]>;
export type SetDiscountProductsAction = IAction<typeof SET_DISCOUNT_PRODUCTS, IProductItem[]>;

export type CatalogActions = SetProductsAction | SetNewProductsAction | SetDiscountProductsAction;
