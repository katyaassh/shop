import React from "react";
import {SidebarItem} from "../SecondarySidebarContent/SidebarItem/SidebarItem";

export const CompanySidebarContent = (): JSX.Element => {
    return <>
        <SidebarItem itemTitle='О компании'/>
        <SidebarItem itemTitle='Новости'/>
        <SidebarItem itemTitle='Контакты'/>
    </>
}
