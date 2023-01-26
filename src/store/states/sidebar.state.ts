import { ISidebarState } from '../types/sidebar.types';
import { SidebarContentIdsEnum } from '../../enums/sidebar.enum';

export let sidebarState: ISidebarState = {
    isOpen: false,
    currentPage: SidebarContentIdsEnum.Main,
    genders: [],
};
