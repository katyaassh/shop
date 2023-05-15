import { IOrder } from '../../../../../../../models/order';
import s from './Order.module.scss';
import clsx from 'clsx';
import { ProductInOrder } from './ProductInOrder/ProductInOrder';
import { INewProductInOrder } from '../../../../../../../models/newProductsInOrder';

interface IProps {
    order: IOrder;
    products: INewProductInOrder[];
    onProductClick: (id: string) => void;
}

export const Order = ({ order, products, onProductClick }: IProps): JSX.Element => {
    return (
        <div className={s.order}>
            <h3 className={s.title}>Заказ № {order._id}</h3>
            <div className={s.content}>
                <div className={s.items}>
                    <div>Адрес:</div>
                    <div>{order.address}</div>
                    <div>Тип платежа:</div>
                    <div>{order.paymentType}</div>
                    <div>Тип доставки:</div>
                    <div>{order.deliveryType}</div>
                    <div>Стоимость:</div>
                    <div className={s.prise}>{order.totalPrise} P</div>
                    <div>Статус:</div>
                    <div className={s.state}>{order.state}</div>
                    <div>Дата создания:</div>
                    <div>{new Date(order.createdAt).toLocaleString()}</div>
                    <div>Обновлен:</div>
                    <div>{new Date(order.updatedAt).toLocaleString()}</div>
                    <div>История:</div>
                    <div className={s.historyItems}>
                        {order.history.map((item) => (
                            <div key={item.state} className={s.historyItem}>
                                📍
                                <div className={clsx(item.state === order.state ? s.activeHistoryItemText : s.historyItemText)}>
                                    <div>{item.state}</div>
                                    <div>{new Date(item.date).toLocaleString()}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div>
                <div>Товары:</div>
                <div className={s.products}>
                    {products.map((product) => (
                        <ProductInOrder product={product} key={product.product._id} onProductClick={onProductClick} />
                    ))}
                </div>
            </div>
        </div>
    );
};
