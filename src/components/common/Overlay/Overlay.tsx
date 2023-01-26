import React, { MutableRefObject, SyntheticEvent, useRef } from 'react';
import { createPortal } from 'react-dom';
import s from './Overlay.module.scss';

interface IProps {
    isOpen: boolean;
    onClose: () => void;
    children: any;
}

export const Overlay = (props: IProps): JSX.Element => {
    const overlayRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

    if (!props.isOpen) {
        return <></>;
    }

    const onClose = (event: SyntheticEvent): void => {
        if (event.target === overlayRef.current) {
            props.onClose();
        }
    };

    return createPortal(
        <div className={s.overlay} onClick={onClose} ref={overlayRef}>
            {props.children}
        </div>,
        document.getElementById('modal-root') as Element
    );
};
