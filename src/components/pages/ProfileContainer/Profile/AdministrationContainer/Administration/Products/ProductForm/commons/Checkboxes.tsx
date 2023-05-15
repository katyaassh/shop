import { Field } from 'formik';
import React from 'react';
import { ICategory } from '../../../../../../../../../models/category';

interface IProps {
    filter: ICategory;
}

export const Checkboxes = ({ filter }: IProps): JSX.Element => {
    const isEmpty = Object.entries(filter).length === 0;
    return (
        <div>
            {!isEmpty && <div style={{ marginBottom: 10, fontSize: 18 }}>{filter.name}</div>}
            {!isEmpty &&
                filter.items.map((item) => (
                    <div key={item._id}>
                        <Field name={filter.category} type={'checkbox'} value={item._id} />
                        {item.type}
                    </div>
                ))}
        </div>
    );
};
