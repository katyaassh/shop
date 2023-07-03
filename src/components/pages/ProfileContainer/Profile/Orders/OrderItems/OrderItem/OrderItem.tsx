import { IOrderType } from '../../../../../../../models/order-type';
import s from './OrderItem.module.scss';

interface IProps {
    order: IOrderType;
    onClick: (id: string) => void;
}

export const OrderItem = ({ order, onClick }: IProps): JSX.Element => {
    const onItemClick = (): void => {
        onClick(order._id);
    };

    return (
        <div className={s.orderItem} onClick={onItemClick}>
            <div className={s.left}>
                <div className={s.number}>Номер заказа: {order._id}</div>
                <div>Адрес: {order.address}</div>
                <div>Статус заказа: {order.state}</div>
                <div className={s.prise}>{order.totalPrise} P</div>
            </div>
            <div className={s.date}>{new Date(order.createdAt).toLocaleString()}</div>
        </div>
    );
};
