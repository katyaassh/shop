import React from "react";
import s from "./SidebarTitle.module.scss";
import {NavLink} from "react-router-dom";

interface IProps {
    to: string
    title: string
}

export const SidebarTitle = (props: IProps): JSX.Element => {
  return (
      <NavLink to={props.to} className={s.item}>
          {props.title}
      </NavLink>
  )
}
