import { IAction } from './types';
import { ICategory } from '../../models/category';
import { ADD_FILTER_SUCCESS, SET_FILTERS } from '../actions/filters.actions';

export interface IFiltersState {
    filters: ICategory[];
}

export type SetFiltersAction = IAction<typeof SET_FILTERS, ICategory[]>;
export type SetFilterAction = IAction<typeof ADD_FILTER_SUCCESS, ICategory>;

export type FiltersActions = SetFiltersAction | SetFilterAction;
