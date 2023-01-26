import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsOpenSidebar } from '../../store/selectors/sidebar.selectors';
import { Sidebar } from './Sidebar/Sidebar';
import { Overlay } from '../common/Overlay/Overlay';
import { closeSidebar, setCurrentPageSidebar } from '../../store/actions/sidebar.actions';
import { SidebarContentIdsEnum } from '../../enums/sidebar.enum';
import { getGenders } from '../../store/thunks/sidebar.thunks';
import { IDispatch } from '../../store/types/types';
import { useLocation } from 'react-router-dom';

export const SidebarContainer = (): JSX.Element => {
    const { pathname } = useLocation();

    const isOpen: boolean = useSelector(selectIsOpenSidebar);
    const dispatch: IDispatch = useDispatch();

    useEffect((): void => {
        if (isOpen) {
            dispatch(closeSidebar());
        }
    }, [pathname]);

    useEffect((): void => {
        dispatch(getGenders());
    }, []);

    const onClose = (): void => {
        dispatch(closeSidebar());
    };

    const onItemClick = (currentPage: SidebarContentIdsEnum): void => {
        dispatch(setCurrentPageSidebar(currentPage));
    };

    const onBackClick = (): void => {
        dispatch(setCurrentPageSidebar(SidebarContentIdsEnum.Main));
    };

    return (
        <Overlay isOpen={isOpen} onClose={onClose}>
            <Sidebar onItemClick={onItemClick} onBackClick={onBackClick} />
        </Overlay>
    );
};
