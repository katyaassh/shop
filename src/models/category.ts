import { ICategoryItem } from './category-item';

export interface ICategory {
    category: string;
    name: string;
    items: ICategoryItem[];
}
