import { IProduct } from '../../../../../models/product';
import s from './Content.module.scss';
import { SpecialOffersItems } from '../../../../common/SpecialOffersItems/SpecialOffersItems';
import { ICategoryItem } from '../../../../../models/category-item';
import { CartButton } from '../../../../common/CartButton/CartButton';
import defaultImage from '../../../../../assets/image/defaultImg.jpg';

interface IProps {
    product: IProduct;
    onCartClick: () => void;
    setCountInCart: (count: number) => void;
    isInCart: boolean;
}

export const Content = ({ product, onCartClick, setCountInCart, isInCart }: IProps): JSX.Element => {
    const fragrance = product.fragrance
        .map((fragrance: ICategoryItem) => {
            return fragrance.type;
        })
        .join(', ');

    return (
        <div className={s.content}>
            <div className={s.imageBlock}>
                <SpecialOffersItems isNovelty={product.isNovelty} isDiscount={product?.isDiscount} />
                {product.image ? (
                    <img src={product.image} alt='Image' className={s.image} />
                ) : (
                    <img src={defaultImage} alt='Image' className={s.image} />
                )}
            </div>
            <div className={s.rightSection}>
                <div className={s.description}>
                    <p>Характеристики:</p>
                    <div>Бренд: {product.brand.type}</div>
                    <div>Для кого: {product.gender.type}</div>
                    <div>Тип: {product.perfumeType.type}</div>
                    <div>Аромат: {fragrance}</div>
                    <div>Объем: {product.amount} ml</div>
                </div>
                <div>
                    <div className={s.priceBlock}>
                        <div className={s.price}>{product.fullPrise} р</div>
                        <CartButton
                            onCartClick={onCartClick}
                            setCountInCart={setCountInCart}
                            totalCount={product.count}
                            isInCart={isInCart}
                        />
                    </div>
                    <div className={s.count}>В наличии: {product.count}</div>
                </div>
            </div>
        </div>
    );
};
