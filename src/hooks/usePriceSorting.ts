import { useEffect, useState } from 'react';
import { PriceSortEnums } from '../enums/price-sort.enums';

export const usePriceSorting = (sort: PriceSortEnums[] | PriceSortEnums) => {
    const [isOpen, setIsOpen] = useState(false);

    const onLabelClick = (): void => {
        setIsOpen(!isOpen);
    };

    const [sortState, setSortState] = useState<PriceSortEnums>(PriceSortEnums.None);

    useEffect(() => {
        const sortName = sort || PriceSortEnums.None;

        setSortState(typeof sortName === 'string' ? sortName : sortName[0]);
    }, [sort]);

    return { sortState, onLabelClick, setIsOpen, isOpen };
};
