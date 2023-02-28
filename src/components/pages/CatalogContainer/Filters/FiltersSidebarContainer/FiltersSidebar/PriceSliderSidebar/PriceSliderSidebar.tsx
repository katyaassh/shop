import clsx from 'clsx';
import s from './PriceSliderSidebar.module.scss';
import chevron from '../../../../../../../assets/icons/chevron.svg';
import ReactSlider from 'react-slider';
import { useField } from 'formik';
import { useState } from 'react';

interface IProps {
    nameMin: string;
    nameMax: string;
}

export const PriceSliderSidebar = ({ nameMin, nameMax }: IProps): JSX.Element => {
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

    const onLabelClick = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div>
            <div onClick={onLabelClick} className={clsx(minValue === minPrice && maxValue === maxPrice ? s.name : s.nameActive)}>
                Цена
                <img src={chevron} alt='Chevron' className={s.chevron} />
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
                    <div className={s.sliderBlock}>
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
                </div>
            )}
        </div>
    );
};
