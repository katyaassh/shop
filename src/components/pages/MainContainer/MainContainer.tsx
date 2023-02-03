import { Banner } from './Banner/Banner';
import { SpecialOffers } from './SpecialOffers/SpecialOffers';
import { AboutCompany } from './AboutCompany/AboutCompany';
import { IDispatch } from '../../../store/types/types';
import { useDispatch, useSelector } from 'react-redux';
import { IProductItem } from '../../../models/product-item';
import { selectDiscounts, selectNovelties } from '../../../store/selectors/products.selectors';
import { useEffect } from 'react';
import { getSpecialOffers } from '../../../store/thunks/products.thunks';

export const MainContainer = (): JSX.Element => {
    const dispatch: IDispatch = useDispatch();

    const novelties: IProductItem[] = useSelector(selectNovelties);
    const discounts: IProductItem[] = useSelector(selectDiscounts);

    useEffect(() => {
        dispatch(getSpecialOffers());
    }, []);

    return (
        <div className='container'>
            <Banner />
            <SpecialOffers novelties={novelties} discounts={discounts} />
            <AboutCompany />
        </div>
    );
};
