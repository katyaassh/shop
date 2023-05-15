import s from './Checkbox.module.scss';
import { Field } from 'formik';
import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { ICategoryItem } from '../../../models/category-item';

interface IProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    name: string;
    item: ICategoryItem;
}

export const Checkbox = ({ item, name }: IProps): JSX.Element => {
    return (
        <div className={s.item}>
            <Field type='checkbox' value={item._id} name={name} className={s.checkbox} id={item.type} />
            <label htmlFor={item.type}>{item.type}</label>
        </div>
    );
};
