import { sidebarState } from '../states/sidebar.state';
import { ISidebarState, SidebarActions } from '../types/sidebar.types';
import { CLOSE_SIDEBAR, OPEN_SIDEBAR, SET_CURRENT_PAGE_SIDEBAR, SET_GENDERS } from '../actions/sidebar.actions';
import { SidebarContentIdsEnum } from '../../enums/sidebar.enum';

export const sidebarReducer = (state: ISidebarState = sidebarState, action: SidebarActions): ISidebarState => {
    switch (action.type) {
        case SET_CURRENT_PAGE_SIDEBAR: {
            return {
                ...state,
                currentPage: action.payload,
            };
        }
        case SET_GENDERS: {
            return {
                ...state,
                genders: action.payload,
            };
        }
        case OPEN_SIDEBAR: {
            return {
                ...state,
                isOpen: true,
            };
        }
        case CLOSE_SIDEBAR: {
            return {
                ...state,
                isOpen: false,
                currentPage: SidebarContentIdsEnum.Main,
            };
        }
        default:
            return state;
    }
};
