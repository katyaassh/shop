import logo from '../../assets/image/logo.svg'
import search from '../../assets/image/search.svg'
import avatar from '../../assets/image/avatar.jpg'
import chevron_down from '../../assets/image/chevron-down.svg'
import s from './Header.module.css'

export const Header = () => {
    return <header className={s.header}>
        <div className={s.header_left}>
            <img src={logo} alt="" className={s.logo}/>
            <div className={s.search}>
                <img src={search} alt="" className={s.search_icon}/>
                <p className={s.search_text}>Поиск</p>
            </div>
        </div>
        <div className={s.header_right}>
            <img src={avatar} alt="" className={s.avatar}/>
            <img src={chevron_down} alt="" className={s.chevron_down}/>
        </div>
    </header>
}
