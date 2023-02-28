import s from './FiltersSidebarDropdown.module.scss';
import chevron from '../../../../../../../assets/icons/chevron.svg';
import { ICategoryItem } from '../../../../../../../models/category-item';
import { useState } from 'react';
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

    return (
        <div>
            <div className={clsx(props.activeCount ? s.nameActive : s.name)} onClick={() => setIsOpen(!isOpen)}>
                {props.label}
                {props.activeCount ? <div className={s.count}>:&nbsp;{props.activeCount}</div> : null}
                <img src={chevron} alt='Chevron' className={s.chevron} />
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
