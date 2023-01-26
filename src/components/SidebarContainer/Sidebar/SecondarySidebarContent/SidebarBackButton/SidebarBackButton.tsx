import React from 'react';
import chevron from '../../../../../assets/icons/chevron.svg';
import s from './SidebarBackButton.module.scss';

interface IProps {
    onBackClick?: () => void;
}

export const SidebarBackButton = (props: IProps): JSX.Element => {
    return (
        <button className={s.button} onClick={props.onBackClick}>
            <img src={chevron} alt='Chevron' className={s.chevron} />
            Назад
        </button>
    );
};
