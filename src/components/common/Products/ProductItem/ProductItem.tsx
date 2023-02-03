import s from './ProductItem.module.scss';
import like from '../../../../assets/icons/like.svg';
import { Counter } from '../../Counter/Counter';
import { IProductItem } from '../../../../models/product-item';
import { StarRating } from '../../StarRating/StarRating';

interface IProps {
    product: IProductItem;
}

export const ProductItem = (props: IProps): JSX.Element => {
    return (
        <div className={s.product}>
            <img src={props.product.image} alt='' className={s.image} />
            <img src={like} alt='' className={s.icon} />
            <div className={s.iconSection}>
                {props.product.isNovelty && <div className={s.novelty}>Новинка</div>}
                {props.product.isDiscount && <div className={s.sale}>Акция</div>}
            </div>
            <div className={s.content}>
                <StarRating rating={props.product.stars} />
                <div className={s.name}>{props.product.name}</div>
                <div className={s.type}>{props.product.perfumeType.type}</div>
                <div className={s.price}>{props.product.fullPrise} P</div>
                <div className={s.amountText}>
                    Объем: <span>{props.product.amount}</span> ml
                </div>
                <div className={s.offer}>
                    <Counter />
                    <button className={s.cartButton}>В корзину</button>
                </div>
            </div>
        </div>
    );
};
