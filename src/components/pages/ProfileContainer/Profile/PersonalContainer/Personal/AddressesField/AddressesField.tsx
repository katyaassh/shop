import { Input } from '../../../../../../common/Input/Input';
import s from './AddressesField.module.scss';
import { useEffect, useRef, useState } from 'react';
import { useField } from 'formik';
import { useClickOutside } from '../../../../../../../hooks/useClickOutside';

interface IProps {
    onAddressesChange: (value: string) => void;
    suggestions: string[];
}

export const AddressesField = (props: IProps): JSX.Element => {
    const ref = useRef<HTMLDivElement>(null);
    useClickOutside(ref, () => setIsOpen(false));

    const [_, meta, helpers] = useField('address');

    const onAddressChange = (value: string): void => {
        helpers.setValue(value);
        props.onAddressesChange(value);
    };

    const [isOpen, setIsOpen] = useState(false);

    const onAddressClick = (value: string): void => {
        helpers.setValue(value);
        setIsOpen(false);
    };

    useEffect(() => {
        if (props.suggestions.length) {
            setIsOpen(true);
        } else setIsOpen(false);
    }, [props.suggestions]);

    return (
        <div ref={ref}>
            <Input
                label={'Адрес:'}
                name={'address'}
                type={'text'}
                onChange={(e) => onAddressChange(e.target.value)}
                value={meta.value}
                autoComplete={'off'}
            />
            {isOpen && (
                <div className={s.suggestions}>
                    {props.suggestions.map((item) => (
                        <div key={item} className={s.suggestion} onClick={() => onAddressClick(item)}>
                            {item}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
