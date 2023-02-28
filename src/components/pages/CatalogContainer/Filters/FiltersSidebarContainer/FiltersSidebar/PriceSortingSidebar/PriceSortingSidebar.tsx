import s from './PriceSortingSidebar.module.scss';
import chevron from '../../../../../../../assets/icons/chevron.svg';
import { Field } from 'formik';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { PriceSortEnums } from '../../../../../../../enums/price-sort.enums';

interface IProps {
    sort: string[] | string;
}

export const PriceSortingSidebar = (props: IProps): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);

    const onLabelClick = () => {
        setIsOpen(!isOpen);
    };

    const [activeTab, setActiveTab] = useState('');

    useEffect(() => {
        if (props.sort) {
            if (typeof props.sort !== 'string') {
                setActiveTab(props.sort.join(''));
            }
            if (typeof props.sort === 'string') {
                setActiveTab(props.sort);
            }
        } else setActiveTab('');
    }, [props.sort]);

    return (
        <div>
            <div className={clsx(props.sort ? s.nameActive : s.name)} onClick={onLabelClick}>
                Сортировка
                <img src={chevron} alt='Chevron' className={s.chevron} />
            </div>
            <div className={s.sort}>
                {isOpen && (
                    <div className={s.activeSort}>
                        <div className={s.item}>
                            <Field name='sort' value='' type='radio' id={'none'} className={s.radio} />
                            <label htmlFor='none'>нет</label>
                        </div>
                        <div className={clsx(activeTab === PriceSortEnums.Inc ? s.activeItem : s.item)}>
                            <Field name='sort' value='inc' type='radio' id={'inc'} className={s.radio} />
                            <label htmlFor='inc'>сначала недорогие</label>
                        </div>
                        <div className={clsx(activeTab === PriceSortEnums.Dec ? s.activeItem : s.item)}>
                            <Field name='sort' value='dec' type='radio' id={'dec'} className={s.radio} />
                            <label htmlFor='dec'>сначала дорогие</label>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
