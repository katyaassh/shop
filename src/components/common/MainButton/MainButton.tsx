import s from './MainButton.module.scss';
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import clsx from 'clsx';

export const MainButton = ({
    title,
    className,
    children,
    ...props
}: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>): JSX.Element => {
    return (
        <button onClick={props.onClick} className={clsx(className, s.button)} type={props.type} {...props}>
            {children}
        </button>
    );
};
