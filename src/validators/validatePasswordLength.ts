import { FieldValidator } from 'formik';

export const validatePasswordLength: FieldValidator = (value: string): string | void | Promise<string | void> => {
    if (value && value.length < 6) {
        return 'Длина пароля не менее 6 символов';
    } else if (value.length > 30) {
        return 'Длина пароля не более 30 символов';
    }
};
