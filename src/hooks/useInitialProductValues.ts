import { useEffect } from 'react';
import { getProduct } from '../store/thunks/product.thunks';
import { IDispatch } from '../store/types/types';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectProduct } from '../store/selectors/product.selectors';

export const useInitialProductValues = () => {
    const dispatch: IDispatch = useDispatch();
    const params = useParams();

    const product = useSelector(selectProduct);

    useEffect(() => {
        dispatch(getProduct(params.id));
    }, []);

    return {
        image: product?.image || '',
        name: product?.name || '',
        amount: product?.amount || 0,
        fullPrise: product?.fullPrise || 0,
        count: product?.count || 0,
        description: product?.description || '',
        isDiscount: product?.isDiscount || false,
        isNovelty: product?.isNovelty || false,
        brand: product?.brand._id || '',
        gender: product?.gender._id || '',
        perfumeType: product?.perfumeType._id || '',
        fragrance: product?.fragrance.map((item) => item._id) || [],
    };
};
