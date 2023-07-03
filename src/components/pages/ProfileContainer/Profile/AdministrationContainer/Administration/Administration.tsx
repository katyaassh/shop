import { NavLink } from 'react-router-dom';
import s from './Administration.module.scss';
import { AdministrationUrlsEnum } from '../../../../../../enums/administration-urls.enum';

export const Administration = (): JSX.Element => {
    return (
        <div className={s.administration}>
            <NavLink to={AdministrationUrlsEnum.Products}>Продукты</NavLink>
            <NavLink to={AdministrationUrlsEnum.Filters}>Фильтры</NavLink>
        </div>
    );
};
