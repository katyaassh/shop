import ReactSlider from 'react-slider';
import s from './PriceSlider.module.scss';
import clsx from 'clsx';
import React, { useRef } from 'react';
import chevron from '../../../../../../assets/icons/chevron.svg';
import { useClickOutside } from '../../../../../../hooks/useClickOutside';
import { usePriceSlider } from '../../../../../../hooks/usePriceSlider';

interface IProps {
    setFieldValue: (field: string, value: number) => void;
    nameMin: string;
    nameMax: string;
}

export const PriceSlider = ({ nameMin, nameMax, ...props }: IProps): JSX.Element => {
    const priceSlider = usePriceSlider(nameMin, nameMax);
    const ref = useRef<HTMLDivElement>(null);
    useClickOutside(ref, () => priceSlider.setIsOpen(false));

    const onResetFieldClick = (): void => {
        props.setFieldValue('min', priceSlider.minPrice);
        props.setFieldValue('max', priceSlider.maxPrice);
    };

    return (
        <div ref={ref}>
            <div
                onClick={priceSlider.onLabelClick}
                className={clsx(
                    priceSlider.minValue === priceSlider.minPrice && priceSlider.maxValue === priceSlider.maxPrice
                        ? s.name
                        : s.nameActive
                )}
            >
                Цена
                <img src={chevron} alt='Chevron' className={s.chevron} />
                <button type='button' className={s.resetFieldButton} onClick={onResetFieldClick}>
                    x
                </button>
            </div>
            {priceSlider.isOpen && (
                <div className={s.priceSlider}>
                    <div className={s.inputs}>
                        <input
                            type='number'
                            className={clsx(s.input, s.minInput)}
                            onBlur={priceSlider.onMinValueBlur}
                            step={100}
                            name={priceSlider.minName}
                            value={priceSlider.minValue}
                            onChange={priceSlider.onMinChange}
                        />
                        <input
                            type='number'
                            className={clsx(s.input, s.maxInput)}
                            onBlur={priceSlider.onMaxValueBlur}
                            step={100}
                            onChange={priceSlider.onMaxChange}
                            value={priceSlider.maxValue}
                            name={priceSlider.maxName}
                        />
                    </div>
                    <ReactSlider
                        className={s.slider}
                        thumbClassName={s.thumb}
                        trackClassName={s.track}
                        value={[priceSlider.minValue || priceSlider.minPrice, priceSlider.maxValue || priceSlider.maxPrice]}
                        onChange={priceSlider.onSliderChange}
                        min={priceSlider.minPrice}
                        max={priceSlider.maxPrice}
                        pearling
                        withTracks={true}
                    />
                    <div className={s.prices}>
                        <span>{priceSlider.minPrice}</span>
                        <span>{priceSlider.maxPrice}</span>
                    </div>
                </div>
            )}
        </div>
    );
};
