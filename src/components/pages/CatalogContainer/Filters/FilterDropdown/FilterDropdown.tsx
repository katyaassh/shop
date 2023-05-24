import clsx from 'clsx';
import s from './FilterDropdown.module.scss';
import chevron from '../../../../../assets/icons/chevron.svg';
import { ICategoryItem } from '../../../../../models/category-item';
import { ICategory } from '../../../../../models/category';
import React, { useRef, useState } from 'react';
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
    const ref = useRef<HTMLDivElement>(null);
    useClickOutside(ref, () => setIsOpen(false));

    const [isOpen, setIsOpen] = useState(false);

    const onLabelClick = (): void => {
        setIsOpen(!isOpen);
    };

    const onResetFieldClick = (): void => {
        props.setFieldValue(props.category, '');
    };

    return (
        <div ref={ref}>
            <div onClick={onLabelClick} className={clsx(props.activeCount ? s.nameActive : s.name)}>
                {props.label}
                {props.activeCount ? <div className={s.count}>:&nbsp;{props.activeCount}</div> : null}
                <img src={chevron} alt='Chevron' className={s.chevron} />
                <button type='button' onClick={onResetFieldClick} className={s.resetFieldButton}>
                    x
                </button>
            </div>
            {isOpen && (
                <div className={s.activeItems}>
                    {props.options.map((item: ICategoryItem) => (
                        <Checkbox name={props.category} item={item} key={item._id} />
                    ))}
                </div>
            )}
        </div>
    );
};
