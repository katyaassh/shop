import { ICategoryItem } from './category-item';

export interface IProductInOrder {
    fullPrise: number;
    image: string;
    isDiscount: boolean;
    isNovelty: boolean;
    name: string;
    perfumeType: ICategoryItem;
    _id: string;
}
