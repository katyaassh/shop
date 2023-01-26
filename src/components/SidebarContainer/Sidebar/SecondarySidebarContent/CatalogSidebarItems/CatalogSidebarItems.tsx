import React from 'react';
import { IGenderItem } from '../../../../../models/gender-item';
import { useSelector } from 'react-redux';
import { selectGenders } from '../../../../../store/selectors/sidebar.selectors';
import { SecondarySidebarItem } from '../SecondarySidebarItem/SecondarySidebarItem';

export const CatalogSidebarItems = (): JSX.Element => {
    const genders: IGenderItem[] = useSelector(selectGenders);

    return (
        <div>
            {genders.map((gender: IGenderItem) => (
                <SecondarySidebarItem title={gender.type} key={gender._id} />
            ))}
        </div>
    );
};
