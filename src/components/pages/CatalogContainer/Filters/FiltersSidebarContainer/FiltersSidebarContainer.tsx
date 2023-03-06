import { Overlay } from '../../../../common/Overlay/Overlay';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { FiltersSidebar } from './FiltersSidebar/FiltersSidebar';
import { FormikValues } from 'formik';
import { ICategory } from '../../../../../models/category';
import { ProductsParams } from '../../../../../models/products-params-type';

interface IProps {
    isOpen: boolean;
    onClose: () => void;
    initialValues: FormikValues;
    filters: ICategory[];
    onFiltersChange: (params: ProductsParams) => void;
}

export const FiltersSidebarContainer = (props: IProps): JSX.Element => {
    const { pathname } = useLocation();

    useEffect((): void => {
        if (props.isOpen) {
            props.onClose();
        }
    }, [pathname]);

    return (
        <Overlay isOpen={props.isOpen} onClose={props.onClose}>
            <FiltersSidebar
                initialValues={props.initialValues}
                filters={props.filters}
                onFiltersChange={props.onFiltersChange}
                onClose={props.onClose}
            />
        </Overlay>
    );
};
