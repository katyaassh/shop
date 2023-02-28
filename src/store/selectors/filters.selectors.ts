import { createSelector } from 'reselect';
import { IState } from '../types/types';
import { IFiltersState } from '../types/filters.types';
import { ICategory } from '../../models/category';

export const selectFiltersState = (state: IState): IFiltersState => state.filters;

export const selectFilters = createSelector(selectFiltersState, (state: IFiltersState): ICategory[] => state.filters);
