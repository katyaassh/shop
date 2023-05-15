import { IProductInCart } from './productInCart';
import { IHistoryType } from './history-type';
import { IProductInOrder } from './productInOrder';

export interface IOrder {
    address: string;
    createdAt: string;
    deliveryType: string;
    paymentType: string;
    products: IProductInOrder[];
    state: string;
    totalPrise: number;
    updatedAt: string;
    user: string;
    _id: string;
    history: IHistoryType[];
}
