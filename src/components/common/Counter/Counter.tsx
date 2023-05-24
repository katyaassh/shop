import s from './Counter.module.scss';
import { useState } from 'react';
import clsx from 'clsx';
import { IWithClassName } from '../../../models/withClassName';

interface IProps extends IWithClassName {
    countInCart?: number;
    totalCount: number;
    setCountInCart: (count: number) => void;
    inCartItem?: boolean;
}

export const Counter = ({ className, countInCart, setCountInCart, inCartItem, totalCount }: IProps): JSX.Element => {
    let [count, setCount] = useState(countInCart || 1);

    const onMinusClick = (): void => {
        setCount(count - 1);
        if (inCartItem) {
            setCountInCart(-1);
        } else {
            setCountInCart(count - 1);
        }
    };

    const onPlusClick = (): void => {
        setCount(count + 1);
        if (inCartItem) {
            setCountInCart(1);
        } else {
            setCountInCart(count + 1);
        }
    };

    return (
        <div className={clsx(className, s.counter)}>
            <button onClick={onMinusClick} disabled={count === 1} className={s.countButton}>
                -
            </button>
            {count}
            <button onClick={onPlusClick} className={s.countButton} disabled={count === totalCount}>
                +
            </button>
        </div>
    );
};
