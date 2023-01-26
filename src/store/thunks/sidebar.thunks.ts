import { filtersAPI } from '../../api/filters.api';
import { setGenders } from '../actions/sidebar.actions';
import { ThunkAction } from 'redux-thunk';
import { Action, Dispatch } from 'redux';
import { IState } from '../types/types';

export const getGenders = (): ThunkAction<void, IState, null, Action<string>> => {
    return async (dispatch: Dispatch): Promise<void> => {
        let response = await filtersAPI.getGenders();
        dispatch(setGenders(response.items));
    };
};
