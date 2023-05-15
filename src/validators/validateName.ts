import { FieldValidator } from 'formik';

export const validateName: FieldValidator = (value: string): string | void | Promise<string | void> => {
    if (!value) {
        return 'Обязательно поле!';
    } else if (value.length < 2) {
        return 'Длина не менее 2 символов';
    } else if (value.length > 20) {
        return 'Длина не более 20 символов';
    }
};
