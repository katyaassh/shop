import { ICategory } from '../../../../../../../../../../models/category';
import { Field } from 'formik';

interface IProps {
    filter: ICategory;
    type: string;
}

export const CategoryItems = ({ filter, type }: IProps) => {
    const isEmpty = Object.entries(filter).length === 0;

    return (
        <div>
            {!isEmpty && (
                <>
                    <div style={{ marginBottom: 10, fontSize: 18 }}>{filter.name}</div>
                    {filter.items.map((item) => (
                        <div key={item._id}>
                            <Field name={filter.category} type={type} value={item._id} />
                            {item.type}
                        </div>
                    ))}
                </>
            )}
        </div>
    );
};
