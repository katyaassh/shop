import React from "react";
import {SidebarBackButton} from "./SidebarBackButton/SidebarBackButton";
import {SidebarTitle} from "./SidebarTitle/SidebarTitle";
import {CatalogSidebarContent} from "../CatalogSidebarContent/CatalogSidebarContent";
import {SidebarContentIdsEnum} from "../../../../enums/sidebar.enum";
import {HowToBuySidebarContent} from "../HowToBuySidebarContent/HowToBuySidebarContent";
import {CompanySidebarContent} from "../CompanySidebarContent/CompanySidebarContent";

interface IProps {
    currentPage: SidebarContentIdsEnum
    onBackClick?: () => void
}

const secondarySidebarTitles: {[key: string]: string} = {
    [SidebarContentIdsEnum.Catalog]: 'Каталог',
    [SidebarContentIdsEnum.HowToBuy]: 'Как купить',
    [SidebarContentIdsEnum.Company]: 'Компания'
}
const secondarySidebarUrls: {[key: string]: string} = {
    [SidebarContentIdsEnum.Catalog]: '/catalog',
    [SidebarContentIdsEnum.HowToBuy]: '/howtobuy',
    [SidebarContentIdsEnum.Company]: '/company'
}

export const SecondarySidebarContent = (props: IProps): JSX.Element => {
    return <div>
        <SidebarBackButton onBackClick={props.onBackClick}/>
        <SidebarTitle to={secondarySidebarUrls[props.currentPage]} title={secondarySidebarTitles[props.currentPage]}/>
        {
            props.currentPage === SidebarContentIdsEnum.Catalog && <CatalogSidebarContent/>
        }
        {
            props.currentPage === SidebarContentIdsEnum.HowToBuy && <HowToBuySidebarContent/>
        }
        {
            props.currentPage === SidebarContentIdsEnum.Company && <CompanySidebarContent/>
        }
    </div>
}
