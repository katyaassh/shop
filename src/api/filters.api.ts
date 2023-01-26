import axios, { AxiosResponse } from 'axios';
import { IGendersResponse } from '../models/genders-response';

const instance = axios.create({
    baseURL: 'http://localhost:8000/api/filters/',
});

export const filtersAPI = {
    getGenders(): Promise<IGendersResponse> {
        return instance.get(`gender`).then((response: AxiosResponse<IGendersResponse>): IGendersResponse => {
            return response.data;
        });
    },
};
