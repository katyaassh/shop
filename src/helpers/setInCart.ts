import { IProductInCart } from '../models/productInCart';
import { ICartItem } from '../models/cart-item';

export const setInCart = (cartItem: ICartItem, count: number): void => {
    const cart = localStorage.getItem('cart');

    if (cart) {
        const products: IProductInCart[] = JSON.parse(cart);
        const existedProduct = products.find((item) => item.product.id === cartItem.id);

        if (existedProduct) {
            existedProduct.count = existedProduct.count + count;
        } else {
            products.push({ product: cartItem, count: count });
        }

        localStorage.setItem('cart', JSON.stringify(products));
    } else {
        const productInCart: IProductInCart = {
            product: cartItem,
            count: count,
        };

        localStorage.setItem('cart', JSON.stringify([productInCart]));
    }
};
