import s from './Cart.module.scss';
import { CartItem } from './CartItem/CartItem';
import { IProductInCart } from '../../../../../../models/productInCart';
import { ICartItem } from '../../../../../../models/cart-item';
import { MainButton } from '../../../../../common/MainButton/MainButton';

interface IProps {
    cart: IProductInCart[] | null;
    setCountInCart: (product: ICartItem, count: number) => void;
    onClearCartClick: () => void;
    onClearItemClick: (id: string) => void;
    fullPrise: number;
    onOrderClick: () => void;
}

export const Cart = ({
    cart,
    setCountInCart,
    onClearCartClick,
    onClearItemClick,
    fullPrise,
    onOrderClick,
}: IProps): JSX.Element => {
    return (
        <div>
            <h2 className={s.title}>Корзина</h2>
            <div className={s.header}>
                <div className={s.headerText}>Товары в корзине</div>
                <button className={s.clearButton} onClick={onClearCartClick}>
                    ОЧИСТИТЬ X
                </button>
            </div>
            {cart && cart.length ? (
                <div className={s.content}>
                    {cart.map((product) => (
                        <CartItem
                            product={product}
                            key={product.product.id}
                            setCountInCart={setCountInCart}
                            onClearItemClick={onClearItemClick}
                        />
                    ))}
                    <div className={s.fullPrise}>Итого: {fullPrise} P</div>
                    <MainButton title={'Перейти к оформлению'} onClick={onOrderClick} />
                </div>
            ) : (
                <div className={s.emptyCart}>Коризина пуста</div>
            )}
        </div>
    );
};
