import React from 'react';
import s from './Catalog.module.scss';
import clsx from 'clsx';
import { Products } from '../Products/Products';
import { useSelector } from 'react-redux';
import { selectProducts } from '../../store/selectors/catalog.selectors';
import { IProductItem } from '../../models/product-item';

export const Catalog = (): JSX.Element => {
    const products: IProductItem[] = useSelector(selectProducts);

    return (
        <div className={clsx(s.catalog, 'container')}>
            <div className={s.title}>Каталог</div>
            <Products products={products} />
        </div>
    );
};
