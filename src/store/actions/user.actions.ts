import { IUser } from '../../models/user';
import { SetUserAction } from '../types/user.types';

export const SET_USER = 'SET_USER';

export const setUser = (response: IUser): SetUserAction => {
    return {
        type: SET_USER,
        payload: response,
    };
};
