import { useState } from 'react';
import s from './Counter.module.scss';

export const Counter = (): JSX.Element => {
    let [count, setCount] = useState(1);

    const onMinusClick = () => {
        setCount(count - 1);
    };

    const onPlusClick = () => {
        setCount(count + 1);
    };

    return (
        <div className={s.counter}>
            <button onClick={onMinusClick} disabled={count === 1} className={s.button}>
                -
            </button>
            {count}
            <button onClick={onPlusClick} className={s.button}>
                +
            </button>
        </div>
    );
};
