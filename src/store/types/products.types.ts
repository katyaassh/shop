import { IAction } from './types';
import { SET_PRODUCTS, SET_SPECIAL_OFFERS } from '../actions/products.actions';
import { IProductItem } from '../../models/product-item';
import { IProductsResponse } from '../../models/products-response';

export interface IProductsState {
    totalCount: number;
    pageCount: number;
    page: number;
    products: IProductItem[];
    novelties: IProductItem[];
    discounts: IProductItem[];
}

export type SetProductsAction = IAction<typeof SET_PRODUCTS, IProductsResponse>;
export type SetSpecialOffersAction = IAction<typeof SET_SPECIAL_OFFERS, [IProductItem[], IProductItem[]]>;

export type ProductsActions = SetProductsAction | SetSpecialOffersAction;
