import { IAction } from './types';
import { ICategory } from '../../models/category';
import { SET_FILTERS } from '../actions/filters.actions';

export interface IFiltersState {
    filters: ICategory[];
}

export type SetFiltersAction = IAction<typeof SET_FILTERS, ICategory[]>;

export type FiltersActions = SetFiltersAction;
