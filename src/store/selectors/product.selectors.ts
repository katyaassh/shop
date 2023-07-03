import { IState } from '../types/types';
import { IProductState } from '../types/product.types';
import { createSelector } from 'reselect';
import { IProduct } from '../../models/product';

export const selectProductState = (state: IState): IProductState => state.product;

export const selectProduct = createSelector(selectProductState, (state: IProductState): IProduct => state.product);
