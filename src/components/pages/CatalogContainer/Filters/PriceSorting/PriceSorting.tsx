import s from './PriceSorting.module.scss';
import { Field } from 'formik';
import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { PriceSortEnums } from '../../../../../enums/price-sort.enums';
import { useClickOutside } from '../../../../../hooks/useClickOutside';
import chevron from '../../../../../assets/icons/chevron.svg';

interface IProps {
    sort: string[] | string;
}

export const PriceSorting = (props: IProps): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);

    const onLabelClick = () => {
        setIsOpen(!isOpen);
    };

    const onItemClick = () => {
        setIsOpen(false);
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

    const ref: MutableRefObject<any> = useRef();
    useClickOutside(ref, () => setIsOpen(false));

    return (
        <div className={s.priceSorting}>
            <span>Сортировка:</span>
            <div className={s.sort} ref={ref}>
                <div className={s.label} onClick={onLabelClick}>
                    {!activeTab && 'нет'}
                    {activeTab === PriceSortEnums.Inc && 'сначала недорогие'}
                    {activeTab === PriceSortEnums.Dec && 'сначала дорогие'}
                    <img src={chevron} alt='Chevron' className={s.chevron} />
                </div>
                {isOpen && (
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
