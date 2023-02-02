import { CatalogActions, ICatalogState } from '../types/catalog.types';
import { catalogState } from '../states/catalog.state';
import { SET_DISCOUNT_PRODUCTS, SET_NEW_PRODUCTS, SET_PRODUCTS } from '../actions/catalog.actions';

export const catalogReducer = (state: ICatalogState = catalogState, action: CatalogActions): ICatalogState => {
    switch (action.type) {
        case SET_PRODUCTS: {
            return {
                ...state,
                products: action.payload,
            };
        }
        case SET_NEW_PRODUCTS: {
            return {
                ...state,
                newProducts: action.payload,
            };
        }
        case SET_DISCOUNT_PRODUCTS: {
            return {
                ...state,
                discountProducts: action.payload,
            };
        }

        default:
            return state;
    }
};
