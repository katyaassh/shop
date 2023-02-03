import s from './SpecialOffers.module.scss';
import { NavLink } from 'react-router-dom';
import { PagesUrlsEnum } from '../../../../enums/pages-urls.enum';
import { useState } from 'react';
import { Products } from '../../../common/Products/Products';
import { SpecialOffersEnum } from '../../../../enums/special-offers.enum';
import { IProductItem } from '../../../../models/product-item';

interface IProps {
    novelties: IProductItem[];
    discounts: IProductItem[];
}

export const SpecialOffers = (props: IProps): JSX.Element => {
    const [activeTab, setActiveTab] = useState(SpecialOffersEnum.Novelties);

    return (
        <div className={s.specialOffers}>
            <div className={s.header}>
                <div className={s.title}>Специальные предложения</div>
                <div className={s.filters}>
                    <button
                        className={activeTab === SpecialOffersEnum.Novelties ? s.active : s.filtersButton}
                        onClick={() => setActiveTab(SpecialOffersEnum.Novelties)}
                    >
                        Новинки
                    </button>
                    <button
                        className={activeTab === SpecialOffersEnum.Discounts ? s.active : s.filtersButton}
                        onClick={() => setActiveTab(SpecialOffersEnum.Discounts)}
                    >
                        Акции
                    </button>
                    <NavLink to={PagesUrlsEnum.Catalog} className={s.catalogButton}>
                        ВЕСЬ КАТАЛОГ
                    </NavLink>
                </div>
            </div>
            <Products products={activeTab === SpecialOffersEnum.Novelties ? props.novelties : props.discounts} />
        </div>
    );
};
