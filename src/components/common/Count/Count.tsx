import s from './Count.module.scss';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCount } from '../../../store/selectors/cart.selectors';
import { IProductInCart } from '../../../models/productInCart';
import { getCart } from '../../../helpers/getCart';

export const Count = (): JSX.Element => {
    const countInState = useSelector(selectCount);
    const [count, setCount] = useState(0);

    useEffect(() => {
        const cart = getCart();

        if (cart) {
            let sum = 0;
            cart.forEach((product: IProductInCart) => (sum += product.count));
            setCount(sum);
        } else setCount(0);
    }, [countInState]);

    return <div className={s.count}>{count}</div>;
};
