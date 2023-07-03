import { useDispatch, useSelector } from 'react-redux';
import { selectFilters } from '../../../../../../../store/selectors/filters.selectors';
import React, { useEffect } from 'react';
import { IDispatch } from '../../../../../../../store/types/types';
import { addFilters, getFilters } from '../../../../../../../store/thunks/filters.thunks';
import { FiltersForm } from './FiltersForm/FiltersForm';
import { IFiltersFormValues } from '../../../../../../../models/filters-form-values';
import s from './Filters.module.scss';

export const Filters = (): JSX.Element => {
    const dispatch: IDispatch = useDispatch();

    const filters = useSelector(selectFilters);

    useEffect(() => {
        dispatch(getFilters());
    }, []);

    const newFilters = filters.splice(1);

    const onSubmit = (values: IFiltersFormValues, { resetForm }: any) => {
        const category = Object.keys(values);
        const type = Object.values(values);

        dispatch(addFilters(category[0], type[0]));
        resetForm();
    };

    return (
        <div>
            <p>Фильтры</p>
            <div className={s.filters}>
                {newFilters.map((filter) => (
                    <FiltersForm onSubmit={onSubmit} filter={filter} key={filter.name} />
                ))}
            </div>
        </div>
    );
};
