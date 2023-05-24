import { ICommentsType } from '../../../../../models/comments-type';
import s from './Comments.module.scss';
import { Comment } from './Comment/Comment';
import { ICommentData } from '../../../../../models/comment-data';
import { CommentForm } from './CommentForm/CommentForm';

interface IProps {
    count: number;
    comments: ICommentsType[];
    addNewComment: (data: ICommentData) => void;
}

export const Comments = ({ count, comments, addNewComment }: IProps): JSX.Element => {
    return (
        <div>
            <div className={s.label}>Отзывы</div>
            <CommentForm addNewComment={addNewComment} />
            {comments.length ? (
                <>
                    <div className={s.count}>Всего отзывов: {count}</div>
                    <div className={s.items}>
                        {comments.map((comment: ICommentsType) => (
                            <Comment comment={comment} key={comment._id} />
                        ))}
                    </div>
                </>
            ) : (
                <div className={s.emptyComments}>Нет комментариев</div>
            )}
        </div>
    );
};
