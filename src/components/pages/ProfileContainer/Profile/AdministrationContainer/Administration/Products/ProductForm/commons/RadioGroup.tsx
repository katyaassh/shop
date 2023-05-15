import { Field } from 'formik';
import { ICategory } from '../../../../../../../../../models/category';

interface IProps {
    filter: ICategory;
}

export const RadioGroup = ({ filter }: IProps): JSX.Element => {
    const isEmpty = Object.entries(filter).length === 0;

    return (
        <div>
            {!isEmpty && <div style={{ marginBottom: 10, fontSize: 18 }}>{filter.name}</div>}
            {!isEmpty &&
                filter.items.map((item) => (
                    <div key={item._id}>
                        <Field name={filter.category} type={'radio'} value={item._id} />
                        {item.type}
                    </div>
                ))}
        </div>
    );
};
