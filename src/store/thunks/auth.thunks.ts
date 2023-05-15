import { Action, AnyAction, Dispatch } from 'redux';
import { authAPI } from '../../api/auth.api';
import { ISignUpData } from '../../models/signUp-data';
import { ISignInData } from '../../models/signIn-data';
import { ThunkAction } from 'redux-thunk';
import { IState } from '../types/types';

export const signUp = (data: ISignUpData): ThunkAction<void, IState, null, Action<string>> => {
    return async (dispatch: Dispatch): Promise<void> => {
        let response = await authAPI.signUp(data);
        // authAPI.signIn({ email: data.email, password: data.password }).then(response => {
        //   localStorage.setItem("token", response.data.token);
        //   localStorage.setItem("refreshToken", response.data.refreshToken);
        // })
    };
};

export const signIn = (data: ISignInData) => {
    return async (dispatch: Dispatch): Promise<void> => {
        let response = await authAPI.signIn(data);
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('refreshToken', response.data.refreshToken);
    };
};
