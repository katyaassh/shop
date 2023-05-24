import clsx from 'clsx';
import s from './SignIn.module.scss';
import { Form, Formik } from 'formik';
import { Input } from '../../../common/Input/Input';
import { MainButton } from '../../../common/MainButton/MainButton';
import { ISignInData } from '../../../../models/signIn-data';
import { required } from '../../../../validators/required';

interface IProps {
    onSignInClick: (data: ISignInData) => void;
    onSignUpClick: () => void;
    error: string;
}

interface SignInValues {
    email: string;
    password: string;
}

export const SignIn = ({ onSignUpClick, onSignInClick, error }: IProps): JSX.Element => {
    const initialValues: SignInValues = {
        email: '',
        password: '',
    };

    const onSubmit = (values: SignInValues): void => {
        onSignInClick(values);
    };

    return (
        <div className={clsx('container', s.signIn)}>
            <div className={s.label}>Личный кабинет</div>
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                {({ errors, touched }) => (
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
                            <MainButton type='submit'>Войти</MainButton>
                            <button type='button' className={s.signUpButton} onClick={onSignUpClick}>
                                Регистрация
                            </button>
                        </div>
                        {error && <div className={s.error}>{error}</div>}
                    </Form>
                )}
            </Formik>
        </div>
    );
};
