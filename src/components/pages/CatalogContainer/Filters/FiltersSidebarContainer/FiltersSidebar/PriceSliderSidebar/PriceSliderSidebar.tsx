import clsx from 'clsx';
import s from './PriceSliderSidebar.module.scss';
import chevron from '../../../../../../../assets/icons/chevron.svg';
import ReactSlider from 'react-slider';
import React from 'react';
import { usePriceSlider } from '../../../../../../../hooks/usePriceSlider';

interface IProps {
    nameMin: string;
    nameMax: string;
}

export const PriceSliderSidebar = ({ nameMin, nameMax }: IProps): JSX.Element => {
    const priceSlider = usePriceSlider(nameMin, nameMax);

    return (
        <div>
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
                    <div className={s.sliderBlock}>
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
                </div>
            )}
        </div>
    );
};
