import { IOrderType } from './order-type';

export interface IUser {
    address: string;
    email: string;
    lastname: string;
    name: string;
    phone: string;
    role: string;
    orders: IOrderType[];
}
