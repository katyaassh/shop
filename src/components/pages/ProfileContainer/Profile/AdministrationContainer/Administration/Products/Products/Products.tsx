import { ProductItem } from './ProductItem/ProductItem';
import { Pagination } from '../../../../../../../common/Pagination/Pagination';
import { useSelector } from 'react-redux';
import { selectPage, selectPageCount, selectProducts } from '../../../../../../../../store/selectors/products.selectors';
import { toQueryString } from '../../../../../../../../helpers/to-query-string';
import { NavigateFunction, useNavigate } from 'react-router-dom';

export const Products = (): JSX.Element => {
    const navigate: NavigateFunction = useNavigate();

    const products = useSelector(selectProducts);
    const pageCount = useSelector(selectPageCount);
    const page = useSelector(selectPage);

    const onPageChange = (pageNumber: number): void => {
        navigate(toQueryString({ page: pageNumber }));
    };

    const onEditButtonClick = (id: string): void => {
        navigate(`productForm/${id}`);
    };

    const onCLick = (): void => {
        navigate('productForm');
    };

    return (
        <div>
            <button onClick={onCLick}>+ Добавить новый</button>
            {products.map((product) => (
                <ProductItem product={product} key={product._id} onEditButtonClick={onEditButtonClick} />
            ))}
            <Pagination currentPage={page} pagesCount={pageCount} onPageChange={onPageChange} />
        </div>
    );
};
