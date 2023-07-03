import { IAction } from './types';
import { ADD_COMMENT_SUCCESS, SET_PRODUCT } from '../actions/product.actions';
import { IProduct } from '../../models/product';
import { ICommentsType } from '../../models/comments-type';

export interface IProductState {
    product: IProduct;
}

export type SetProductAction = IAction<typeof SET_PRODUCT, IProduct>;
export type AddCommentSuccessAction = IAction<typeof ADD_COMMENT_SUCCESS, ICommentsType>;

export type ProductActions = SetProductAction | AddCommentSuccessAction;
