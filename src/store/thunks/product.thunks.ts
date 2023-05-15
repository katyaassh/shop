import { ThunkAction } from 'redux-thunk';
import { IState } from '../types/types';
import { Action, Dispatch } from 'redux';
import { productsAPI } from '../../api/products.api';
import { addCommentSuccess, setProduct } from '../actions/product.actions';
import { ICommentData } from '../../models/comment-data';

export const getProduct = (id = ''): ThunkAction<void, IState, null, Action<string>> => {
    return async (dispatch: Dispatch): Promise<void> => {
        let response = await productsAPI.getProduct(id);
        dispatch(setProduct(response.product));
    };
};

export const addComment = (id = '', data: ICommentData = { stars: 5 }): ThunkAction<void, IState, null, Action<string>> => {
    return async (dispatch: Dispatch): Promise<void> => {
        let response = await productsAPI.addComment(id, data);
        dispatch(addCommentSuccess(response.comment));
    };
};
