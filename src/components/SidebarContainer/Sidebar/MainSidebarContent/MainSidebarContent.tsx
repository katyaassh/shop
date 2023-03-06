import React from 'react';
import user from '../../../../assets/icons/user.svg';
import cart from '../../../../assets/icons/cart.svg';
import like from '../../../../assets/icons/like.svg';
import { SidebarContentIdsEnum } from '../../../../enums/sidebar.enum';
import { MainSidebarItem } from './MainSidebarItem/MainSidebarItem';
import { PhoneNumberSidebar } from './PhoneNumberSidebar/PhoneNumberSidebar';
import { ContactsSidebarItem } from './ContactsSidebarItem/ContactsSidebarItem';
import { SocialNetworkSidebarItem } from './SocialNetworkSidebarItem/SocialNetworkSidebarItem';
import { MainSidebarLinkItem } from './MainSidebarLinkItem/MainSidebarLinkItem';
import s from './MainSidebarContent.module.scss';

interface IProps {
    onItemClick: (currentPage: SidebarContentIdsEnum) => void;
}

export const MainSidebarContent = (props: IProps): JSX.Element => {
    return (
        <div className={s.main}>
            <div>
                <MainSidebarItem onItemClick={props.onItemClick} currentPage={SidebarContentIdsEnum.Catalog} title={'Каталог'} />
                <MainSidebarLinkItem title={'Акции'} />
                <MainSidebarLinkItem title={'Бренды'} />
                <MainSidebarItem
                    onItemClick={props.onItemClick}
                    currentPage={SidebarContentIdsEnum.HowToBuy}
                    title={'Как купить'}
                />
                <MainSidebarItem onItemClick={props.onItemClick} currentPage={SidebarContentIdsEnum.Company} title={'Компания'} />
                <MainSidebarLinkItem title={'Личный кабинет'} icon={user} />
                <MainSidebarLinkItem title={'Корзина'} icon={cart} count={0} />
                <MainSidebarLinkItem title={'Отложенные'} icon={like} count={0} />
                <PhoneNumberSidebar />
            </div>
            <ContactsSidebarItem />
            <SocialNetworkSidebarItem />
        </div>
    );
};
