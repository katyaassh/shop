import React from "react";
import s from "./SidebarItem.module.scss"

interface IProps {
    itemTitle: string
}

export const SidebarItem = (props: IProps): JSX.Element => {
    return <div className={s.item}>
        {props.itemTitle}
    </div>
}
