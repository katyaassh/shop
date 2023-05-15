import { IProduct } from '../../../../models/product';
import s from './Product.module.scss';
import { Content } from './Content/Content';
import like from '../../../../assets/icons/like.svg';
import { InfoItems } from './InfoItems/InfoItems';
import { Comments } from './Comments/Comments';
import { ICommentData } from '../../../../models/comment-data';
import { StarRating } from '../../../common/StarRatingContainer/StarRating/StarRating';
import clsx from 'clsx';

interface IProps {
    product: IProduct;
    addNewComment: (data: ICommentData) => void;
    onCartClick: () => void;
    setCountInCart: (count: number) => void;
    isInCart: boolean;
}

export const Product = ({ product, addNewComment, onCartClick, setCountInCart, isInCart }: IProps): JSX.Element => {
    const commentControl = (): string => {
        if (product?.commentsCount === 1) {
            return 'отзыв';
        } else if (product?.commentsCount === 4) {
            return 'отзыва';
        }
        return 'отзывов';
    };

    const comment = commentControl();

    return (
        <div className={clsx('container', s.product)}>
            <div className={s.name}>{product?.name}</div>
            <div className={s.bar}>
                <StarRating stars={product?.stars} />
                <div>
                    {product?.commentsCount}&nbsp;{comment}
                </div>
                <div className={s.wishlist}>
                    <img src={like} alt='Like' />В избранное
                </div>
            </div>
            <Content product={product} onCartClick={onCartClick} setCountInCart={setCountInCart} isInCart={isInCart} />
            <InfoItems />
            <div className={s.description}>
                <div className={s.descriptionLabel}>Описание</div>
                {product?.description ? (
                    <div className={s.descriptionText}>{product?.description}</div>
                ) : (
                    <div className={s.descriptionText}>Нет описания</div>
                )}
            </div>
            <Comments count={product?.commentsCount} comments={product?.comments} addNewComment={addNewComment} />
        </div>
    );
};
