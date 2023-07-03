import { ICommentsType } from './comments-type';
import { ICategoryItem } from './category-item';

export interface IProductItem {
    _id: string;
    isDiscount: boolean;
    isNovelty: boolean;
    name: string;
    fullPrise: number;
    perfumeType: ICategoryItem;
    image: string;
    amount: number;
    brand: string;
    comments: ICommentsType[];
    commentsCount: number;
    description: string;
    gender: string;
    stars: number;
    count: number;
}
