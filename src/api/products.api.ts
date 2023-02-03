import axios, { AxiosResponse } from 'axios';
import { IProductsResponse } from '../models/products-response';
import { toQueryString } from '../helpers/to-query-string';

const instance = axios.create({
    baseURL: 'http://localhost:8000/api/products/',
    withCredentials: true,
});

type ProductsParams = Partial<{
    gender: string;
    fragrance: string[];
    perfumeType: string;
    brand: string;
    isNovelty: boolean;
    isDiscount: boolean;
    sort: 'dec' | 'inc';
    find: string;
    page: number;
}>;

export const productsAPI = {
    getProducts(params: ProductsParams = {}): Promise<IProductsResponse> {
        const query = toQueryString(params);
        return instance.get(query).then((response: AxiosResponse<IProductsResponse>): IProductsResponse => {
            return response.data;
        });
    },
};
