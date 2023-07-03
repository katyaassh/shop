import { Cart } from './Cart/Cart';
import { useState } from 'react';
import { clearItemInCart } from '../../../../../helpers/clearItemInCart';
import { setInCart } from '../../../../../helpers/setInCart';
import { ICartItem } from '../../../../../models/cart-item';
import { IDispatch } from '../../../../../store/types/types';
import { useDispatch } from 'react-redux';
import { setCount } from '../../../../../store/actions/cart.actions';
import { IProductInCart } from '../../../../../models/productInCart';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { PagesUrlsEnum } from '../../../../../enums/pages-urls.enum';
import { getCart } from '../../../../../helpers/getCart';

export const CartContainer = (): JSX.Element => {
    const dispatch: IDispatch = useDispatch();
    const navigate: NavigateFunction = useNavigate();

    const [cart, setCart] = useState(getCart);

    const setCountInCart = (product: ICartItem, count: number): void => {
        setInCart(product, count);
        setCart(getCart());
        dispatch(setCount(count));
    };

    const onClearCartClick = (): void => {
        localStorage.removeItem('cart');
        setCart(getCart());
        dispatch(setCount(0));
    };

    const onClearItemClick = (id: string): void => {
        clearItemInCart(id);
        setCart(getCart());
        dispatch(setCount(-1));
    };

    const onOrderClick = (): void => {
        navigate('/' + PagesUrlsEnum.OrderForm);
    };

    const fullPrise = cart?.length
        ? cart?.reduce((sum: number, product: IProductInCart) => {
              return sum + product.count * product.product.fullPrise;
          }, 0)
        : 0;

    return (
        <Cart
            cart={cart}
            setCountInCart={setCountInCart}
            onClearCartClick={onClearCartClick}
            onClearItemClick={onClearItemClick}
            fullPrise={fullPrise}
            onOrderClick={onOrderClick}
        />
    );
};
