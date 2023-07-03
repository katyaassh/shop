import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { IDispatch } from '../../../../../../../store/types/types';
import { getProducts } from '../../../../../../../store/thunks/products.thunks';
import { Location, Outlet, useLocation } from 'react-router-dom';
import { getFilters } from '../../../../../../../store/thunks/filters.thunks';

export const ProductsContainer = (): JSX.Element => {
    const dispatch: IDispatch = useDispatch();
    const location: Location = useLocation();

    useEffect(() => {
        dispatch(getProducts(location.search));
        dispatch(getFilters());
    }, [location]);

    return (
        <div>
            <div style={{ marginBottom: 20 }}>Продукты</div>
            <Outlet />
        </div>
    );
};
