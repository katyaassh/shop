import { Field, FieldValidator } from 'formik';
import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import s from './Input.module.scss';

interface IProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label: string;
    validate?: FieldValidator;
    error?: string;
    touched?: boolean;
}

export const Input = ({ label, className, error, touched, ...props }: IProps): JSX.Element => {
    return (
        <div className={className}>
            <div className={s.topSection}>
                <label htmlFor={props.id} className={s.label}>
                    {label}
                </label>
                {error && touched && <div className={s.error}>{error}</div>}
            </div>
            <Field {...props} className={s.input} />
        </div>
    );
};
