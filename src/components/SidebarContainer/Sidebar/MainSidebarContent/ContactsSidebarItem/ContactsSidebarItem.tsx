import s from './ContactsSidebarItem.module.scss';
import place from '../../../../../assets/icons/place.svg';
import mail from '../../../../../assets/icons/mail.svg';
import React from 'react';

export const ContactsSidebarItem = (): JSX.Element => {
    return (
        <div className={s.contacts}>
            <div className={s.contactText}>Контактная информация</div>
            <div className={s.contactItem}>
                <img src={place} alt='Place' className={s.contactIcon} />
                <div className={s.address}>г. Новосибирск, Вокзальная магистраль, 10</div>
            </div>
            <div className={s.contactItem}>
                <img src={mail} alt='Mail' className={s.contactIcon} />
                <div className={s.address}>info@camilladeluxe.ru</div>
            </div>
        </div>
    );
};
