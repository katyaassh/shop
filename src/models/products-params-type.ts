export type ProductsParams = Partial<{
    gender: string[];
    fragrance: string[];
    perfumeType: string[];
    brand: string[];
    isNovelty: boolean;
    isDiscount: boolean;
    sort: 'dec' | 'inc';
    find: string;
    page: number;
    min: number;
    max: number;
}>;
