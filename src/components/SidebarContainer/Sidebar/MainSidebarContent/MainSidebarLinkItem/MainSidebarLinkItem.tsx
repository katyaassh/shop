import s from './MainSidebarLinkItem.module.scss';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Count } from '../../../../common/Count/Count';

interface IProps {
    title: string;
    icon?: string;
    to: string;
    haveCount?: boolean;
}

export const MainSidebarLinkItem = (props: IProps): JSX.Element => {
    return (
        <NavLink to={props.to} className={s.item}>
            {props.icon && <img src={props.icon} alt='Icon' />}
            {props.title}
            {props.haveCount && <Count />}
        </NavLink>
    );
};
