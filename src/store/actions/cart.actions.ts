import { SetCountAction } from '../types/cart.types';

export const SET_COUNT = 'SET_COUNT';

export const setCount = (count: number): SetCountAction => {
    return {
        type: SET_COUNT,
        payload: count,
    };
};
