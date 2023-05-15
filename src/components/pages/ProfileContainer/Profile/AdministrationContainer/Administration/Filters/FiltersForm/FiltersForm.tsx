import { Field, Form, Formik, FormikValues } from 'formik';
import { MainButton } from '../../../../../../../common/MainButton/MainButton';
import React from 'react';
import { ICategory } from '../../../../../../../../models/category';
import s from './FiltersFrom.module.scss';

interface IProps {
    onSubmit: (values: FormikValues, resetForm: any) => void;
    filter: ICategory;
    key: string;
}

export const FiltersForm = ({ onSubmit, filter }: IProps): JSX.Element => {
    interface IFilterValues {
        [key: string]: string;
    }

    const initialValues: IFilterValues = {
        [filter.category]: '',
    };

    return (
        <div style={{ width: 100 + '%' }}>
            <Formik onSubmit={onSubmit} initialValues={initialValues}>
                {({ handleSubmit }) => (
                    <Form>
                        <div>
                            <div className={s.name}>{filter.name}</div>
                            <div>
                                {filter.items.map((item) => (
                                    <div key={item._id} className={s.item}>
                                        <div className={s.type}>{item.type}</div>
                                        <div style={{ marginLeft: 10 }}>x</div>
                                    </div>
                                ))}
                            </div>
                            <div>
                                <Field name={filter.category} placeholder={'Введите название'} className={s.input} />
                                <MainButton
                                    onClick={() => handleSubmit}
                                    title={'Добавить'}
                                    type={'submit'}
                                    style={{ width: 100 + '%' }}
                                />
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};
