import { ICartItem } from './cart-item';

export interface IProductInCart {
    product: ICartItem;
    count: number;
}
