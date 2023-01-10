import {NavLink} from "react-router-dom";
import s from "./Navbar.module.scss"
import user from "./../../assets/icons/user.svg"
import newsfeed from "./../../assets/icons/newsfeed.svg"
import message from "./../../assets/icons/message.svg"
import friends from "./../../assets/icons/friends.svg"
import groups from "./../../assets/icons/groups.svg"
import photos from "./../../assets/icons/photos.svg"
import React from "react";

interface INavLink {
    src: string
    label: string
    alt: string
    to: string
}

const navLinks: INavLink[] = [
    {
        src: user,
        label: 'Моя страница',
        alt: '',
        to: '/profile'
    },
    {
        src: newsfeed,
        label: 'Новости',
        alt: 'Feed',
        to: '/feed'
    },
    {
        src: message,
        label: 'Мессенджер',
        alt: 'Messages',
        to: '/messages'
    },
    {
        src: friends,
        label: 'Друзья',
        alt: 'Friends',
        to: '/friends'
    },
    {
        src: groups,
        label: 'Сообщества',
        alt: 'Groups',
        to: '/groups'
    },
    {
        src: photos,
        label: 'Фотографии',
        alt: 'Photos',
        to: '/photos'
    }
]

interface IProps {}

export const Navbar: React.FC<IProps> = () => {
    return <nav className={s.navbar}>
        {navLinks.map((item: INavLink) => <NavLink className={s.item} to={item.to} key={item.label}>
            <img src={item.src} alt={item.alt} className={s.itemIcon}/>
            {item.label}
        </NavLink>)}
    </nav>
}
