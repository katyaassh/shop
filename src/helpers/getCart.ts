import { IProductInCart } from '../models/productInCart';

export const getCart = (): IProductInCart[] | null => {
    let cartInStorage = localStorage.getItem('cart');
    return cartInStorage ? JSON.parse(cartInStorage) : null;
};
