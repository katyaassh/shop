import React from 'react';
import { SecondarySidebarItem } from '../SecondarySidebarItem/SecondarySidebarItem';

export const CompanySidebarItems = (): JSX.Element => {
    return (
        <>
            <SecondarySidebarItem title='О компании' />
            <SecondarySidebarItem title='Новости' />
            <SecondarySidebarItem title='Контакты' />
        </>
    );
};
