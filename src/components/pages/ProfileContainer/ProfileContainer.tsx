import { Profile } from './Profile/Profile';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { PagesUrlsEnum } from '../../../enums/pages-urls.enum';
import { useEffect } from 'react';
import { getUser } from '../../../store/thunks/user.thunks';
import { IDispatch } from '../../../store/types/types';
import { useDispatch } from 'react-redux';
import { clearTokens } from '../../../helpers/clearTokens';

export const ProfileContainer = (): JSX.Element => {
    const navigate: NavigateFunction = useNavigate();
    const dispatch: IDispatch = useDispatch();

    const onLogOutClick = (): void => {
        clearTokens();
        navigate(PagesUrlsEnum.Main);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(getUser());
    }, []);

    return <Profile onLogOutClick={onLogOutClick} />;
};
