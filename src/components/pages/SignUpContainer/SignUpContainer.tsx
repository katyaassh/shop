import { SignUp } from './SignUp/SignUp';
import { ISignUpData } from '../../../models/signUp-data';
import { authAPI } from '../../../api/auth.api';
import { saveTokens } from '../../../helpers/saveTokens';
import { useState } from 'react';
import { PagesUrlsEnum } from '../../../enums/pages-urls.enum';
import { NavigateFunction, useNavigate } from 'react-router-dom';

export const SignUpContainer = (): JSX.Element => {
    const [error, setError] = useState('');
    const navigate: NavigateFunction = useNavigate();

    const onSignUpClick = async (data: ISignUpData): Promise<void> => {
        try {
            await authAPI.signUp(data);
            const response = await authAPI.signIn({ email: data.email, password: data.password });
            navigate(PagesUrlsEnum.Profile);
            saveTokens(response.data);
        } catch (e: any) {
            setError(e.response.data.message);
        }
    };

    return <SignUp onSignUpClick={onSignUpClick} error={error} />;
};
