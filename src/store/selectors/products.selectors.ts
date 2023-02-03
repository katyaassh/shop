import { createSelector } from 'reselect';
import { IState } from '../types/types';
import { IProductsState } from '../types/products.types';
import { IProductItem } from '../../models/product-item';

export const selectProductsState = (state: IState): IProductsState => state.products;

export const selectProducts = createSelector(selectProductsState, (state: IProductsState): IProductItem[] => state.products);
export const selectNovelties = createSelector(selectProductsState, (state: IProductsState): IProductItem[] => state.novelties);
export const selectDiscounts = createSelector(selectProductsState, (state: IProductsState): IProductItem[] => state.discounts);
