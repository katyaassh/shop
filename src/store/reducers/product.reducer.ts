import { ADD_COMMENT_SUCCESS, SET_PRODUCT } from '../actions/product.actions';
import { IProductState, ProductActions } from '../types/product.types';
import { productState } from '../states/product.state';

export const productReducer = (state: IProductState = productState, action: ProductActions): IProductState => {
    switch (action.type) {
        case SET_PRODUCT: {
            return {
                ...state,
                product: action.payload,
            };
        }
        case ADD_COMMENT_SUCCESS: {
            return {
                ...state,
                product: {
                    ...state.product,
                    comments: [action.payload, ...(state.product?.comments || [])],
                },
            };
        }
        default:
            return state;
    }
};
