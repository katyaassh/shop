import s from './SpecialOffersItems.module.scss';
import clsx from 'clsx';

interface IProps {
    isNovelty?: boolean;
    isDiscount?: boolean;
    className?: string;
}

export const SpecialOffersItems = (props: IProps): JSX.Element => {
    return (
        <div className={clsx(s.specialOffersItems, props.className)}>
            {props.isNovelty && <div className={s.novelty}>Новинка</div>}
            {props.isDiscount && <div className={s.sale}>Акция</div>}
        </div>
    );
};
