import s from './MainSidebarLinkItem.module.scss';
import React from 'react';
import user from '../../../../../assets/icons/user.svg';

interface IProps {
    title: string;
    icon?: string;
    count?: number;
}

export const MainSidebarLinkItem = (props: IProps): JSX.Element => {
    return (
        <div className={s.item}>
            {props.icon && <img src={user} alt='User' />}
            {props.title}
            {props.count || props.count === 0 ? <div className={s.counter}>{props.count}</div> : null}
        </div>
    );
};
