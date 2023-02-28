export const fromQueryString = (query: string) => {
    const paramEntries: [string, string][] = Array.from(new URLSearchParams(query).entries());

    return paramEntries.reduce((acc: { [key: string]: string[] }, [key, value]: [string, string]) => {
        const k: string = value === 'true' ? 'specialOffers' : key;
        const v: string[] = value === 'true' ? [key] : value.split('|');

        acc[k] ? acc[k].push(...v) : (acc[k] = v);
        return acc;
    }, {});
};
