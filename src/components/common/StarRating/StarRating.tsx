import greyStars from '../../../assets/icons/greyStars.svg';
import blackStars from '../../../assets/icons/blackStars.svg';
import s from './StarRating.module.scss';

interface IProps {
    rating: number;
}

export const StarRating = (props: IProps): JSX.Element => {
    const percents = props.rating * 20;

    const blackStarsStyles = {
        clipPath: `polygon(${percents}% 100%,
          ${percents}% 0%,
          0% 0%,
          0% 100%)`,
    };

    return (
        <div className={s.stars}>
            <img src={blackStars} alt='' className={s.blackStars} style={blackStarsStyles} />
            <img src={greyStars} alt='' />
        </div>
    );
};
