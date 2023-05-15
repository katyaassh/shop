import s from './ProductItem.module.scss';
import like from '../../../../assets/icons/like.svg';
import { IProductItem } from '../../../../models/product-item';
import { NavLink } from 'react-router-dom';
import { PagesUrlsEnum } from '../../../../enums/pages-urls.enum';
import { SpecialOffersItems } from '../../SpecialOffersItems/SpecialOffersItems';
import { CartButton } from '../../CartButton/CartButton';
import { StarRating } from '../../StarRatingContainer/StarRating/StarRating';
import { useState } from 'react';
import { setInCart } from '../../../../helpers/setInCart';
import { toCartItem } from '../../../../helpers/toCartItem';
import { IDispatch } from '../../../../store/types/types';
import { useDispatch } from 'react-redux';
import { setCount } from '../../../../store/actions/cart.actions';

interface IProps {
    product: IProductItem;
}

export const ProductItem = (props: IProps): JSX.Element => {
    const dispatch: IDispatch = useDispatch();

    const [isInCart, setIsInCart] = useState(false);

    const [countInCart, setCountInCart] = useState(1);

    const onCartClick = (): void => {
        setInCart(toCartItem(props.product), countInCart);
        dispatch(setCount(countInCart));
        setIsInCart(true);
    };

    return (
        <div className={s.product}>
            <NavLink to={PagesUrlsEnum.Catalog + '/' + props.product._id} className={s.imageContainer}>
                <img src={props.product.image} alt='' className={s.image} />
            </NavLink>
            <img src={like} alt='' className={s.icon} />
            <SpecialOffersItems isNovelty={props.product.isNovelty} isDiscount={props.product.isDiscount} />
            <div className={s.content}>
                <StarRating stars={props.product.stars} />
                <div className={s.name}>{props.product.name}</div>
                <div className={s.type}>{props.product.perfumeType.type}</div>
                <div className={s.price}>{props.product.fullPrise} P</div>
                <div className={s.amountText}>
                    Объем: <span>{props.product.amount}</span> ml
                </div>
                <CartButton
                    onCartClick={onCartClick}
                    setCountInCart={setCountInCart}
                    totalCount={props.product.count}
                    isInCart={isInCart}
                />
            </div>
        </div>
    );
};
