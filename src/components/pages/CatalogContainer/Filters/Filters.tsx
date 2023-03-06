import { ICategory } from '../../../../models/category';
import s from './Filters.module.scss';
import { ProductsParams } from '../../../../models/products-params-type';
import { Form, Formik, FormikProps, FormikValues } from 'formik';
import { FilterDropdown } from './FilterDropdown/FilterDropdown';
import { PriceSlider } from './FilterDropdown/PriceSlider/PriceSlider';
import { PriceSorting } from './FilterDropdown/PriceSorting/PriceSorting';
import { getOnSubmitFilters } from '../../../../helpers/getOnSubmitFilters';

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

    const onSubmit = getOnSubmitFilters(props.onFiltersChange);

    return (
        <div>
            {isVisible && (
                <Formik initialValues={initialValues} onSubmit={onSubmit}>
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
