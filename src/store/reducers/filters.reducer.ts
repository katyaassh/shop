import { FiltersActions, IFiltersState } from '../types/filters.types';
import { filtersState } from '../states/filters.state';
import { ADD_FILTER_SUCCESS, SET_FILTERS } from '../actions/filters.actions';

export const filtersReducer = (state: IFiltersState = filtersState, action: FiltersActions): IFiltersState => {
    switch (action.type) {
        case SET_FILTERS: {
            return {
                ...state,
                filters: action.payload,
            };
        }
        case ADD_FILTER_SUCCESS: {
            return {
                ...state,
                filters: state.filters
                    ? state.filters.map((filter) => {
                          if (filter.category === action.payload.category) {
                              filter = action.payload;
                          }
                          return filter;
                      })
                    : state.filters,
            };
        }
        default:
            return state;
    }
};
