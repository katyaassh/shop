import { IProductInCart } from '../models/productInCart';

export const clearItemInCart = (id: string): void => {
    const cart = localStorage.getItem('cart');

    if (cart) {
        const products: IProductInCart[] = JSON.parse(cart);
        const newProducts = products.filter((item) => item.product?.id !== id);

        localStorage.setItem('cart', JSON.stringify(newProducts));
    }
};
