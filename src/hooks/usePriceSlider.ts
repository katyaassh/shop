import { useField } from 'formik';
import React, { useState } from 'react';

export const usePriceSlider = (nameMin: string, nameMax: string) => {
    const minPrice = 190;
    const maxPrice = 40001;

    const [fieldMin, { value: minValue = minPrice }, metaHelpersMin] = useField(nameMin);
    const [fieldMax, { value: maxValue = maxPrice }, metaHelpersMax] = useField(nameMax);

    const minName = fieldMin.name;
    const maxName = fieldMax.name;

    const onMinValueBlur = (e: React.FormEvent<HTMLInputElement>) => {
        if (minValue < minPrice) {
            metaHelpersMin.setValue(minPrice);
        } else if (minValue > maxValue) {
            metaHelpersMin.setValue(maxValue);
        }
        fieldMin.onBlur(e);
    };

    const onMaxValueBlur = (e: React.FormEvent<HTMLInputElement>) => {
        if (maxValue < minValue) {
            metaHelpersMax.setValue(minValue);
        } else if (maxValue > maxPrice) {
            metaHelpersMax.setValue(maxPrice);
        }
        fieldMax.onBlur(e);
    };

    const onMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        metaHelpersMin.setValue(Number(e.target.value));
        fieldMin.onChange(e);
    };

    const onMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        metaHelpersMax.setValue(Number(e.target.value));
        fieldMax.onChange(e);
    };

    const [isOpen, setIsOpen] = useState(false);

    const onLabelClick = (): void => {
        setIsOpen(!isOpen);
    };

    const onSliderChange = (value: number[]): void => {
        metaHelpersMin.setValue(value[0]);
        metaHelpersMax.setValue(value[1]);
    };

    return {
        minValue,
        maxValue,
        minPrice,
        maxPrice,
        onLabelClick,
        setIsOpen,
        isOpen,
        onMinValueBlur,
        onMaxValueBlur,
        onMinChange,
        onMaxChange,
        minName,
        maxName,
        onSliderChange,
    };
};
