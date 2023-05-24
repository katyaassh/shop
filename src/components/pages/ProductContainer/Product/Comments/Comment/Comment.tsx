import { ICommentsType } from '../../../../../../models/comments-type';
import s from './Comment.module.scss';
import { StarRating } from '../../../../../common/StarRatingContainer/StarRating/StarRating';

interface IProps {
    comment: ICommentsType;
}

export const Comment = ({ comment }: IProps): JSX.Element => {
    return (
        <div className={s.comment}>
            <div className={s.topSection}>
                <div>{comment.username}</div>
                <div className={s.date}>{new Date(comment.createdAt).toLocaleString()}</div>
                <StarRating stars={comment.stars} />
            </div>
            {comment.message ? <div className={s.text}>{comment.message}</div> : <div className={s.text}>...</div>}
        </div>
    );
};
