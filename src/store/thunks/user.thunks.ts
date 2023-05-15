import { Action, Dispatch } from 'redux';
import { userAPI } from '../../api/user.api';
import { setUser } from '../actions/user.actions';
import { ThunkAction } from 'redux-thunk';
import { IState } from '../types/types';

export const getUser = (): ThunkAction<void, IState, null, Action<string>> => {
    return async (dispatch: Dispatch): Promise<void> => {
        let response = await userAPI.getUser();
        dispatch(setUser(response.user));
    };
};
