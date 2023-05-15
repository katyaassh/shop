import s from '../ProductForm.module.scss';
import { Input } from '../../../../../../../../common/Input/Input';
import { Field } from 'formik';
import React from 'react';

export const TextFields = (): JSX.Element => {
    return (
        <div className={s.fields}>
            <Input label={'Название:'} name={'name'} type={'text'} />
            <Input label={'Объем:'} name={'amount'} type={'number'} />
            <Input label={'Цена:'} name={'fullPrise'} type={'number'} />
            <Input label={'Количество:'} name={'count'} type={'number'} />
            <Field name={'description'} placeholder={'Добавьте описание'} className={s.description} as={'textarea'} />
        </div>
    );
};
