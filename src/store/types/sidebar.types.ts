import { IAction } from './types';
import { CLOSE_SIDEBAR, OPEN_SIDEBAR, SET_CURRENT_PAGE_SIDEBAR, SET_GENDERS, TOGGLE_SIDEBAR } from '../actions/sidebar.actions';
import { SidebarContentIdsEnum } from '../../enums/sidebar.enum';
import { IGenderItem } from '../../models/gender-item';

export interface ISidebarState {
    isOpen: boolean;
    currentPage: SidebarContentIdsEnum;
    genders: IGenderItem[];
}

export type ToggleSidebarAction = IAction<typeof TOGGLE_SIDEBAR, boolean>;
export type OpenSidebarAction = IAction<typeof OPEN_SIDEBAR>;
export type CloseSidebarAction = IAction<typeof CLOSE_SIDEBAR>;
export type SetCurrentPageSidebarAction = IAction<typeof SET_CURRENT_PAGE_SIDEBAR, SidebarContentIdsEnum>;
export type SetGendersAction = IAction<typeof SET_GENDERS, IGenderItem[]>;

export type SidebarActions =
    | ToggleSidebarAction
    | SetCurrentPageSidebarAction
    | SetGendersAction
    | OpenSidebarAction
    | CloseSidebarAction;
