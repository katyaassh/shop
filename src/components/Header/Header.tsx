import logo from "../../assets/image/logo.svg"
import search from "../../assets/icons/search.svg"
import menu from "../../assets/icons/menu.svg"
import user from "../../assets/icons/user.svg"
import like from "../../assets/icons/like.svg"
import cart from "../../assets/icons/cart.svg"
import chevron from "../../assets/icons/chevron-down.svg"
import s from "./Header.module.scss"
import React from "react";
import clsx from "clsx"

interface IProps {

}

export const Header: React.FC<IProps> = () => {
    return <header className={s.headerContainer}>
        <div className={clsx('container', s.header)}>
            <div className={s.sectionLeft}>
                <img src={menu} alt="Menu" className={s.menuIcon}/>
                <div className={s.label}>Интернет магазин парфюмерии</div>
                <div className={s.call}>
                    <div className={s.numberBlock}>
                        <span className={s.number}>+7 (383) 123 45 67</span>
                        <img src={chevron} alt="Chevron" className={s.chevron}/>
                    </div>
                    <span className={s.callText}>ЗАКАЗАТЬ ЗВОНОК</span>
                </div>
            </div>
            <img src={logo} alt="Camilla De Luxe" className={s.logo}/>
            <div className={s.headerActions}>
                <img src={search} alt="Search" className={s.icon}/>
                <img src={user} alt="User" className={s.icon}/>
                <div className={clsx(s.headerAction, s.likeBlock)}>
                    <img src={like} alt="Like" className={s.icon}/>
                    <div className={s.count}>0</div>
                </div>
                <div className={s.headerAction}>
                    <img src={cart} alt="Cart" className={s.icon}/>
                    <div className={s.count}>0</div>
                </div>
            </div>
        </div>
    </header>
}
