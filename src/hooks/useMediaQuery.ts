import { useEffect, useState } from 'react';

export const useMediaQuery = (width: number): boolean => {
    const [isCorrectWidth, setIsCorrectWidth] = useState(false);

    useEffect(() => {
        const tabletMatches = window.matchMedia(`(max-width: ${width}px)`);
        const handleTabletChange = () => {
            setIsCorrectWidth(tabletMatches.matches);
        };
        tabletMatches.addEventListener('change', handleTabletChange);

        return () => {
            tabletMatches.removeEventListener('change', handleTabletChange);
        };
    });
    return isCorrectWidth;
};
