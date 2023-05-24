import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IDispatch } from '../../../store/types/types';
import { useEffect, useState } from 'react';
import { addComment, getProduct } from '../../../store/thunks/product.thunks';
import { selectProduct } from '../../../store/selectors/product.selectors';
import { Product } from './Product/Product';
import { ICommentData } from '../../../models/comment-data';
import { setInCart } from '../../../helpers/setInCart';
import { toCartItem } from '../../../helpers/toCartItem';
import { setCount } from '../../../store/actions/cart.actions';

export const ProductContainer = (): JSX.Element => {
    const params = useParams();
    const dispatch: IDispatch = useDispatch();

    const product = useSelector(selectProduct);

    const [isInCart, setIsInCart] = useState(false);
    const [countInCart, setCountInCart] = useState(1);

    const addNewComment = (data: ICommentData): void => {
        dispatch(addComment(params.id, data));
    };

    const onCartClick = (): void => {
        setInCart(toCartItem(product), countInCart);
        dispatch(setCount(countInCart));
        setIsInCart(true);
    };

    useEffect(() => {
        dispatch(getProduct(params.id));
        window.scrollTo(0, 0);
    }, []);

    return (
        <Product
            product={product}
            addNewComment={addNewComment}
            onCartClick={onCartClick}
            setCountInCart={setCountInCart}
            isInCart={isInCart}
        />
    );
};
