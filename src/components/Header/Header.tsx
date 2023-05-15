import logo from '../../assets/image/logo.svg';
import search from '../../assets/icons/search.svg';
import menu from '../../assets/icons/menu.svg';
import user from '../../assets/icons/user.svg';
import cart from '../../assets/icons/cart.svg';
import chevron from '../../assets/icons/chevron.svg';
import s from './Header.module.scss';
import React from 'react';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { openSidebar } from '../../store/actions/sidebar.actions';
import { IDispatch } from '../../store/types/types';
import { NavLink } from 'react-router-dom';
import { PagesUrlsEnum } from '../../enums/pages-urls.enum';
import { ProfileUrlsEnums } from '../../enums/profile-urls.enums';
import { Count } from '../common/Count/Count';

export const Header = (): JSX.Element => {
    const dispatch: IDispatch = useDispatch();

    const onClick = (): void => {
        dispatch(openSidebar());
    };

    return (
        <header className={s.headerContainer}>
            <div className={clsx('container', s.header)}>
                <div className={s.sectionLeft}>
                    <button className={s.menuButton} onClick={onClick}>
                        <img src={menu} alt='Menu' className={s.menuIcon} />
                    </button>
                    <div className={s.label}>Интернет магазин парфюмерии</div>
                    <div className={s.phoneSection}>
                        <div className={s.phone}>
                            <span className={s.phoneNumber}>+7 (383) 123 45 67</span>
                            <img src={chevron} alt='Chevron' className={s.chevron} />
                        </div>
                        <span className={s.phoneText}>ЗАКАЗАТЬ ЗВОНОК</span>
                    </div>
                </div>
                <NavLink to={PagesUrlsEnum.Main}>
                    <img src={logo} alt='Camilla De Luxe' className={s.logo} />
                </NavLink>
                <div className={s.actions}>
                    <div className={s.action}>
                        <img src={search} alt='Search' className={s.actionIcon} />
                    </div>
                    <NavLink to={`${PagesUrlsEnum.Profile}/${ProfileUrlsEnums.Cart}`} className={s.action}>
                        <img src={cart} alt='CartContainer' className={s.actionIcon} />
                        <Count />
                    </NavLink>
                    <NavLink to={PagesUrlsEnum.Profile} className={s.action}>
                        <img src={user} alt='SignIn' className={s.actionIcon} />
                    </NavLink>
                </div>
            </div>
        </header>
    );
};
