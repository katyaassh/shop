import { SignUp } from './SignUp/SignUp';
import { ISignUpData } from '../../../models/signUp-data';
import { authAPI } from '../../../api/auth.api';
import { saveTokens } from '../../../helpers/saveTokens';
import { useState } from 'react';

export const SignUpContainer = (): JSX.Element => {
    const [error, setError] = useState('');

    const onSignUpClick = (data: ISignUpData): void => {
        authAPI
            .signUp(data)
            .then(() => {
                authAPI.signIn({ email: data.email, password: data.password }).then((response) => {
                    saveTokens(response.data);
                });
            })
            .catch((error) => {
                setError(error.response.data.message);
            });
    };

    return <SignUp onSignUpClick={onSignUpClick} error={error} />;
};
