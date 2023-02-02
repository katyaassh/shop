import { IProductItem } from '../../models/product-item';
import s from './Products.module.scss';
import { ProductItem } from './ProductItem/ProductItem';

interface IProps {
    products: IProductItem[];
}

export const Products = (props: IProps): JSX.Element => {
    return (
        <div className={s.products}>
            {props.products.map((product: IProductItem) => (
                <ProductItem key={product._id} product={product} />
            ))}
        </div>
    );
};
