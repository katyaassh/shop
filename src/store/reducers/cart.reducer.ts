import { CartActions, ICartState } from '../types/cart.types';
import { cartState } from '../states/cart.state';
import { SET_COUNT } from '../actions/cart.actions';

export const cartReducer = (state: ICartState = cartState, action: CartActions): ICartState => {
    switch (action.type) {
        case SET_COUNT: {
            return {
                ...state,
                count: action.payload ? state.count + action.payload : 0,
            };
        }
        default:
            return state;
    }
};
