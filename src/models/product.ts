import { ICategoryItem } from './category-item';
import { ICommentsType } from './comments-type';

export interface IProduct {
    _id: string;
    count: number;
    stars: number;
    description: string;
    isDiscount: boolean;
    isNovelty: boolean;
    commentsCount: number;
    name: string;
    amount: number;
    fullPrise: number;
    image: string;
    fragrance: ICategoryItem[];
    perfumeType: ICategoryItem;
    brand: ICategoryItem;
    gender: ICategoryItem;
    comments: ICommentsType[];
}
