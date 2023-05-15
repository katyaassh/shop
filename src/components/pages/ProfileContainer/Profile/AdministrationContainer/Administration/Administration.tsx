import { NavLink } from 'react-router-dom';
import s from './Administration.module.scss';
import { AdministrationUrlsEnums } from '../../../../../../enums/administration-urls.enums';

export const Administration = (): JSX.Element => {
    return (
        <div className={s.administration}>
            <NavLink to={AdministrationUrlsEnums.Products}>Продукты</NavLink>
            <NavLink to={AdministrationUrlsEnums.Filters}>Фильтры</NavLink>
        </div>
    );
};
