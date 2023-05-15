import s from './CartButton.module.scss';
import { Counter } from '../Counter/Counter';
import { MainButton } from '../MainButton/MainButton';
import { PagesUrlsEnum } from '../../../enums/pages-urls.enum';
import { ProfileUrlsEnums } from '../../../enums/profile-urls.enums';
import { NavigateFunction, useNavigate } from 'react-router-dom';

interface IProps {
    onCartClick: () => void;
    setCountInCart: (count: number) => void;
    totalCount: number;
    isInCart: boolean;
}

export const CartButton = ({ onCartClick, setCountInCart, totalCount, isInCart }: IProps): JSX.Element => {
    const navigate: NavigateFunction = useNavigate();

    const onToCartClick = (): void => {
        navigate(PagesUrlsEnum.Profile + '/' + ProfileUrlsEnums.Cart);
    };

    return (
        <>
            {isInCart ? (
                <MainButton title={'Перейти в корзину'} onClick={onToCartClick} className={s.toCartButton} />
            ) : (
                <div className={s.cartButton}>
                    <Counter setCountInCart={setCountInCart} totalCount={totalCount} />
                    <MainButton title={'В корзину'} className={s.button} onClick={onCartClick} />
                </div>
            )}
        </>
    );
};
