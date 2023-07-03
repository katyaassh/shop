import s from './SmallCounter.module.scss';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCount } from '../../../store/selectors/cart.selectors';
import { IDispatch } from '../../../store/types/types';
import { getCountProductsInCart } from '../../../store/thunks/cart.thunks';

export const SmallCounter = (): JSX.Element => {
    const dispatch: IDispatch = useDispatch();

    const count = useSelector(selectCount);

    useEffect(() => {
        dispatch(getCountProductsInCart());
    }, []);

    return <div className={s.count}>{count}</div>;
};
