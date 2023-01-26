import React from 'react';
import { SecondarySidebarItem } from '../SecondarySidebarItem/SecondarySidebarItem';

export const HowToBuySidebarItems = (): JSX.Element => {
    return (
        <>
            <SecondarySidebarItem title='Условия оплаты' />
            <SecondarySidebarItem title='Условия доставки' />
        </>
    );
};
