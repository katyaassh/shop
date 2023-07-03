import s from './PriceSorting.module.scss';
import { Field } from 'formik';
import { useRef } from 'react';
import { PriceSortEnums } from '../../../../../../enums/price-sort.enums';
import { useClickOutside } from '../../../../../../hooks/useClickOutside';
import chevron from '../../../../../../assets/icons/chevron.svg';
import { usePriceSorting } from '../../../../../../hooks/usePriceSorting';

interface IProps {
    sort: PriceSortEnums[] | PriceSortEnums;
}

export const PriceSorting = (props: IProps): JSX.Element => {
    const priceSorting = usePriceSorting(props.sort);
    const ref = useRef<HTMLDivElement>(null);
    useClickOutside(ref, () => priceSorting.setIsOpen(false));

    const onItemClick = (): void => {
        priceSorting.setIsOpen(false);
    };

    return (
        <div className={s.priceSorting}>
            <span>Сортировка:</span>
            <div className={s.sort} ref={ref}>
                <div className={s.label} onClick={priceSorting.onLabelClick}>
                    {!priceSorting.sortState && 'нет'}
                    {priceSorting.sortState === PriceSortEnums.Inc && 'сначала недорогие'}
                    {priceSorting.sortState === PriceSortEnums.Dec && 'сначала дорогие'}
                    <img src={chevron} alt='Chevron' className={s.chevron} />
                </div>
                {priceSorting.isOpen && (
                    <div className={s.activeSort}>
                        <div className={s.item} onClick={() => onItemClick()}>
                            <Field name='sort' value='' type='radio' id={'none'} className={s.radio} />
                            <label htmlFor='none'>нет</label>
                        </div>
                        <div className={s.item} onClick={() => onItemClick()}>
                            <Field name='sort' value='inc' type='radio' id={'inc'} className={s.radio} />
                            <label htmlFor='inc'>сначала недорогие</label>
                        </div>
                        <div className={s.item} onClick={() => onItemClick()}>
                            <Field name='sort' value='dec' type='radio' id={'dec'} className={s.radio} />
                            <label htmlFor='dec'>сначала дорогие</label>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
