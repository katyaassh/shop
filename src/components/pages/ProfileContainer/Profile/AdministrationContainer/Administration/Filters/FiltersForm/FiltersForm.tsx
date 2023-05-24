import { Field, Form, Formik, FormikValues } from 'formik';
import { MainButton } from '../../../../../../../common/MainButton/MainButton';
import React from 'react';
import { ICategory } from '../../../../../../../../models/category';
import s from './FiltersFrom.module.scss';
import { IFiltersFormValues } from '../../../../../../../../models/filters-form-values';

interface IProps {
    onSubmit: (values: FormikValues, resetForm: any) => void;
    filter: ICategory;
}

export const FiltersForm = ({ onSubmit, filter }: IProps): JSX.Element => {
    const initialValues: IFiltersFormValues = {
        [filter.category]: '',
    };

    return (
        <Formik onSubmit={onSubmit} initialValues={initialValues}>
            <Form className={s.form}>
                <div>
                    <div className={s.name}>{filter.name}</div>
                    <div>
                        {filter.items.map((item) => (
                            <div key={item._id} className={s.item}>
                                <div className={s.type}>{item.type}</div>
                                <div>x</div>
                            </div>
                        ))}
                    </div>
                    <div>
                        <Field name={filter.category} placeholder={'Введите название'} className={s.input} />
                        <MainButton type={'submit'} className={s.button}>
                            Добавить
                        </MainButton>
                    </div>
                </div>
            </Form>
        </Formik>
    );
};
