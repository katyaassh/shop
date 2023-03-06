import { ICategory } from '../../models/category';
import { SetFiltersAction } from '../types/filters.types';

export const SET_FILTERS = 'SET_FILTERS';
export const SET_FILTERS_OPTIONS = 'SET_FILTERS_OPTIONS';

export const setFilters = (filters: ICategory[]): SetFiltersAction => {
    return {
        type: SET_FILTERS,
        payload: filters,
    };
};
