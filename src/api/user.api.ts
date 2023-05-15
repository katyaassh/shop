import { instanceWithCredentials } from './instance-with-credentials';
import { IUserResponse } from '../models/user-response';
import { AxiosResponse } from 'axios';
import { IUpdateUserResponse } from '../models/updateUser-response';
import { IUserValues } from '../models/user-values';

export const userAPI = {
    getUser(): Promise<IUserResponse> {
        return instanceWithCredentials.get('user').then((response: AxiosResponse<IUserResponse>): IUserResponse => {
            return response.data;
        });
    },
    updateUser(data: IUserValues): Promise<IUpdateUserResponse> {
        return instanceWithCredentials
            .put('user', data)
            .then((response: AxiosResponse<IUpdateUserResponse>): IUpdateUserResponse => {
                return response.data;
            });
    },
};
