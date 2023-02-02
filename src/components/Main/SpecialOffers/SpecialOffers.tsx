import s from './SpecialOffers.module.scss';
import { NavLink } from 'react-router-dom';
import { PagesUrlsEnum } from '../../../enums/pagesUrls.enum';
import { useEffect, useState } from 'react';
import { getDiscountProducts, getNewProducts } from '../../../store/thunks/catalog.thunks';
import { useDispatch, useSelector } from 'react-redux';
import { selectDiscountProducts, selectNewProducts } from '../../../store/selectors/catalog.selectors';
import { IProductItem } from '../../../models/product-item';
import { IDispatch } from '../../../store/types/types';
import { Products } from '../../Products/Products';

export const SpecialOffers = (): JSX.Element => {
    let [activeTab, setActiveTab] = useState('novelties');
    const dispatch: IDispatch = useDispatch();

    const newProducts: IProductItem[] = useSelector(selectNewProducts);
    const discountProducts: IProductItem[] = useSelector(selectDiscountProducts);

    useEffect(() => {
        dispatch(getNewProducts());
        dispatch(getDiscountProducts());
    }, []);

    return (
        <div className={s.specialOffers}>
            <div className={s.header}>
                <div className={s.title}>Специальные предложения</div>
                <div className={s.filters}>
                    <button
                        className={activeTab === 'novelties' ? s.active : s.filtersButton}
                        onClick={() => setActiveTab('novelties')}
                    >
                        Новинки
                    </button>
                    <button className={activeTab === 'sales' ? s.active : s.filtersButton} onClick={() => setActiveTab('sales')}>
                        Акции
                    </button>
                    <NavLink to={PagesUrlsEnum.Catalog} className={s.catalogButton}>
                        ВЕСЬ КАТАЛОГ
                    </NavLink>
                </div>
            </div>
            {activeTab === 'novelties' && <Products products={newProducts} />}
            {activeTab === 'sales' && <Products products={discountProducts} />}
        </div>
    );
};
