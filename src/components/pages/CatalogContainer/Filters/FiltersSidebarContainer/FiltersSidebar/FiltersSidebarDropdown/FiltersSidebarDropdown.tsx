import s from './FiltersSidebarDropdown.module.scss';
import chevron from '../../../../../../../assets/icons/chevron.svg';
import { ICategoryItem } from '../../../../../../../models/category-item';
import React, { useState } from 'react';
import { Checkbox } from '../../../../../../common/Checkbox/Checkbox';
import clsx from 'clsx';

interface IProps {
    label: string;
    options: ICategoryItem[];
    category: string;
    activeCount?: number;
    setFieldValue: (field: string, value: any) => void;
}

export const FiltersSidebarDropdown = (props: IProps): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);

    const onLabelClick = (): void => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div className={clsx(props.activeCount ? s.nameActive : s.name)} onClick={onLabelClick}>
                {props.label}
                {props.activeCount && <div className={s.count}>:&nbsp;{props.activeCount}</div>}
                <img src={chevron} alt='Chevron' className={s.chevron} />
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
