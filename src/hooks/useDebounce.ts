import { useState } from 'react';

export const useDebounce = (callback: (...args: any) => any): ((...args: any) => () => void) => {
    const [timeOutId, setTimeOutId] = useState<ReturnType<typeof setTimeout> | undefined>(undefined);

    return (...args: any) => {
        clearTimeout(timeOutId);

        const id = setTimeout(() => {
            callback(...args);
        }, 500);

        setTimeOutId(id);

        return () => clearTimeout(timeOutId);
    };
};
