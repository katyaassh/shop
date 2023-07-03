import { ISignUpData } from '../models/signUp-data';
import { ISignInData } from '../models/signIn-data';
import { instance } from './instance';

export const authAPI = {
    signUp(data: ISignUpData) {
        return instance.post('auth/signup', data);
    },
    signIn(data: ISignInData) {
        return instance.post('auth/signin', data);
    },
    getNewTokens(refreshToken: string) {
        return instance.put('auth/refresh-token', { refreshToken });
    },
};
