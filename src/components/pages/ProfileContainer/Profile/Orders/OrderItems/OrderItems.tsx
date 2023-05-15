import { IOrderType } from '../../../../../../models/order-type';
import s from './OrderItems.module.scss';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../../../../store/selectors/user.selectors';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { OrderItem } from './OrderItem/OrderItem';

export const OrderItems = (): JSX.Element => {
    const { orders } = useSelector(selectUser);

    const navigate: NavigateFunction = useNavigate();

    const onClick = (id: string): void => {
        navigate(id);
    };

    return (
        <div className={s.orders}>
            {orders.length ? (
                orders.map((order: IOrderType) => <OrderItem order={order} key={order._id} onClick={onClick} />)
            ) : (
                <div className={s.empty}>Заказов нет</div>
            )}
        </div>
    );
};
