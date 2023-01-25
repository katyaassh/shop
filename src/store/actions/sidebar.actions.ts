import {
    CloseSidebarAction,
    OpenSidebarAction,
    SetCurrentPageSidebarAction,
    SetGendersAction
} from "../types/sidebar.types";
import {SidebarContentIdsEnum} from "../../enums/sidebar.enum";
import {IGenderItem} from "../../models/gender-item";

export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR'
export const SET_CURRENT_PAGE_SIDEBAR = 'SET_CURRENT_PAGE_SIDEBAR'
export const SET_GENDERS = 'SET_GENDERS'
export const OPEN_SIDEBAR = 'OPEN_SIDEBAR'
export const CLOSE_SIDEBAR = 'CLOSE_SIDEBAR'


export const openSidebar = (): OpenSidebarAction => {
    return {
        type: OPEN_SIDEBAR
    }
}
export const closeSidebar = (): CloseSidebarAction => {
    return {
        type: CLOSE_SIDEBAR
    }
}

export const setCurrentPageSidebar = (currentPage: SidebarContentIdsEnum): SetCurrentPageSidebarAction => {
    return {
        type: SET_CURRENT_PAGE_SIDEBAR,
        payload: currentPage
    }
}

export const setGenders = (genders: IGenderItem[]): SetGendersAction => {
    return {
        type: SET_GENDERS,
        payload: genders
    }
}

