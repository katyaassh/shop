import React, { useEffect } from 'react';
import { Catalog } from './Catalog';
import { IDispatch } from '../../../store/types/types';
import { useDispatch } from 'react-redux';
import { getProducts } from '../../../store/thunks/products.thunks';

export const CatalogContainer = (): JSX.Element => {
    const dispatch: IDispatch = useDispatch();

    useEffect((): void => {
        dispatch(getProducts());
    }, []);

    return <Catalog />;
};
