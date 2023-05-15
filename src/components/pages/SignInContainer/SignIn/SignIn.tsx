import clsx from 'clsx';
import s from './SignIn.module.scss';
import { Form, Formik } from 'formik';
import { Input } from '../../../common/Input/Input';
import { MainButton } from '../../../common/MainButton/MainButton';
import { ISignInData } from '../../../../models/signIn-data';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { PagesUrlsEnum } from '../../../../enums/pages-urls.enum';
import { required } from '../../../../validators/required';

interface IProps {
    onClose: () => void;
    onSignInClick: (data: ISignInData) => void;
    error: string;
}

interface SignInValues {
    email: string;
    password: string;
}

export const SignIn = (props: IProps): JSX.Element => {
    const navigate: NavigateFunction = useNavigate();

    const initialValues: SignInValues = {
        email: '',
        password: '',
    };

    const onSignUpClick = (): void => {
        navigate(PagesUrlsEnum.SignUp);
        props.onClose();
    };

    const onSubmit = (values: SignInValues): void => {
        props.onSignInClick(values);
    };

    return (
        <div className={clsx('container', s.signIn)}>
            <div className={s.label}>Личный кабинет</div>
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                {({ handleSubmit, errors, touched }) => (
                    <Form className={s.form}>
                        <div className={s.fields}>
                            <Input
                                label={'Email:'}
                                name={'email'}
                                type={'email'}
                                validate={required}
                                error={errors.email}
                                touched={touched.email}
                            />
                            <Input
                                label={'Пароль:'}
                                name={'password'}
                                type={'password'}
                                validate={required}
                                error={errors.password}
                                touched={touched.password}
                            />
                        </div>
                        <div className={s.buttons}>
                            <MainButton title={'Войти'} onClick={() => handleSubmit} type='submit' />
                            <button type='button' className={s.signUpButton} onClick={onSignUpClick}>
                                Регистрация
                            </button>
                        </div>
                        {props.error && <div className={s.error}>{props.error}</div>}
                    </Form>
                )}
            </Formik>
        </div>
    );
};
