import { IProductsState, ProductsActions } from '../types/products.types';
import { productsState } from '../states/products.state';
import { SET_PRODUCTS, SET_SPECIAL_OFFERS } from '../actions/products.actions';

export const productsReducer = (state: IProductsState = productsState, action: ProductsActions): IProductsState => {
    switch (action.type) {
        case SET_PRODUCTS: {
            return {
                ...state,
                products: action.payload.products,
                totalCount: action.payload.count,
                pageCount: action.payload.pageCount,
                page: action.payload.page,
            };
        }
        case SET_SPECIAL_OFFERS: {
            return {
                ...state,
                novelties: action.payload[0],
                discounts: action.payload[1],
            };
        }
        default:
            return state;
    }
};
