import clsx from 'clsx';
import s from './FilterDropdown.module.scss';
import chevron from '../../../../../assets/icons/chevron.svg';
import { ICategoryItem } from '../../../../../models/category-item';
import { ICategory } from '../../../../../models/category';
import { MutableRefObject, useRef, useState } from 'react';
import { useClickOutside } from '../../../../../hooks/useClickOutside';
import { Checkbox } from '../../../../common/Checkbox/Checkbox';

interface IProps {
    filter: ICategory;
    setFieldValue: (field: string, value: any) => void;
    label: string;
    category: string;
    options: ICategoryItem[];
    activeCount?: number;
}

export const FilterDropdown = (props: IProps): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);
    const ref: MutableRefObject<any> = useRef();
    useClickOutside(ref, () => setIsOpen(false));

    const onLabelClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div ref={ref}>
            <div onClick={onLabelClick} className={clsx(props.activeCount ? s.nameActive : s.name)}>
                {props.label}
                {props.activeCount ? <div className={s.count}>:&nbsp;{props.activeCount}</div> : null}
                <img src={chevron} alt='Chevron' className={s.chevron} />
                <button type='button' onClick={() => props.setFieldValue(props.category, '')} className={s.resetFieldButton}>
                    x
                </button>
            </div>
            {isOpen && (
                <div className={s.activeItems}>
                    {props.options.map((item: ICategoryItem) => (
                        <div key={item._id} className={s.item}>
                            <Checkbox value={item._id} name={props.category} id={item.type} />
                            <label htmlFor={item.type}>{item.type}</label>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
