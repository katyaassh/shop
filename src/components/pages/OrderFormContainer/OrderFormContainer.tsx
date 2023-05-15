import { OrderForm } from './OrderForm/OrderForm';
import { useEffect, useState } from 'react';
import { IDispatch } from '../../../store/types/types';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../../store/thunks/user.thunks';
import { selectUser } from '../../../store/selectors/user.selectors';
import { getCart } from '../../../helpers/getCart';
import { IOrderValues } from '../../../models/order-values';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { PagesUrlsEnum } from '../../../enums/pages-urls.enum';
import { IProductInCart } from '../../../models/productInCart';
import { ordersApi } from '../../../api/orders.api';
import { setCount } from '../../../store/actions/cart.actions';
import { ProfileUrlsEnums } from '../../../enums/profile-urls.enums';

export const OrderFormContainer = (): JSX.Element => {
    const dispatch: IDispatch = useDispatch();
    const navigate: NavigateFunction = useNavigate();

    const [error, setError] = useState('');

    const user = useSelector(selectUser);

    useEffect((): void => {
        window.scrollTo(0, 0);
        dispatch(getUser());
    }, []);

    const cart = getCart();

    let productIds: string[] = [];
    cart &&
        cart.forEach((product: IProductInCart) => {
            for (let i = 0; i < product.count; i++) productIds.push(product.product.id);
        });

    const onSubmit = (values: IOrderValues): void => {
        ordersApi
            .addOrder({ products: productIds, address: user.address, ...values })
            .then((response) => {
                localStorage.removeItem('cart');
                dispatch(setCount(-1));
                navigate(PagesUrlsEnum.Profile + '/' + ProfileUrlsEnums.Orders + '/' + response.orderId);
            })
            .catch((error) => {
                setError(error.response.data.message);
            });
    };

    const onChangeClick = (): void => {
        navigate(PagesUrlsEnum.Profile);
    };

    return <OrderForm user={user} onSubmit={onSubmit} onChangeClick={onChangeClick} error={error} />;
};
