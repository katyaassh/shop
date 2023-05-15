import { useState } from 'react';

export const useDebounce = (funk: any) => {
    const [timeOutId, setTimeOutId] = useState<ReturnType<typeof setTimeout> | undefined>(undefined);

    return (...args: any) => {
        clearTimeout(timeOutId);

        const id = setTimeout(() => {
            funk(...args);
        }, 500);

        setTimeOutId(id);

        return () => clearTimeout(timeOutId);
    };
};
