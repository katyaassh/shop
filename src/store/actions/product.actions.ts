import { AddCommentSuccessAction, SetProductAction } from '../types/product.types';
import { IProduct } from '../../models/product';
import { ICommentsType } from '../../models/comments-type';

export const SET_PRODUCT = 'SET_PRODUCT';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';

export const setProduct = (response: IProduct): SetProductAction => {
    return {
        type: SET_PRODUCT,
        payload: response,
    };
};

export const addCommentSuccess = (response: ICommentsType): AddCommentSuccessAction => {
    return {
        type: ADD_COMMENT_SUCCESS,
        payload: response,
    };
};
