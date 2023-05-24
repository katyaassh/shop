import { useField } from 'formik';
import { StarRating } from './StarRating/StarRating';

export const StarRatingContainer = (): JSX.Element => {
    const [_, meta, helpers] = useField('stars');

    const { value } = meta;
    const { setValue } = helpers;

    return <StarRating stars={value} onStarClick={setValue} />;
};
