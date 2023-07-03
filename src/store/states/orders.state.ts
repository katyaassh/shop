import { IOrdersState } from '../types/orders.types';

export const ordersState: IOrdersState = {
    order: {
        address: '',
        createdAt: '',
        deliveryType: '',
        paymentType: '',
        products: [],
        state: '',
        totalPrise: 0,
        updatedAt: '',
        user: '',
        _id: '',
        history: [],
    },
};
