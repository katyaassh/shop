import { ICartItem } from '../models/cart-item';
import { IProduct } from '../models/product';
import { IProductItem } from '../models/product-item';

export const toCartItem = (product: IProduct | IProductItem): ICartItem => {
    return {
        id: product._id,
        image: product.image,
        amount: product.amount,
        perfumeType: product.perfumeType.type,
        name: product.name,
        fullPrise: product.fullPrise,
        isDiscount: product.isDiscount,
        isNovelty: product.isNovelty,
        count: product.count,
    };
};
