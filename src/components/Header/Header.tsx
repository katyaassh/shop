import logo from "../../assets/image/logo.svg"
import search from "../../assets/icons/search.svg"
import menu from "../../assets/icons/menu.svg"
import user from "../../assets/icons/user.svg"
import like from "../../assets/icons/like.svg"
import cart from "../../assets/icons/cart.svg"
import chevron from "../../assets/icons/chevron.svg"
import s from "./Header.module.scss"
import React from "react";
import clsx from "clsx"
import {useDispatch} from "react-redux";
import {openSidebar} from "../../store/actions/sidebar.actions";
import {IDispatch} from "../../store/types/types";

export const Header = (): JSX.Element => {
    const dispatch: IDispatch = useDispatch()

    const onClick = (): void => {
        dispatch(openSidebar())
    }

    return <header className={s.headerContainer}>
        <div className={clsx('container', s.header)}>
            <div className={s.sectionLeft}>
                <button className={s.menuButton} onClick={onClick}>
                    <img src={menu} alt="Menu" className={s.menuIcon}/>
                </button>
                <div className={s.label}>Интернет магазин парфюмерии</div>
                <div className={s.phoneSection}>
                    <div className={s.phone}>
                        <span className={s.phoneNumber}>+7 (383) 123 45 67</span>
                        <img src={chevron} alt="Chevron" className={s.chevron}/>
                    </div>
                    <span className={s.phoneText}>ЗАКАЗАТЬ ЗВОНОК</span>
                </div>
            </div>
            <img src={logo} alt="Camilla De Luxe" className={s.logo}/>
            <div className={s.actions}>
                <div className={s.action}>
                    <img src={search} alt="Search" className={s.actionIcon}/>
                </div>
                <div className={s.action}>
                    <img src={user} alt="User" className={s.actionIcon}/>
                </div>
                <div className={clsx(s.action, s.actionLike)}>
                    <img src={like} alt="Like" className={s.actionIcon}/>
                    <div className={s.counter}>0</div>
                </div>
                <div className={s.action}>
                    <img src={cart} alt="Cart" className={s.actionIcon}/>
                    <div className={s.counter}>0</div>
                </div>
            </div>
        </div>
    </header>
}
