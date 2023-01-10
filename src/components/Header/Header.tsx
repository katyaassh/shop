import logo from '../../assets/icons/logo.svg'
import search from '../../assets/icons/search.svg'
import avatar from '../../assets/image/avatar.jpg'
import chevron from '../../assets/icons/chevron-down.svg'
import s from './Header.module.scss'
import React from "react";
import clsx from 'clsx'

interface IProps {

}

export const Header: React.FC<IProps> = () => {

    return <header className={s.headerContainer}>
        <div className={clsx('container', s.header)}>
            <div className={s.sectionLeft}>
                <img src={logo} alt="ВКонтакте" className={s.logo}/>
                <div className={s.search}>
                    <img src={search} alt="Search" className={s.searchIcon}/>
                    <span className={s.searchText}>Поиск</span>
                </div>
            </div>
            <div className={s.sectionRight}>
                <img src={avatar} alt="User name" className={s.avatar}/>
                <img src={chevron} alt="Chevron" className={s.chevron}/>
            </div>
        </div>
    </header>
}
