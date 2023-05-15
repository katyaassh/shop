import { ICategory } from '../../models/category';
import { SetFilterAction, SetFiltersAction } from '../types/filters.types';

export const SET_FILTERS = 'SET_FILTERS';
export const ADD_FILTER_SUCCESS = 'ADD_FILTER_SUCCESS';

export const setFilters = (filters: ICategory[]): SetFiltersAction => {
    return {
        type: SET_FILTERS,
        payload: filters,
    };
};

export const setFilter = (filter: ICategory): SetFilterAction => {
    return {
        type: ADD_FILTER_SUCCESS,
        payload: filter,
    };
};
