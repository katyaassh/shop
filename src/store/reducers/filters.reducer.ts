import { FiltersActions, IFiltersState } from '../types/filters.types';
import { filtersState } from '../states/filters.state';
import { SET_FILTERS } from '../actions/filters.actions';

export const filtersReducer = (state: IFiltersState = filtersState, action: FiltersActions): IFiltersState => {
    switch (action.type) {
        case SET_FILTERS: {
            return {
                ...state,
                filters: action.payload,
            };
        }
        default:
            return state;
    }
};
