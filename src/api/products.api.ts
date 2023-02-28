import axios, { AxiosResponse } from 'axios';
import { IProductsResponse } from '../models/products-response';

const instance = axios.create({
    baseURL: 'http://localhost:8000/api/products/',
    withCredentials: true,
});

export const productsAPI = {
    getProducts(query = ''): Promise<IProductsResponse> {
        return instance.get(query).then((response: AxiosResponse<IProductsResponse>): IProductsResponse => {
            return response.data;
        });
    },
};
