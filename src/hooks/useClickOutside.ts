import { MutableRefObject, useEffect } from 'react';

export const useClickOutside = (ref: MutableRefObject<any>, callbackFn: () => void) => {
    useEffect(() => {
        function handleClickOutside(event: any) {
            if (ref.current && !ref.current.contains(event.target) && callbackFn) {
                callbackFn();
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref]);
};
