import phone from '../../../../../assets/icons/phone.svg';
import s from './PhoneNumberSidebar.module.scss';
import chevron from '../../../../../assets/icons/chevron.svg';
import React from 'react';

export const PhoneNumberSidebar = (): JSX.Element => {
    return (
        <div className={s.item}>
            <img src={phone} alt='phone' />
            <div className={s.phone}>
                <div className={s.phoneNumber}>+7 (384) 123 45 67</div>
                <div className={s.phoneText}>Интернет-мазазин</div>
            </div>
            <img src={chevron} alt='Chevron' className={s.chevron} />
        </div>
    );
};
