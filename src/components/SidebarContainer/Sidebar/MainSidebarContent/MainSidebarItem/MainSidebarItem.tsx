import s from './MainSidebarItem.module.scss';
import chevron from '../../../../../assets/icons/chevron.svg';
import { SidebarContentIdsEnum } from '../../../../../enums/sidebar.enum';

interface IProps {
    onItemClick: (currentPage: SidebarContentIdsEnum) => void;
    title: string;
    currentPage: SidebarContentIdsEnum;
}

export const MainSidebarItem = (props: IProps): JSX.Element => {
    return (
        <div className={s.item} onClick={() => props.onItemClick(props.currentPage)}>
            {props.title}
            <img src={chevron} alt='Chevron' className={s.chevron} />
        </div>
    );
};
