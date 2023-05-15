import s from './Personal.module.scss';
import { Form, Formik } from 'formik';
import { Input } from '../../../../../common/Input/Input';
import { validateName } from '../../../../../../validators/validateName';
import { MainButton } from '../../../../../common/MainButton/MainButton';
import { IUser } from '../../../../../../models/user';
import { useEffect, useState } from 'react';
import { IUserValues } from '../../../../../../models/user-values';
import clsx from 'clsx';
import { validatePasswordLength } from '../../../../../../validators/validatePasswordLength';
import { AddressesField } from './AddressesField/AddressesField';

interface IProps {
    user: IUser | null;
    message?: string;
    onSubmit: (values: IUserValues) => void;
    onAddressesChange: (value: string) => void;
    suggestions: string[];
}

export const Personal = (props: IProps): JSX.Element => {
    const [userData, setUserData] = useState<IUser | null>(null);

    useEffect(() => {
        if (props.user) {
            setUserData(props.user);
        }
    }, [props.user]);

    const initialValues: IUserValues = {
        name: userData?.name || '',
        lastname: userData?.lastname || '',
        phone: userData?.phone || '',
        address: userData?.address || '',
        password: '',
        newPassword: '',
    };

    return (
        <div className={s.personal}>
            <h2 className={s.label}>Профиль</h2>
            <Formik initialValues={initialValues} onSubmit={props.onSubmit} enableReinitialize={true}>
                {({ handleSubmit, errors, touched }) => (
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
                            <Input label={'Телефон:'} name={'phone'} type={'text'} />
                            <AddressesField onAddressesChange={props.onAddressesChange} suggestions={props.suggestions} />
                            <Input
                                label={'Старый пароль:'}
                                name={'password'}
                                type={'password'}
                                validate={validatePasswordLength}
                                error={errors.password}
                                touched={touched.password}
                            />
                            <Input
                                label={'Новый пароль:'}
                                name={'newPassword'}
                                type={'password'}
                                validate={validatePasswordLength}
                                error={errors.newPassword}
                                touched={touched.newPassword}
                            />
                        </div>
                        {props.message && (
                            <div className={clsx(props.message === 'Изменения сохранены!' ? s.message : s.error)}>
                                {props.message}
                            </div>
                        )}
                        <MainButton
                            title={'Сохранить изменения'}
                            onClick={() => handleSubmit}
                            type='submit'
                            className={s.button}
                        />
                    </Form>
                )}
            </Formik>
        </div>
    );
};
