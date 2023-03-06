import s from './PriceSortingSidebar.module.scss';
import chevron from '../../../../../../../assets/icons/chevron.svg';
import { Field } from 'formik';
import clsx from 'clsx';
import { PriceSortEnums } from '../../../../../../../enums/price-sort.enums';
import { usePriceSorting } from '../../../../../../../hooks/usePriceSorting';

interface IProps {
    sort: PriceSortEnums[] | PriceSortEnums;
}

export const PriceSortingSidebar = (props: IProps): JSX.Element => {
    const priceSorting = usePriceSorting(props.sort);

    return (
        <div>
            <div className={clsx(props.sort ? s.nameActive : s.name)} onClick={priceSorting.onLabelClick}>
                Сортировка
                <img src={chevron} alt='Chevron' className={s.chevron} />
            </div>
            <div className={s.sort}>
                {priceSorting.isOpen && (
                    <div className={s.activeSort}>
                        <div className={s.item}>
                            <Field name='sort' value='' type='radio' id={'none'} className={s.radio} />
                            <label htmlFor='none'>нет</label>
                        </div>
                        <div className={clsx(priceSorting.sortState === PriceSortEnums.Inc ? s.activeItem : s.item)}>
                            <Field name='sort' value='inc' type='radio' id={'inc'} className={s.radio} />
                            <label htmlFor='inc'>сначала недорогие</label>
                        </div>
                        <div className={clsx(priceSorting.sortState === PriceSortEnums.Dec ? s.activeItem : s.item)}>
                            <Field name='sort' value='dec' type='radio' id={'dec'} className={s.radio} />
                            <label htmlFor='dec'>сначала дорогие</label>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
