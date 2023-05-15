import { Field, Form, Formik, FormikValues } from 'formik';
import { ICommentData } from '../../../../../../models/comment-data';
import React from 'react';
import { StarRatingContainer } from '../../../../../common/StarRatingContainer/StarRatingContainer';
import s from './CommentForm.module.scss';
import { MainButton } from '../../../../../common/MainButton/MainButton';

interface IProps {
    addNewComment: (data: ICommentData) => void;
}

export const CommentForm = ({ addNewComment }: IProps): JSX.Element => {
    const onSubmit = (values: FormikValues, { resetForm }: any): void => {
        addNewComment({ stars: values.stars, message: values.comment });
        resetForm();
    };

    return (
        <div>
            <Formik onSubmit={onSubmit} initialValues={{ comment: '', stars: 1 }}>
                {({ handleSubmit }) => (
                    <Form>
                        <div className={s.commentForm}>
                            <Field name={'comment'} placeholder={'Оставьте отзыв'} className={s.input} as={'textarea'} />
                            <div className={s.actions}>
                                <div className={s.rating}>
                                    <div>Оценка:</div>
                                    <StarRatingContainer />
                                </div>
                                <MainButton onClick={() => handleSubmit} title={'Отправить'} type={'submit'} />
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};
