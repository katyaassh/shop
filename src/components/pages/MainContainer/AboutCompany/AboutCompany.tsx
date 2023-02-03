import { NavLink } from 'react-router-dom';
import { PagesUrlsEnum } from '../../../../enums/pages-urls.enum';
import s from './AboutCompany.module.scss';
import logo from '../../../../assets/image/logo.svg';

export const AboutCompany = (): JSX.Element => {
    return (
        <div className={s.aboutCompany}>
            <div className={s.content}>
                <NavLink to={PagesUrlsEnum.Company} className={s.companyButton}>
                    О КОМПАНИИ
                </NavLink>
                <div className={s.title}>Интернет-магазин профессиональной косметики и парфюмерии Camilla de Luxe</div>
                <div className={s.textBlock}>
                    <div className={s.text}>
                        Интернет-магазин парфюмерии «Camilla de Luxe» в Новосибирске предлагает ароматы с доставкой по России. В
                        ассортименте оригинальная продукция ведущих мировых брендов.
                    </div>
                    <div className={s.text}>
                        Парфюмерия для женщин и мужчин, в том числе нишевая. Сотни неповторимых ароматов, которые подчеркнут вашу
                        индивидуальность или станут прекрасным подарком для близкого человека. Представлена также коллекция
                        парфюмированной продукции для дома.
                    </div>
                </div>
            </div>
            <img src={logo} alt='Logo' className={s.logo} />
        </div>
    );
};
