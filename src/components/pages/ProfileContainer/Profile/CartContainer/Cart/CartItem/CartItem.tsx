import s from './CartItem.module.scss';
import { SpecialOffersItems } from '../../../../../../common/SpecialOffersItems/SpecialOffersItems';
import { Counter } from '../../../../../../common/Counter/Counter';
import { NavLink } from 'react-router-dom';
import { PagesUrlsEnum } from '../../../../../../../enums/pages-urls.enum';
import { IProductInCart } from '../../../../../../../models/productInCart';
import { ICartItem } from '../../../../../../../models/cart-item';

interface IProps {
    product: IProductInCart;
    key: string;
    setCountInCart: (product: ICartItem, count: number) => void;
    onClearItemClick: (id: string) => void;
}

export const CartItem = ({ product, setCountInCart, onClearItemClick }: IProps): JSX.Element => {
    const onCounterClick = (count: number): void => {
        setCountInCart(product.product, count);
    };

    const onClick = (): void => {
        onClearItemClick(product.product.id);
    };

    const fullPrise = product.product.fullPrise * product.count;

    return (
        <div className={s.cardItem}>
            <div className={s.content}>
                <SpecialOffersItems
                    isDiscount={product.product.isDiscount}
                    isNovelty={product.product.isNovelty}
                    className={s.specialOffersItems}
                />
                <div className={s.leftSection}>
                    <NavLink to={PagesUrlsEnum.Catalog + '/' + product.product.id}>
                        <img src={product.product.image} alt='Image' className={s.image} />
                    </NavLink>
                    <div className={s.info}>
                        <div className={s.name}>{product.product.name}</div>
                        <div className={s.text}>{product.product.perfumeType}</div>
                        <div className={s.text}>Объем: {product.product.amount}ml</div>
                    </div>
                </div>
                <div className={s.rightSection}>
                    <div>
                        <Counter
                            className={s.counter}
                            countInCart={product.count}
                            setCountInCart={onCounterClick}
                            inCartItem={true}
                            totalCount={product.product.count}
                        />
                        <div className={s.prise}>{product.product.fullPrise} Р/шт</div>
                    </div>
                    <div className={s.fullPrise}>{fullPrise} Р</div>
                </div>
            </div>
            <button className={s.clearButton} onClick={onClick}>
                X
            </button>
        </div>
    );
};
