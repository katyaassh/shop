import s from './SocialNetworkSidebarItem.module.scss';
import vk from '../../../../../assets/icons/vk.svg';
import facebook from '../../../../../assets/icons/facebook.svg';
import whatsapp from '../../../../../assets/icons/whatsapp.svg';
import instagram from '../../../../../assets/icons/instagram.svg';
import React from 'react';

export const SocialNetworkSidebarItem = (): JSX.Element => {
    return (
        <div className={s.social}>
            <img src={vk} alt='VK' className={s.socialIcon} />
            <img src={facebook} alt='Facebook' className={s.socialIcon} />
            <img src={whatsapp} alt='WhatsApp' className={s.socialIcon} />
            <img src={instagram} alt='Instagram' className={s.socialIcon} />
        </div>
    );
};
