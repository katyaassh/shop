import { IProductState } from '../types/product.types';

export const productState: IProductState = {
    product: {
        _id: '',
        count: 0,
        stars: 0,
        description: '',
        isDiscount: false,
        isNovelty: false,
        commentsCount: 0,
        name: '',
        amount: 0,
        fullPrise: 0,
        image: '',
        fragrance: [],
        perfumeType: {
            _id: '',
            type: '',
        },
        brand: {
            _id: '',
            type: '',
        },
        gender: {
            _id: '',
            type: '',
        },
        comments: [],
    },
};
