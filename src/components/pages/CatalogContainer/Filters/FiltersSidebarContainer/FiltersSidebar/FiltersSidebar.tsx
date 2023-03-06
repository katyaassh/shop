import { Form, Formik, FormikProps, FormikValues } from 'formik';
import s from './FiltersSidebar.module.scss';
import { ICategory } from '../../../../../../models/category';
import { FiltersSidebarDropdown } from './FiltersSidebarDropdown/FiltersSidebarDropdown';
import { ProductsParams } from '../../../../../../models/products-params-type';
import { PriceSliderSidebar } from './PriceSliderSidebar/PriceSliderSidebar';
import { PriceSortingSidebar } from './PriceSortingSidebar/PriceSortingSidebar';
import { getOnSubmitFilters } from '../../../../../../helpers/getOnSubmitFilters';

interface IProps {
    initialValues: FormikValues;
    filters: ICategory[];
    onFiltersChange: (params: ProductsParams) => void;
    onClose: () => void;
}

export const FiltersSidebar = (props: IProps): JSX.Element => {
    const onSubmit = getOnSubmitFilters(props.onFiltersChange, props.onClose);

    return (
        <div className={s.filtersSidebar}>
            <Formik initialValues={props.initialValues} onSubmit={onSubmit}>
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
