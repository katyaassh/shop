import React from 'react';
import user from '../../../../assets/icons/user.svg';
import cart from '../../../../assets/icons/cart.svg';
import box from '../../../../assets/icons/box.svg';
import { SidebarContentIdsEnum } from '../../../../enums/sidebar.enum';
import { MainSidebarItem } from './MainSidebarItem/MainSidebarItem';
import { PhoneNumberSidebar } from './PhoneNumberSidebar/PhoneNumberSidebar';
import { ContactsSidebarItem } from './ContactsSidebarItem/ContactsSidebarItem';
import { SocialNetworkSidebarItem } from './SocialNetworkSidebarItem/SocialNetworkSidebarItem';
import { MainSidebarLinkItem } from './MainSidebarLinkItem/MainSidebarLinkItem';
import s from './MainSidebarContent.module.scss';
import { PagesUrlsEnum } from '../../../../enums/pages-urls.enum';
import { ProfileUrlsEnums } from '../../../../enums/profile-urls.enums';

interface IProps {
    onItemClick: (currentPage: SidebarContentIdsEnum) => void;
}

export const MainSidebarContent = (props: IProps): JSX.Element => {
    return (
        <div className={s.main}>
            <div>
                <MainSidebarItem onItemClick={props.onItemClick} currentPage={SidebarContentIdsEnum.Catalog} title={'Каталог'} />
                <MainSidebarLinkItem title={'Акции'} to={''} />
                <MainSidebarLinkItem title={'Бренды'} to={''} />
                <MainSidebarItem
                    onItemClick={props.onItemClick}
                    currentPage={SidebarContentIdsEnum.HowToBuy}
                    title={'Как купить'}
                />
                <MainSidebarItem onItemClick={props.onItemClick} currentPage={SidebarContentIdsEnum.Company} title={'Компания'} />
                <MainSidebarLinkItem title={'Личный кабинет'} icon={user} to={PagesUrlsEnum.Profile} />
                <MainSidebarLinkItem
                    title={'Корзина'}
                    icon={cart}
                    to={`${PagesUrlsEnum.Profile}/${ProfileUrlsEnums.Cart}`}
                    haveCount={true}
                />
                <MainSidebarLinkItem title={'Заказы'} icon={box} to={`${PagesUrlsEnum.Profile}/${ProfileUrlsEnums.Orders}`} />
                <PhoneNumberSidebar />
            </div>
            <ContactsSidebarItem />
            <SocialNetworkSidebarItem />
        </div>
    );
};
