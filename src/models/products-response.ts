import { IProductItem } from './product-item';

export interface IProductsResponse {
    products: [IProductItem];
    count: number;
    pageCount: number;
    error: null;
    page: number;
}
