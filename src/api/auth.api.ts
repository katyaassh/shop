import { ISignUpData } from '../models/signUp-data';
import { ISignInData } from '../models/signIn-data';
import { PagesUrlsEnum } from '../enums/pages-urls.enum';
import { instance } from './instance';

export const authAPI = {
    signUp(data: ISignUpData) {
        return instance.post('auth/signup', data).then((response) => {
            return response;
        });
    },
    signIn(data: ISignInData) {
        return instance.post('auth/signin', data).then((response) => {
            window.location.href = PagesUrlsEnum.Profile;
            return response;
        });
    },
    getNewTokens(refreshToken: string) {
        return instance.put('auth/refresh-token', { refreshToken }).then((response) => {
            return response;
        });
    },
};
