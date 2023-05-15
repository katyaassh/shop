import s from './MainButton.module.scss';
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import clsx from 'clsx';

interface IProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    title: string;
}

export const MainButton = ({ title, className, ...props }: IProps): JSX.Element => {
    return (
        <button onClick={props.onClick} className={clsx(className, s.button)} type={props.type} {...props}>
            {title}
        </button>
    );
};
