import s from './OrderForm.module.scss';
import { IUser } from '../../../../models/user';
import clsx from 'clsx';
import { Field, Form, Formik } from 'formik';
import { IOrderValues } from '../../../../models/order-values';
import russiaPost from '../../../../assets/image/delivery/russia-post.jpg';
import ems from '../../../../assets/image/delivery/ems.jpg';
import dpd from '../../../../assets/image/delivery/dpd.jpg';
import cdek from '../../../../assets/image/delivery/cdek.jpg';
import { UserInfo } from './UserInfo/UserInfo';
import { MainButton } from '../../../common/MainButton/MainButton';

interface IProps {
    user: IUser;
    onSubmit: (values: IOrderValues) => void;
    onChangeClick: () => void;
    error: string;
}

export const OrderForm = ({ user, onSubmit, onChangeClick, error }: IProps): JSX.Element => {
    const initialValues: IOrderValues = {
        deliveryType: 'Почта России',
        paymentType: 'Наложенный платёж',
    };

    return (
        <div className={clsx('container', s.orderForm)}>
            <div className={s.title}>Оформление заказа</div>
            <UserInfo user={user} onChangeClick={onChangeClick} />
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                {() => (
                    <Form className={s.form}>
                        <div className={s.category}>
                            <div className={s.typeTitle}>Способ доставки</div>
                            <div className={s.types}>
                                <div className={s.type}>
                                    <Field
                                        type={'radio'}
                                        value={'Почта России'}
                                        name={'deliveryType'}
                                        className={s.radio}
                                        id={'Почта России'}
                                    />
                                    <label htmlFor='Почта России' className={s.label}>
                                        <img src={russiaPost} alt='russiaPost' className={s.image} />
                                    </label>
                                </div>
                                <div className={s.type}>
                                    <Field type={'radio'} value={'EMS'} name={'deliveryType'} className={s.radio} />
                                    <label htmlFor='Почта России' className={s.label}>
                                        <img src={ems} alt='ems' className={s.image} />
                                    </label>
                                </div>
                                <div className={s.type}>
                                    <Field type={'radio'} value={'DPD'} name={'deliveryType'} className={s.radio} />
                                    <label htmlFor='Почта России' className={s.label}>
                                        <img src={dpd} alt='dpd' className={s.image} />
                                    </label>
                                </div>
                                <div className={s.type}>
                                    <Field type={'radio'} value={'CDEK'} name={'deliveryType'} className={s.radio} />
                                    <label htmlFor='Почта России' className={s.label}>
                                        <img src={cdek} alt='cdek' className={s.image} />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className={s.category}>
                            <div className={s.typeTitle}>Способ оплаты</div>
                            <div className={s.type}>
                                <Field
                                    type={'radio'}
                                    value={'Наложенный платёж'}
                                    name={'paymentType'}
                                    className={s.radio}
                                    id={'paymentType'}
                                />
                                <label htmlFor='paymentType' className={s.label}>
                                    Наложенный платеж
                                </label>
                            </div>
                        </div>
                        {error && <div className={s.error}>{error}</div>}
                        <MainButton type={'submit'} className={s.button}>
                            Оформить заказ
                        </MainButton>
                    </Form>
                )}
            </Formik>
        </div>
    );
};
