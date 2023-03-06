import { IProductsState } from '../types/products.types';

export let productsState: IProductsState = {
    totalCount: 0,
    pageCount: 0,
    page: 0,
    products: [],
    novelties: [],
    discounts: [],
};
