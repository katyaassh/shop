import s from './UserInfo.module.scss';
import { IUser } from '../../../../../models/user';
import { MainButton } from '../../../../common/MainButton/MainButton';

interface IProps {
    user: IUser;
    onChangeClick: () => void;
}

export const UserInfo = ({ user, onChangeClick }: IProps): JSX.Element => {
    return (
        <div className={s.userInfo}>
            <div>
                <div className={s.title}>Покупатель</div>
                <div className={s.content}>
                    <div className={s.userName}>
                        {user.name} {user.lastname}
                    </div>
                    <div className={s.userText}>{user.email}</div>
                    <div className={s.userText}>{user.phone}</div>
                </div>
            </div>
            <div>
                <div className={s.title}>Адрес доставки</div>
                {user.address ? <div className={s.address}>{user.address}</div> : <div className={s.address}>Нет адреса</div>}
            </div>
            <MainButton className={s.button} onClick={onChangeClick}>
                Изменить
            </MainButton>
        </div>
    );
};
