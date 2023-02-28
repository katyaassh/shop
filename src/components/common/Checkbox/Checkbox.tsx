import s from './Checkbox.module.scss';
import { Field } from 'formik';

interface IProps {
    value: string;
    name: string;
    id: string;
}

export const Checkbox = (props: IProps): JSX.Element => {
    return <Field type='checkbox' value={props.value} name={props.name} className={s.checkbox} id={props.id} />;
};
