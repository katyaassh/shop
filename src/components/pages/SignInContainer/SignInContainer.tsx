import { SignIn } from './SignIn/SignIn';
import { closeSignIn } from '../../../store/actions/popUp.actions';
import { ISignInData } from '../../../models/signIn-data';
import { authAPI } from '../../../api/auth.api';
import { IDispatch } from '../../../store/types/types';
import { useDispatch } from 'react-redux';
import { saveTokens } from '../../../helpers/saveTokens';
import { useState } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { PagesUrlsEnum } from '../../../enums/pages-urls.enum';

export const SignInContainer = (): JSX.Element => {
    const dispatch: IDispatch = useDispatch();
    const navigate: NavigateFunction = useNavigate();

    const [error, setError] = useState('');

    const onSignUpClick = (): void => {
        navigate(PagesUrlsEnum.SignUp);
        dispatch(closeSignIn());
    };

    const onSignInClick = async (data: ISignInData): Promise<void> => {
        try {
            const response = await authAPI.signIn(data);
            saveTokens(response.data);
            navigate(PagesUrlsEnum.Profile);
        } catch (e: any) {
            setError(e.response.data.message);
        }
    };

    return <SignIn onSignUpClick={onSignUpClick} onSignInClick={onSignInClick} error={error} />;
};
