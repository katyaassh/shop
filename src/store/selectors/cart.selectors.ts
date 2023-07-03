import { IState } from '../types/types';
import { createSelector } from 'reselect';
import { ICartState } from '../types/cart.types';

export const selectCartState = (state: IState): ICartState => state.cart;

export const selectCount = createSelector(selectCartState, (state: ICartState): number => state.count);
