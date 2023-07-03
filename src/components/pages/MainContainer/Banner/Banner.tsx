import s from './Banner.module.scss';
import perfume from '../../../../assets/image/perfume.png';
import { MainButton } from '../../../common/MainButton/MainButton';

export const Banner = (): JSX.Element => {
    return (
        <div className={s.banner}>
            <div className={s.content}>
                <div className={s.text}>Сделай заказ прямо сейчас и получи скидку 10%</div>
                <MainButton type={'button'}>Заказать</MainButton>
            </div>
            <img src={perfume} alt='Perfume' className={s.image} />
        </div>
    );
};
