import { NavigateFunction, useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { IDispatch } from '../../../../../../store/types/types';
import { useDispatch, useSelector } from 'react-redux';
import { getOrder } from '../../../../../../store/thunks/orders.thunks';
import { selectOrder } from '../../../../../../store/selectors/orders.selectors';
import { Order } from './Order/Order';
import { INewProductInOrder } from '../../../../../../models/newProductsInOrder';
import { PagesUrlsEnum } from '../../../../../../enums/pages-urls.enum';

export const OrderContainer = (): JSX.Element => {
    const params = useParams();
    const dispatch: IDispatch = useDispatch();
    const navigate: NavigateFunction = useNavigate();

    const order = useSelector(selectOrder);

    const newProducts: INewProductInOrder[] = order.products.reduce((result: INewProductInOrder[], product) => {
        const productInOrder = result.find((newProduct) => newProduct.product._id === product._id);

        if (!productInOrder) {
            result.push({ product: product, count: 1 });
        } else {
            result.forEach((newProduct) => newProduct.product._id === product._id && newProduct.count++);
        }
        return result;
    }, []);

    const onProductClick = (id: string): void => {
        navigate(PagesUrlsEnum.Catalog + '/' + id);
    };

    useEffect(() => {
        dispatch(getOrder(params.id));
    }, []);

    return <Order order={order} products={newProducts} onProductClick={onProductClick} />;
};
