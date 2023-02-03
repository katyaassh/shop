import s from './Footer.module.scss';
import clsx from 'clsx';
import { SocialNetworkSidebarItem } from '../SidebarContainer/Sidebar/MainSidebarContent/SocialNetworkSidebarItem/SocialNetworkSidebarItem';
import { ContactsSidebarItem } from '../SidebarContainer/Sidebar/MainSidebarContent/ContactsSidebarItem/ContactsSidebarItem';
import { PhoneNumberSidebar } from '../SidebarContainer/Sidebar/MainSidebarContent/PhoneNumberSidebar/PhoneNumberSidebar';
import plane from '../../assets/icons/plane.svg';

export const Footer = (): JSX.Element => {
    return (
        <div className={s.footerContainer}>
            <div className={clsx('container', s.footer)}>
                <div className={s.topBlock}>
                    <div className={s.leftSection}>
                        <div className={s.links}>
                            <div className={s.link}>ДОСТАВКА</div>
                            <div className={s.link}>ОПЛАТА</div>
                            <div className={s.link}>БРЕНДЫ</div>
                            <div className={s.link}>АКЦИИ</div>
                            <div className={s.link}>О КОМПАНИИ</div>
                            <div className={s.link}>МАГАЗИНЫ</div>
                            <div className={s.link}>КОНТАКТЫ</div>
                        </div>
                        <div className={s.socialNetwork}>
                            <SocialNetworkSidebarItem />
                        </div>
                    </div>
                    <div className={s.middleSection}>
                        <ContactsSidebarItem />
                        <PhoneNumberSidebar />
                    </div>
                    <div className={s.rightSection}>
                        <button className={s.subscribeButton}>
                            Подписаться на рассылку
                            <img src={plane} alt='Plane' className={s.planeIcon} />
                        </button>
                        <div className={s.privacy}>ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</div>
                    </div>
                </div>
                <div className={s.text}>©2020—2023, Camilla de Luxe Новосибирск | Интернет-магазин косметики и парфюмерии</div>
            </div>
        </div>
    );
};
