export const toQueryString = (queryObj: { [key: string]: string | boolean | number | (string | number)[] }): string => {
    const values = Object.entries(queryObj);
    if (!values.length) {
        return '';
    }
    return (
        '?' +
        values
            .reduce((acc: string[], [key, value]) => {
                if (Array.isArray(value)) {
                    acc.push(`${key}=${value.join('|')}`);
                } else {
                    acc.push(`${key}=${value}`);
                }
                return acc;
            }, [])
            .join('&')
    );
};
