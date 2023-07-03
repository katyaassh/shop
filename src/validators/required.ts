import { FieldValidator, FormikValues } from 'formik';

export const required: FieldValidator = (value: FormikValues): string | void | Promise<string | void> => {
    if (!value) {
        return 'Обязательное поле!';
    }
};
