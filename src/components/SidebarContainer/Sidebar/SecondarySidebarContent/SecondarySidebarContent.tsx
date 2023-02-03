import React from 'react';
import { SidebarBackButton } from './SidebarBackButton/SidebarBackButton';
import { SecondarySidebarTitle } from './SecondarySidebarTitle/SecondarySidebarTitle';
import { CatalogSidebarItems } from './CatalogSidebarItems/CatalogSidebarItems';
import { SidebarContentIdsEnum } from '../../../../enums/sidebar.enum';
import { HowToBuySidebarItems } from './HowToBuySidebarItems/HowToBuySidebarItems';
import { CompanySidebarItems } from './CompanySidebarItems/CompanySidebarItems';
import { PagesUrlsEnum } from '../../../../enums/pages-urls.enum';

interface IProps {
    currentPage: SidebarContentIdsEnum;
    onBackClick?: () => void;
}

const secondarySidebarTitles: { [key: string]: string } = {
    [SidebarContentIdsEnum.Catalog]: 'Каталог',
    [SidebarContentIdsEnum.HowToBuy]: 'Как купить',
    [SidebarContentIdsEnum.Company]: 'Компания',
};
const secondarySidebarUrls: { [key: string]: string } = {
    [SidebarContentIdsEnum.Catalog]: PagesUrlsEnum.Catalog,
    [SidebarContentIdsEnum.HowToBuy]: PagesUrlsEnum.HowToBuy,
    [SidebarContentIdsEnum.Company]: PagesUrlsEnum.Company,
};

export const SecondarySidebarContent = (props: IProps): JSX.Element => {
    return (
        <div>
            <SidebarBackButton onBackClick={props.onBackClick} />
            <SecondarySidebarTitle
                path={secondarySidebarUrls[props.currentPage]}
                title={secondarySidebarTitles[props.currentPage]}
            />
            {props.currentPage === SidebarContentIdsEnum.Catalog && <CatalogSidebarItems />}
            {props.currentPage === SidebarContentIdsEnum.HowToBuy && <HowToBuySidebarItems />}
            {props.currentPage === SidebarContentIdsEnum.Company && <CompanySidebarItems />}
        </div>
    );
};
