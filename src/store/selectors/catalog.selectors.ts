import { createSelector } from 'reselect';
import { IState } from '../types/types';
import { ICatalogState } from '../types/catalog.types';
import { IProductItem } from '../../models/product-item';

export const selectCatalogState = (state: IState): ICatalogState => state.catalog;

export const selectProducts = createSelector(selectCatalogState, (state: ICatalogState): IProductItem[] => state.products);
export const selectNewProducts = createSelector(selectCatalogState, (state: ICatalogState): IProductItem[] => state.newProducts);
export const selectDiscountProducts = createSelector(
    selectCatalogState,
    (state: ICatalogState): IProductItem[] => state.discountProducts
);
