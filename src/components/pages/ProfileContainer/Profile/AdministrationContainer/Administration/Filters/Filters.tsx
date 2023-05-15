import { useDispatch, useSelector } from 'react-redux';
import { selectFilters } from '../../../../../../../store/selectors/filters.selectors';
import React, { useEffect } from 'react';
import { IDispatch } from '../../../../../../../store/types/types';
import { addFilters, getFilters } from '../../../../../../../store/thunks/filters.thunks';
import { FiltersForm } from './FiltersForm/FiltersForm';

export const Filters = (): JSX.Element => {
    const dispatch: IDispatch = useDispatch();

    const filters = useSelector(selectFilters);

    useEffect(() => {
        dispatch(getFilters());
    }, []);

    delete filters[0];

    interface IFilterValues {
        [key: string]: string;
    }

    const onSubmit = (values: IFilterValues, { resetForm }: any) => {
        const category = Object.keys(values);
        const type = Object.values(values);

        dispatch(addFilters(category[0], type[0]));
        resetForm();
    };

    return (
        <div>
            <p>Фильтры</p>
            <div style={{ display: 'flex', width: 100 + '%', gap: 15 }}>
                {filters.map((filter) => (
                    <FiltersForm onSubmit={onSubmit} filter={filter} key={filter.name} />
                ))}
            </div>
        </div>
    );
};
