import s from './MainSidebarLinkItem.module.scss';
import React from 'react';

interface IProps {
    title: string;
    icon?: string;
    count?: number;
}

export const MainSidebarLinkItem = (props: IProps): JSX.Element => {
    return (
        <div className={s.item}>
            {props.icon && <img src={props.icon} alt='Icon' />}
            {props.title}
            {props.count || props.count === 0 ? <div className={s.counter}>{props.count}</div> : null}
        </div>
    );
};
