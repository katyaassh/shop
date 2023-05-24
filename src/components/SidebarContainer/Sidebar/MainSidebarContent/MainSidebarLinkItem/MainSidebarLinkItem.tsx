import s from './MainSidebarLinkItem.module.scss';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { SmallCounter } from '../../../../common/SmallCounter/SmallCounter';

interface IProps {
    title: string;
    icon?: string;
    to: string;
    hasCount?: boolean;
}

export const MainSidebarLinkItem = (props: IProps): JSX.Element => {
    return (
        <NavLink to={props.to} className={s.item}>
            {props.icon && <img src={props.icon} alt='Icon' />}
            {props.title}
            {props.hasCount && <SmallCounter />}
        </NavLink>
    );
};
