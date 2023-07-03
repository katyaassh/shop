import { FieldValidator } from 'formik';

export const validatePassword: FieldValidator = (value: string): string | void | Promise<string | void> => {
    if (!value) {
        return 'Обязательно поле!';
    } else if (value.length < 6) {
        return 'Длина пароля не менее 6 символов';
    } else if (value.length > 30) {
        return 'Длина пароля не более 30 символов';
    }
};
