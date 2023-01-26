import React from 'react';
import s from './SecondarySidebarItem.module.scss';

interface IProps {
    title: string;
}

export const SecondarySidebarItem = (props: IProps): JSX.Element => {
    return <div className={s.item}>{props.title}</div>;
};
