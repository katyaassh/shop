import React, { useEffect, useState } from 'react';
import { Catalog } from './Catalog';
import { IDispatch } from '../../../store/types/types';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../../store/thunks/products.thunks';
import { getFilters } from '../../../store/thunks/filters.thunks';
import { ICategory } from '../../../models/category';
import { selectFilters } from '../../../store/selectors/filters.selectors';
import { ProductsParams } from '../../../models/products-params-type';
import { toQueryString } from '../../../helpers/to-query-string';
import { useLocation, useNavigate } from 'react-router-dom';
import { fromQueryString } from '../../../helpers/from-query-string';
import { IProductItem } from '../../../models/product-item';
import { selectPage, selectPageCount, selectProducts, selectTotalCount } from '../../../store/selectors/products.selectors';

export const CatalogContainer = (): JSX.Element => {
    const dispatch: IDispatch = useDispatch();

    const filters: ICategory[] = useSelector(selectFilters);
    const products: IProductItem[] = useSelector(selectProducts);
    const totalCount: number = useSelector(selectTotalCount);
    const pageCount: number = useSelector(selectPageCount);
    const page: number = useSelector(selectPage);

    const navigate = useNavigate();
    const location = useLocation();
    const initialValues: ProductsParams = fromQueryString(location.search);

    const [param, setParam] = useState<ProductsParams>({});

    const onFiltersChange = (params: ProductsParams): void => {
        navigate(toQueryString(params));
        setParam(params);
    };

    const onPageChange = (pageNumber: number): void => {
        navigate(toQueryString({ ...param, page: pageNumber }));
    };

    useEffect((): void => {
        dispatch(getProducts(location.search));
    }, [location]);

    useEffect((): void => {
        dispatch(getFilters());
    }, []);

    return (
        <Catalog
            filters={filters}
            onFiltersChange={onFiltersChange}
            initialValues={initialValues}
            onPageChange={onPageChange}
            products={products}
            pageCount={pageCount}
            page={page}
            totalCount={totalCount}
        />
    );
};
