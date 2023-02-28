import ReactSlider from 'react-slider';
import s from './PriceSlider.module.scss';
import clsx from 'clsx';
import { MutableRefObject, useRef, useState } from 'react';
import chevron from '../../../../../../assets/icons/chevron.svg';
import { useClickOutside } from '../../../../../../hooks/useClickOutside';
import { useField } from 'formik';

interface IProps {
    setFieldValue: (field: string, value: number) => void;
    nameMin: string;
    nameMax: string;
}

export const PriceSlider = ({ nameMin, nameMax, ...props }: IProps): JSX.Element => {
    const minPrice = 190;
    const maxPrice = 40001;

    const [fieldMin, { value: minValue = minPrice }, metaHelpersMin] = useField(nameMin);
    const [fieldMax, { value: maxValue = maxPrice }, metaHelpersMax] = useField(nameMax);

    const handleMinValueBlur = (e: any) => {
        if (minValue < minPrice) {
            metaHelpersMin.setValue(minPrice);
        } else if (minValue > maxValue) {
            metaHelpersMin.setValue(maxValue);
        }
        fieldMin.onBlur(e);
    };

    const handleMaxValueBlur = (e: any) => {
        if (maxValue < minValue) {
            metaHelpersMax.setValue(minValue);
        } else if (maxValue > maxPrice) {
            metaHelpersMax.setValue(maxPrice);
        }
        fieldMax.onBlur(e);
    };

    const handleMinChange = (e: any) => {
        metaHelpersMin.setValue(Number(e.target.value));
        fieldMin.onChange(e);
    };

    const handleMaxChange = (e: any) => {
        metaHelpersMax.setValue(Number(e.target.value));
        fieldMax.onChange(e);
    };

    const [isOpen, setIsOpen] = useState(false);
    const ref: MutableRefObject<any> = useRef();
    useClickOutside(ref, () => setIsOpen(false));

    const onLabelClick = () => {
        setIsOpen(!isOpen);
    };

    const onResetFieldClick = () => {
        props.setFieldValue('min', minPrice);
        props.setFieldValue('max', maxPrice);
    };

    return (
        <div ref={ref}>
            <div onClick={onLabelClick} className={clsx(minValue === minPrice && maxValue === maxPrice ? s.name : s.nameActive)}>
                Цена
                <img src={chevron} alt='Chevron' className={s.chevron} />
                <button type='button' className={s.resetFieldButton} onClick={onResetFieldClick}>
                    x
                </button>
            </div>
            {isOpen && (
                <div className={s.priceSlider}>
                    <div className={s.inputs}>
                        <input
                            type='number'
                            className={clsx(s.input, s.minInput)}
                            onBlur={handleMinValueBlur}
                            step={100}
                            name={fieldMin.name}
                            value={minValue}
                            onChange={handleMinChange}
                        />
                        <input
                            type='number'
                            className={clsx(s.input, s.maxInput)}
                            onBlur={handleMaxValueBlur}
                            step={100}
                            onChange={handleMaxChange}
                            value={maxValue}
                            name={fieldMax.name}
                        />
                    </div>
                    <ReactSlider
                        className={s.slider}
                        thumbClassName={s.thumb}
                        trackClassName={s.track}
                        value={[minValue || minPrice, maxValue || maxPrice]}
                        onChange={(value) => {
                            metaHelpersMin.setValue(value[0]);
                            metaHelpersMax.setValue(value[1]);
                        }}
                        min={minPrice}
                        max={maxPrice}
                        pearling
                        withTracks={true}
                    />
                    <div className={s.prices}>
                        <span>{minPrice}</span>
                        <span>{maxPrice}</span>
                    </div>
                </div>
            )}
        </div>
    );
};
