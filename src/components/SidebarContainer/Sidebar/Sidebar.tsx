import React from "react";
import s from "./Sidebar.module.scss"
import {useSelector} from "react-redux";
import {selectCurrentPageSidebar} from "../../../store/selectors/sidebar.selectors";
import {MainSidebarContent} from "./MainSidebarContent/MainSidebarContent";
import {SidebarContentIdsEnum} from "../../../enums/sidebar.enum";
import {SecondarySidebarContent} from "./SecondarySidebarContent/SecondarySidebarContent";


interface IProps {
    onItemClick: (currentPage: SidebarContentIdsEnum) => void
    onBackClick?: () => void
}

export const Sidebar = (props: IProps): JSX.Element => {
    const currentPage: SidebarContentIdsEnum = useSelector(selectCurrentPageSidebar)

    return <div className={s.sidebar}>
        {
            currentPage === SidebarContentIdsEnum.Main ?
                <MainSidebarContent onItemClick={props.onItemClick}/> :
                <SecondarySidebarContent currentPage={currentPage} onBackClick={props.onBackClick}/>
        }
    </div>
}
