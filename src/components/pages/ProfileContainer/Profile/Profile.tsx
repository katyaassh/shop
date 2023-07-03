import s from './Profile.module.scss';
import clsx from 'clsx';
import { NavLink, Outlet } from 'react-router-dom';
import { ProfileUrlsEnums } from '../../../../enums/profile-urls.enums';
import { MainButton } from '../../../common/MainButton/MainButton';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../../store/selectors/user.selectors';
import { PagesUrlsEnum } from '../../../../enums/pages-urls.enum';

interface IProps {
    onLogOutClick: () => void;
}

export const Profile = ({ onLogOutClick }: IProps): JSX.Element => {
    const user = useSelector(selectUser);

    return (
        <div className={clsx('container', s.profile)}>
            <h1 className={s.label}>Личный кабинет</h1>
            <div className={s.content}>
                <div className={s.sidebar}>
                    <NavLink to={PagesUrlsEnum.Profile} className={s.item}>
                        Профиль
                    </NavLink>
                    <NavLink to={ProfileUrlsEnums.Orders} className={s.item}>
                        Заказы
                    </NavLink>
                    <NavLink to={ProfileUrlsEnums.Cart} className={s.item}>
                        Корзина
                    </NavLink>
                    {user?.role === 'Admin' && (
                        <NavLink to={ProfileUrlsEnums.Administration} className={s.item}>
                            Администрация
                        </NavLink>
                    )}
                    <MainButton onClick={onLogOutClick} className={s.button}>
                        Выйти
                    </MainButton>
                </div>
                <div className={s.outlet}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};
