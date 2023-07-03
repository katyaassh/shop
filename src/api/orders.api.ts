import { instanceWithCredentials } from './instance-with-credentials';
import { IOrderData } from '../models/order-data';
import { IAddOrderResponse } from '../models/addOrder-response';
import { AxiosResponse } from 'axios';
import { IOrderResponse } from '../models/order-response';

export const ordersApi = {
    addOrder(data: IOrderData): Promise<IAddOrderResponse> {
        return instanceWithCredentials
            .post('orders', data)
            .then((response: AxiosResponse<IAddOrderResponse>): IAddOrderResponse => {
                return response.data;
            });
    },
    getOrder(id = ''): Promise<IOrderResponse> {
        return instanceWithCredentials.get('orders/' + id).then((response: AxiosResponse<IOrderResponse>): IOrderResponse => {
            return response.data;
        });
    },
};
