import { IPerfumeType } from './perfume-type';
import { ICommentsType } from './comments-type';

export interface IProductItem {
    _id: string;
    isDiscount: boolean;
    isNovelty: boolean;
    name: string;
    fullPrise: number;
    perfumeType: IPerfumeType;
    image: string;
    amount: number;
    brand: string;
    comments: ICommentsType[];
    commentsCount: number;
    description: string;
    gender: string;
    stars: number;
}
