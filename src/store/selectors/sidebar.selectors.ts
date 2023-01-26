import { ISidebarState } from '../types/sidebar.types';
import { createSelector } from 'reselect';
import { IState } from '../types/types';
import { SidebarContentIdsEnum } from '../../enums/sidebar.enum';
import { IGenderItem } from '../../models/gender-item';

export const selectSidebarState = (state: IState): ISidebarState => state.sidebar;

export const selectIsOpenSidebar = createSelector(selectSidebarState, (state: ISidebarState): boolean => state.isOpen);

export const selectCurrentPageSidebar = createSelector(
    selectSidebarState,
    (state: ISidebarState): SidebarContentIdsEnum => state.currentPage
);

export const selectGenders = createSelector(selectSidebarState, (state: ISidebarState): IGenderItem[] => state.genders);
