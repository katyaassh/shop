import s from './OrderItems/OrderItems.module.scss';
import { Outlet } from 'react-router-dom';

export const Orders = (): JSX.Element => {
    return (
        <div>
            <h2 className={s.title}>Заказы</h2>
            <Outlet />
        </div>
    );
};
