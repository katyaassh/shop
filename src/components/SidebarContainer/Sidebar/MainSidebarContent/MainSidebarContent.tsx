import React from "react";
import s from "./MainSidebarContent.module.scss";
import chevron from "../../../../assets/icons/chevron.svg";
import clsx from "clsx";
import user from "../../../../assets/icons/user.svg";
import cart from "../../../../assets/icons/cart.svg";
import like from "../../../../assets/icons/like.svg";
import phone from "../../../../assets/icons/phone.svg";
import place from "../../../../assets/icons/place.svg";
import mail from "../../../../assets/icons/mail.svg";
import vk from "../../../../assets/icons/social network/vk.svg";
import facebook from "../../../../assets/icons/social network/facebook.svg";
import whatsapp from "../../../../assets/icons/social network/whatsapp.svg";
import instagram from "../../../../assets/icons/social network/instagram.svg";
import {SidebarContentIdsEnum} from "../../../../enums/sidebar.enum";

interface IProps {
    onItemClick: (currentPage: SidebarContentIdsEnum) => void
}

export const MainSidebarContent = (props: IProps): JSX.Element => {
  return (
      <div>
          <div className={s.item}
               onClick={() => props.onItemClick(SidebarContentIdsEnum.Catalog)}>
              Каталог
              <img src={chevron} alt="Chevron" className={s.chevron}/>
          </div>
          <div className={s.item} >
              Акции
          </div>
          <div className={s.item}>
              Бренды
          </div>
          <div className={s.item}
               onClick={() => props.onItemClick(SidebarContentIdsEnum.HowToBuy)}>
              Как купить
              <img src={chevron} alt="Chevron" className={s.chevron}/>
          </div>
          <div className={s.item}
               onClick={() => props.onItemClick(SidebarContentIdsEnum.Company)}>
              Компания
              <img src={chevron} alt="Chevron" className={s.chevron}/>
          </div>
          <div className={clsx(s.item, s.itemFlexStart)}>
              <img src={user} alt="User"/>
              Личный кабинет
          </div>
          <div className={clsx(s.item, s.itemFlexStart)}>
              <img src={cart} alt="Cart"/>
              Корзина
              <div className={s.counter}>0</div>
          </div>
          <div className={clsx(s.item, s.itemFlexStart)}>
              <img src={like} alt="Like"/>
              Отложенные
              <div className={s.counter}>0</div>
          </div>
          <div className={clsx(s.item, s.itemFlexStart)}>
              <img src={phone} alt="phone"/>
              <div className={s.phone}>
                  <div className={s.phoneNumber}>+7 (384) 123 45 67</div>
                  <div className={s.phoneText}>Интернет-мазазин</div>
              </div>
              <img src={chevron} alt="Chevron" className={s.chevron}/>
          </div>
          <div className={s.contacts}>
              <div className={s.contactText}>Контактная информация</div>
              <div className={s.contactItem}>
                  <img src={place} alt="Place" className={s.contactIcon}/>
                  <div className={s.address}>г. Новосибирск, Вокзальная магистраль, 10</div>
              </div>
              <div className={s.contactItem}>
                  <img src={mail} alt="Mail" className={s.contactIcon}/>
                  <div className={s.address}>info@camilladeluxe.ru</div>
              </div>
          </div>
          <div className={s.social}>
              <img src={vk} alt="VK" className={s.socialIcon}/>
              <img src={facebook} alt="Facebook" className={s.socialIcon}/>
              <img src={whatsapp} alt="WhatsApp" className={s.socialIcon}/>
              <img src={instagram} alt="Instagram" className={s.socialIcon}/>
          </div>
      </div>
  )
}
