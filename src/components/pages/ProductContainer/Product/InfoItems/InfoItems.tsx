import calendar from '../../../../../assets/icons/calendar.svg';
import gift from '../../../../../assets/icons/gift.svg';
import wallet from '../../../../../assets/icons/wallet.svg';
import original from '../../../../../assets/icons/original.svg';
import s from './InfoItems.module.scss';

export const InfoItems = (): JSX.Element => {
    return (
        <div className={s.infoItems}>
            <div className={s.item}>
                <img src={wallet} alt='Wallet' className={s.image} />
                <p>
                    Оплата <span className={s.boldText}>при получении заказа</span>
                </p>
            </div>
            <div className={s.item}>
                <img src={gift} alt='Gift' className={s.image} />
                <p>
                    Сережки со <span className={s.boldText}>Swarovski</span> в подарок
                </p>
            </div>
            <div className={s.item}>
                <img src={calendar} alt='Calendar' className={s.image} />
                <p>
                    Быстрая и <span className={s.boldText}>бесплатная доставка</span>
                </p>
            </div>
            <div className={s.item}>
                <img src={original} alt='Original' className={s.image} />
                <p>
                    100% <span className={s.boldText}>гарантия подлинности</span>
                </p>
            </div>
        </div>
    );
};
