import { ThunkAction } from 'redux-thunk';
import { Action, Dispatch } from 'redux';
import { IState } from '../types/types';
import { filtersAPI } from '../../api/filters.api';
import { setFilter, setFilters } from '../actions/filters.actions';

export const getFilters = (): ThunkAction<void, IState, null, Action<string>> => {
    return async (dispatch: Dispatch): Promise<void> => {
        let response = await filtersAPI.getFilters();
        dispatch(setFilters(response.filters));
    };
};
export const addFilters = (category: string, type: string): ThunkAction<void, IState, null, Action<string>> => {
    return async (dispatch: Dispatch): Promise<void> => {
        let response = await filtersAPI.addFilter(category, type);
        dispatch(setFilter(response));
    };
};
