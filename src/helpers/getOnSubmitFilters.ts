import { FormikValues } from 'formik';
import { FiltersValues } from '../models/filters-values';
import { ProductsParams } from '../models/products-params-type';

export const getOnSubmitFilters = (
    onFiltersChange: (params: ProductsParams) => void,
    onClose?: () => void
): ((values: FiltersValues) => void) => {
    return (values: FormikValues) => {
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
        if (onClose) {
            onClose();
        }
        onFiltersChange(otherValues);
    };
};
