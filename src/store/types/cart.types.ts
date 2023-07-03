import { IAction } from './types';
import { SET_COUNT } from '../actions/cart.actions';

export interface ICartState {
    count: number;
}

export type SetCountAction = IAction<typeof SET_COUNT, number>;

export type CartActions = SetCountAction;
