import { FieldValidator } from 'formik';

export const validateEmail: FieldValidator = (value: string): string | void | Promise<string | void> => {
    if (!value) {
        return 'Обязательно поле!';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        return 'Неверный формат';
    }
};
