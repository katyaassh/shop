import React from 'react';
import s from './SecondarySidebarTitle.module.scss';
import { NavLink } from 'react-router-dom';

interface IProps {
    path: string;
    title: string;
}

export const SecondarySidebarTitle = (props: IProps): JSX.Element => {
    return (
        <NavLink to={props.path} className={s.title}>
            {props.title}
        </NavLink>
    );
};
