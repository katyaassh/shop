import {NavLink} from "react-router-dom";
import s from './Navbar.module.scss'
import user from './../../assets/icons/user.svg'
import newsfeed from './../../assets/icons/newsfeed.svg'
import message from './../../assets/icons/message.svg'
import friends from './../../assets/icons/friends.svg'
import groups from './../../assets/icons/groups.svg'
import photos from './../../assets/icons/photos.svg'

export const Navbar = () => {
    return <nav className={s.navbar}>
        <NavLink className={s.item} to='/profile'>
            <img src={user} alt="" className={s.itemIcon}/>
            Моя страница
        </NavLink>
        <NavLink className={s.item} to='/feed' >
            <img src={newsfeed} alt="" className={s.itemIcon}/>
            Новости
        </NavLink>
        <NavLink className={s.item} to='/messages'>
            <img src={message} alt="" className={s.itemIcon}/>
            Мессенджер
        </NavLink>
        <NavLink className={s.item} to='/friends'>
            <img src={friends} alt="" className={s.itemIcon}/>
            Друзья
        </NavLink>
        <NavLink className={s.item} to='/groups'>
            <img src={groups} alt="" className={s.itemIcon}/>
            Сообщества
        </NavLink>
        <NavLink className={s.item} to='/photos'>
            <img src={photos} alt="" className={s.itemIcon}/>
            Фотографии
        </NavLink>
    </nav>
}
