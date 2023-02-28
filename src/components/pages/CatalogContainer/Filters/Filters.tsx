import { ICategory } from '../../../../models/category';
import s from './Filters.module.scss';
import { ProductsParams } from '../../../../models/products-params-type';
import { Form, Formik, FormikProps, FormikValues } from 'formik';
import { FilterDropdown } from './FilterDropdown/FilterDropdown';
import { PriceSlider } from './FilterDropdown/PriceSlider/PriceSlider';
import { PriceSorting } from './PriceSorting/PriceSorting';

interface IProps {
    filters: ICategory[];
    onFiltersChange: (params: ProductsParams) => void;
    initialValues: ProductsParams;
}

interface FiltersValues {
    brand?: string[];
    specialOffers?: string[];
    fragrance?: string[];
    gender?: string[];
    perfumeType?: string[];
    min?: number;
    max?: number;
    sort?: 'dec' | 'inc';
}

export const Filters = (props: IProps): JSX.Element => {
    const isVisible = !!props.filters.length;
    const initialValues: FiltersValues = props.initialValues;

    const onSubmit = (values: FormikValues) => {
        let { specialOffers, ...otherValues }: FiltersValues = values;
        otherValues = Object.fromEntries(
            Object.entries(otherValues).filter(([_, value]: [string, string[] | number | string]) => {
                if (typeof value === 'number') {
                    return value;
                } else {
                    return value.length;
                }
            })
        );

        if (specialOffers) {
            otherValues = {
                ...otherValues,
                ...specialOffers.reduce((acc: { [key: string]: boolean }, val: string) => {
                    acc[val] = true;
                    return acc;
                }, {}),
            };
        }
        props.onFiltersChange(otherValues);
    };

    return (
        <div>
            {isVisible && (
                <Formik initialValues={initialValues} onSubmit={(values: FormikValues) => onSubmit(values)}>
                    {({ values, setValues, setFieldValue }: FormikProps<FormikValues>) => (
                        <Form>
                            <div className={s.filters}>
                                <PriceSlider setFieldValue={setFieldValue} nameMin={'min'} nameMax={'max'} />
                                {props.filters.map((filter: ICategory) => (
                                    <FilterDropdown
                                        key={filter.name}
                                        filter={filter}
                                        activeCount={values[filter.category]?.length}
                                        category={filter.category}
                                        setFieldValue={setFieldValue}
                                        options={filter.items}
                                        label={filter.name}
                                    />
                                ))}
                                <div>
                                    <button type='submit' className={s.button}>
                                        Применить
                                    </button>
                                    <button
                                        type='button'
                                        onClick={() => {
                                            setValues({});
                                        }}
                                        className={s.resetFormButton}
                                    >
                                        Сбросить
                                    </button>
                                </div>
                            </div>
                            <PriceSorting sort={values.sort} />
                        </Form>
                    )}
                </Formik>
            )}
        </div>
    );
};
