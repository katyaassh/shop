import axios from 'axios';
import { AxiosResponse } from 'axios';
import { IAddressesResponse } from '../models/address-response';

export const instance = axios.create({
    baseURL: 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address',
});

export const addressAPI = {
    getAddress(query: string): Promise<IAddressesResponse> {
        return instance
            .post(
                '',
                { query: query },
                {
                    headers: {
                        Authorization: 'Token e06d7502e3aa02ab875df4b8e526ac709d4635c9',
                    },
                }
            )
            .then((response: AxiosResponse<IAddressesResponse>): IAddressesResponse => {
                return response.data;
            });
    },
};
