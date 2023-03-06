import React, { useEffect } from 'react';

export const useClickOutside = (ref: React.RefObject<HTMLDivElement>, callbackFn: () => void): void => {
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent): void => {
            if (ref.current && !ref.current.contains(event.target as Node) && callbackFn) {
                callbackFn();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return (): void => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref]);
};
