import React from "react";
import avatar from './../../../assets/image/avatar.jpg'
import place from './../../../assets/icons/profile/place.svg'
import work from './../../../assets/icons/profile/work.svg'
import info from './../../../assets/icons/profile/info.svg'
import s from './ProfileInfo.module.scss'
import {NavLink} from "react-router-dom";

interface IProps {
}

export const ProfileInfo: React.FC<IProps> = () => {
    return <div className={s.profileInfo}>
        <img src={avatar} alt="Avatar" className={s.avatar}/>
        <div className={s.wrapper}>
            <div className={s.information}>
                <span className={s.name}>Екатерина Гатина</span>
                <div className={s.links}>
                    <NavLink to={'/search'} className={s.link}>
                        <img src={place} alt="Place" className={s.linkImg}/>
                        <span className={s.linkText}>Новосибирск</span>
                    </NavLink>
                    <NavLink to={'/search'} className={s.link}>
                        <img src={work} alt="Work" className={s.linkImg}/>
                        <span className={s.linkText}>СГУГиТ</span>
                    </NavLink>
                    <div className={s.link}>
                        <img src={info} alt="Place" className={s.linkImg}/>
                        <span className={s.linkText}>Подробнее</span>
                    </div>
                </div>
            </div>
            <button className={s.button}>Редактировать профиль</button>
        </div>
    </div>
}
