import { INewProductInOrder } from '../../../../../../../../models/newProductsInOrder';
import s from './ProductInOrder.module.scss';
import { SpecialOffersItems } from '../../../../../../../common/SpecialOffersItems/SpecialOffersItems';

interface IProps {
    product: INewProductInOrder;
    key: string;
    onProductClick: (id: string) => void;
}

export const ProductInOrder = ({ product, onProductClick }: IProps): JSX.Element => {
    const fullPrise = product.count * product.product.fullPrise;

    const onClick = (): void => {
        onProductClick(product.product._id);
    };

    return (
        <div className={s.productInOrder} onClick={onClick}>
            <SpecialOffersItems isNovelty={product.product.isNovelty} isDiscount={product.product.isDiscount} />
            <img src={product.product.image} alt='Image' className={s.image} />
            <div className={s.info}>
                <div className={s.name}>{product.product.name}</div>
                <div className={s.perfumeType}>{product.product.perfumeType.type}</div>
                <div>{product.count} шт</div>
                <div className={s.prise}>{fullPrise} Р</div>
            </div>
        </div>
    );
};
