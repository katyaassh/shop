import { CartActions, ICartState } from '../types/cart.types';
import { cartState } from '../states/cart.state';
import { SET_COUNT } from '../actions/cart.actions';

export const cartReducer = (state: ICartState = cartState, action: CartActions): ICartState => {
    switch (action.type) {
        case SET_COUNT: {
            return {
                ...state,
                count: state.count + action.payload,
            };
        }
        default:
            return state;
    }
};
