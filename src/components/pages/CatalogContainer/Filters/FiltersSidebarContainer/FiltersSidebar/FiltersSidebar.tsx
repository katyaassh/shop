import { Form, Formik, FormikProps, FormikValues } from 'formik';
import s from './FiltersSidebar.module.scss';
import { ICategory } from '../../../../../../models/category';
import { FiltersSidebarDropdown } from './FiltersSidebarDropdown/FiltersSidebarDropdown';
import { ProductsParams } from '../../../../../../models/products-params-type';
import { PriceSliderSidebar } from './PriceSliderSidebar/PriceSliderSidebar';
import { PriceSortingSidebar } from './PriceSortingSidebar/PriceSortingSidebar';

interface IProps {
    initialValues: FormikValues;
    filters: ICategory[];
    onFiltersChange: (params: ProductsParams) => void;
    onClose: () => void;
}

interface FiltersValues {
    brand?: string[];
    specialOffers?: string[];
    fragrance?: string[];
    gender?: string[];
    perfumeType?: string[];
}

export const FiltersSidebar = (props: IProps): JSX.Element => {
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
        props.onClose();
        props.onFiltersChange(otherValues);
    };

    return (
        <div className={s.filtersSidebar}>
            <Formik initialValues={props.initialValues} onSubmit={(values: FormikValues) => onSubmit(values)}>
                {({ values, setValues, setFieldValue }: FormikProps<FormikValues>) => (
                    <Form>
                        <div className={s.filters}>
                            <PriceSliderSidebar nameMin={'min'} nameMax={'max'} />
                            {props.filters.map((filter: ICategory) => (
                                <FiltersSidebarDropdown
                                    key={filter.name}
                                    label={filter.name}
                                    options={filter.items}
                                    category={filter.category}
                                    activeCount={values[filter.category]?.length}
                                    setFieldValue={setFieldValue}
                                />
                            ))}
                            <PriceSortingSidebar sort={values.sort} />
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
                    </Form>
                )}
            </Formik>
        </div>
    );
};
