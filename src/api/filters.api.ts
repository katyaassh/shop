import axios, { AxiosResponse } from 'axios';
import { IGendersResponse } from '../models/genders-response';
import { IFiltersResponse } from '../models/filters-response';

const instance = axios.create({
    baseURL: 'http://localhost:8000/api/filters/',
});

export const filtersAPI = {
    getFilters(): Promise<IFiltersResponse> {
        return instance.get(``).then((response: AxiosResponse<IFiltersResponse>): IFiltersResponse => {
            return response.data;
        });
    },

    getGenders(): Promise<IGendersResponse> {
        return instance.get(`gender`).then((response: AxiosResponse<IGendersResponse>): IGendersResponse => {
            return response.data;
        });
    },
};
