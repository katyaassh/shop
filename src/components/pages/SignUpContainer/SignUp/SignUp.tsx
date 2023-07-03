import clsx from 'clsx';
import s from './SignUp.module.scss';
import { Form, Formik } from 'formik';
import { Input } from '../../../common/Input/Input';
import { MainButton } from '../../../common/MainButton/MainButton';
import { validateEmail } from '../../../../validators/validateEmail';
import { validatePassword } from '../../../../validators/validatePassword';
import { ISignUpData } from '../../../../models/signUp-data';
import { validateName } from '../../../../validators/validateName';

interface IProps {
    onSignUpClick: (data: ISignUpData) => void;
    error: string;
}

interface SignUpValues {
    name: string;
    lastname: string;
    email: string;
    password: string;
}

export const SignUp = (props: IProps): JSX.Element => {
    const initialValues: SignUpValues = {
        name: '',
        lastname: '',
        email: '',
        password: '',
    };

    const onSubmit = (values: SignUpValues): void => {
        props.onSignUpClick(values);
    };

    return (
        <div className={clsx('container', s.signUp)}>
            <div className={s.label}>Регистрация</div>
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                {({ errors, touched }) => (
                    <Form className={s.form}>
                        <div className={s.fields}>
                            <Input
                                label={'Имя:'}
                                name={'name'}
                                type={'text'}
                                validate={validateName}
                                error={errors.name}
                                touched={touched.name}
                            />
                            <Input
                                label={'Фамилия:'}
                                name={'lastname'}
                                type={'text'}
                                validate={validateName}
                                error={errors.lastname}
                                touched={touched.lastname}
                            />
                            <Input
                                label={'Email:'}
                                name={'email'}
                                type={'email'}
                                validate={validateEmail}
                                error={errors.email}
                                touched={touched.email}
                            />
                            <Input
                                label={'Пароль:'}
                                name={'password'}
                                type={'password'}
                                validate={validatePassword}
                                error={errors.password}
                                touched={touched.password}
                            />
                        </div>
                        <MainButton type='submit' className={s.button}>
                            Зарегистрироваться
                        </MainButton>
                        {props.error && <div className={s.error}>{props.error}</div>}
                    </Form>
                )}
            </Formik>
        </div>
    );
};
