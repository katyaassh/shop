import { AxiosResponse } from 'axios';
import { IProductsResponse } from '../models/products-response';
import { IProductResponse } from '../models/product-response';
import { ICommentData } from '../models/comment-data';
import { ICommentResponse } from '../models/comment-response';
import { instance } from './instance';
import { instanceWithCredentials } from './instance-with-credentials';
import { IAddProductResponse } from '../models/addProduct-response';
import { IUpdateProductResponse } from '../models/updateProduct-response';
import { IDeleteProductResponse } from '../models/deleteProduct-response';

export const productsAPI = {
    getProducts(query = ''): Promise<IProductsResponse> {
        return instance.get('products/' + query).then((response: AxiosResponse<IProductsResponse>): IProductsResponse => {
            return response.data;
        });
    },
    getProduct(id = ''): Promise<IProductResponse> {
        return instance.get('products/' + id).then((response: AxiosResponse<IProductResponse>): IProductResponse => {
            return response.data;
        });
    },
    addComment(id = '', data: ICommentData = { stars: 5 }): Promise<ICommentResponse> {
        return instance.post('products/' + id, data).then((response: AxiosResponse<ICommentResponse>): ICommentResponse => {
            return response.data;
        });
    },
    addProduct(data: FormData): Promise<IAddProductResponse> {
        return instanceWithCredentials
            .post('products/', data, {
                headers: { 'Content-Type': 'multipart/form-data;boundary=boundary' },
            })
            .then((response: AxiosResponse<IAddProductResponse>): IAddProductResponse => {
                return response.data;
            });
    },
    updateProduct(data: FormData, id: string | undefined): Promise<IUpdateProductResponse> {
        return instanceWithCredentials
            .put('products/' + id, data, {
                headers: { 'Content-Type': 'multipart/form-data;boundary=boundary' },
            })
            .then((response: AxiosResponse<IUpdateProductResponse>): IUpdateProductResponse => {
                return response.data;
            });
    },
    deleteProduct(id = ''): Promise<IDeleteProductResponse> {
        return instanceWithCredentials
            .delete('products/' + id)
            .then((response: AxiosResponse<IDeleteProductResponse>): IDeleteProductResponse => {
                return response.data;
            });
    },
};
