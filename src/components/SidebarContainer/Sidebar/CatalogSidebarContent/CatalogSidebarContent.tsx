import React from "react";
import {IGenderItem} from "../../../../models/gender-item";
import {useSelector} from "react-redux";
import {selectGenders} from "../../../../store/selectors/sidebar.selectors";
import {SidebarItem} from "../SecondarySidebarContent/SidebarItem/SidebarItem";

export const CatalogSidebarContent = (): JSX.Element => {
    const genders: IGenderItem[] = useSelector(selectGenders)

    return <div>
            {genders.map((gender: IGenderItem) => <SidebarItem itemTitle={gender.type} key={gender._id}/>)}
    </div>
}
