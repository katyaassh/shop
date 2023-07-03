import { AxiosResponse } from 'axios';
import { IGendersResponse } from '../models/genders-response';
import { IFiltersResponse } from '../models/filters-response';
import { instance } from './instance';
import { ICategory } from '../models/category';
import { instanceWithCredentials } from './instance-with-credentials';

export const filtersAPI = {
    getFilters(): Promise<IFiltersResponse> {
        return instance.get('filters').then((response: AxiosResponse<IFiltersResponse>): IFiltersResponse => {
            return response.data;
        });
    },

    getGenders(): Promise<IGendersResponse> {
        return instance.get('filters/gender').then((response: AxiosResponse<IGendersResponse>): IGendersResponse => {
            return response.data;
        });
    },

    addFilter(category: string, type: string): Promise<ICategory> {
        return instanceWithCredentials
            .post('filters/' + category, { type: type })
            .then((response: AxiosResponse<ICategory>): ICategory => {
                return response.data;
            });
    },
};
