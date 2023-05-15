import { IProductItem } from '../../../../../../../../../models/product-item';
import s from './ProductItem.module.scss';
import { productsAPI } from '../../../../../../../../../api/products.api';

interface IProps {
    product: IProductItem;
    onEditButtonClick: (id: string) => void;
}

export const ProductItem = ({ product, onEditButtonClick }: IProps): JSX.Element => {
    const onDeleteClick = (id: string): void => {
        productsAPI.deleteProduct(id).then((response) => {
            alert('Продукт удален!');
            return response;
        });
    };

    return (
        <div className={s.product}>
            <div className={s.info}>
                <img src={product.image} alt='Image' />
                <div className={s.name}>{product.name}</div>
            </div>
            <div className={s.buttons}>
                <button className={s.button} onClick={() => onEditButtonClick(product._id)}>
                    Редактировать
                </button>
                <button className={s.button} onClick={() => onDeleteClick(product._id)}>
                    Удалить
                </button>
            </div>
        </div>
    );
};
