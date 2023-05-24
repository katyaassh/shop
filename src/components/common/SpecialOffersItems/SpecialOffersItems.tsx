import s from './SpecialOffersItems.module.scss';
import clsx from 'clsx';
import { IWithClassName } from '../../../models/withClassName';

interface IProps extends IWithClassName {
    isNovelty?: boolean;
    isDiscount?: boolean;
}

export const SpecialOffersItems = ({ isNovelty, isDiscount, className }: IProps): JSX.Element => {
    return (
        <div className={clsx(s.specialOffersItems, className)}>
            {isNovelty && <div className={s.novelty}>Новинка</div>}
            {isDiscount && <div className={s.sale}>Акция</div>}
        </div>
    );
};
