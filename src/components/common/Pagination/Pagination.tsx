import s from './Pagination.module.scss';
import clsx from 'clsx';
import { useEffect } from 'react';

interface IProps {
    currentPage: number;
    pagesCount: number;
    onPageChange: (page: number) => void;
}

export const Pagination = (props: IProps): JSX.Element => {
    const start = props.currentPage <= 4;
    const middle = props.currentPage > 4 && props.currentPage <= props.pagesCount - 4;
    const end = props.currentPage > props.pagesCount - 4;
    const isVisible = props.pagesCount > 6;

    const pagesCounter = (): number[] => {
        if (start) {
            return Array.from({ length: isVisible ? 5 : props.pagesCount }, (v, i) => i + 1);
        } else if (middle) {
            return [
                props.currentPage - 2,
                props.currentPage - 1,
                props.currentPage,
                props.currentPage + 1,
                props.currentPage + 2,
            ];
        } else if (end) {
            return [props.pagesCount - 4, props.pagesCount - 3, props.pagesCount - 2, props.pagesCount - 1, props.pagesCount];
        }
        return [];
    };

    const pages: number[] = pagesCounter();

    const onPageClick = (page: number): void => {
        props.onPageChange(page);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [props.currentPage]);

    return (
        <div className={s.pagination}>
            {(middle || end) && isVisible && (
                <div className={s.sideSection}>
                    <span onClick={() => onPageClick(1)} className={s.item}>
                        1
                    </span>
                    <span>...</span>
                </div>
            )}
            {pages.map((pageNumber) => (
                <div
                    key={pageNumber}
                    onClick={() => onPageClick(pageNumber)}
                    className={clsx(pageNumber === props.currentPage ? s.activeItem : s.item)}
                >
                    {pageNumber}
                </div>
            ))}
            {(start || middle) && isVisible && (
                <div className={s.sideSection}>
                    <span>...</span>
                    <span onClick={() => onPageClick(props.pagesCount)} className={s.item}>
                        {props.pagesCount}
                    </span>
                </div>
            )}
        </div>
    );
};
