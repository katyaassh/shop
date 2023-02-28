import React, { useState } from 'react';
import s from './Catalog.module.scss';
import clsx from 'clsx';
import { Products } from '../../common/Products/Products';
import { IProductItem } from '../../../models/product-item';
import { ICategory } from '../../../models/category';
import { Filters } from './Filters/Filters';
import { ProductsParams } from '../../../models/products-params-type';
import { useWindowDimensions } from '../../../hooks/useWindowDimensions';
import chevron from '../../../assets/icons/chevron.svg';
import { FiltersSidebarContainer } from './Filters/FiltersSidebarContainer/FiltersSidebarContainer';
import { Pagination } from '../../common/Pagination/Pagination';

interface IProps {
    filters: ICategory[];
    onFiltersChange: (params: ProductsParams) => void;
    initialValues: ProductsParams;
    onPageChange: (page: number) => void;
    products: IProductItem[];
    totalCount: number;
    pageCount: number;
    page: number;
}

export const Catalog = (props: IProps): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);

    const { width } = useWindowDimensions();

    return (
        <div className={clsx(s.catalog, 'container')}>
            <div className={s.titleBlock}>
                <div className={s.title}>Каталог</div>
                <div className={s.totalCount}>{props.totalCount}</div>
            </div>
            {width < 992 ? (
                <button type='button' className={s.filtersButton} onClick={() => setIsOpen(true)}>
                    Фильтры <img src={chevron} alt='Chevron' className={s.chevron} />
                </button>
            ) : (
                <Filters filters={props.filters} onFiltersChange={props.onFiltersChange} initialValues={props.initialValues} />
            )}
            <FiltersSidebarContainer
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                initialValues={props.initialValues}
                filters={props.filters}
                onFiltersChange={props.onFiltersChange}
            />
            {props.totalCount ? (
                <>
                    <Products products={props.products} />
                    <Pagination currentPage={props.page} pagesCount={props.pageCount} onPageChange={props.onPageChange} />
                </>
            ) : (
                <div className={s.notFound}>Ничего не найдено</div>
            )}
        </div>
    );
};
