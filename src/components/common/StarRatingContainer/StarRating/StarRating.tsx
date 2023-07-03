import s from './StarRating.module.scss';
import blackStar from '../../../../assets/icons/blackStar.svg';
import greyStar from '../../../../assets/icons/greyStar.svg';

const starsCount = [1, 2, 3, 4, 5];

interface IProps {
    stars?: number;
    onStarClick?: (star: number) => void;
}

export const StarRating = ({ stars, onStarClick }: IProps): JSX.Element => {
    const percents = stars && stars * 20;

    const blackStarsStyles = {
        clipPath: `polygon(${percents}% 100%,
          ${percents}% 0%,
          0% 0%,
          0% 100%)`,
    };

    return (
        <div className={s.stars}>
            <div className={s.blackStars} style={blackStarsStyles}>
                {starsCount.slice(0, 5).map((star) => (
                    <img key={star} src={blackStar} alt='blackStar' />
                ))}
            </div>
            <div className={s.greyStars}>
                {starsCount.map((star) => (
                    <img
                        key={star}
                        src={greyStar}
                        alt='greyStar'
                        onClick={() => onStarClick && onStarClick(star)}
                        className={onStarClick ? s.greyStar : ''}
                    />
                ))}
            </div>
        </div>
    );
};
