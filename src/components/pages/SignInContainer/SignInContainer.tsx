import { SignIn } from './SignIn/SignIn';
import { closeSignIn } from '../../../store/actions/popUp.actions';
import { ISignInData } from '../../../models/signIn-data';
import { authAPI } from '../../../api/auth.api';
import { IDispatch } from '../../../store/types/types';
import { useDispatch } from 'react-redux';
import { saveTokens } from '../../../helpers/saveTokens';
import { useState } from 'react';

export const SignInContainer = (): JSX.Element => {
    const dispatch: IDispatch = useDispatch();

    const [error, setError] = useState('');

    const onClose = (): void => {
        dispatch(closeSignIn());
    };

    const onSignInClick = (data: ISignInData): void => {
        authAPI
            .signIn(data)
            .then((response) => {
                saveTokens(response.data);
            })
            .catch((error) => {
                setError(error.response.data.message);
            });
    };

    return <SignIn onClose={onClose} onSignInClick={onSignInClick} error={error} />;
};
