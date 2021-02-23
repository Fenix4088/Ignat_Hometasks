import React from "react";
import s from "./Styles.module.scss";

type BurgerMenuType = {
  menuStatus: boolean;
  toggleMenu: (param: boolean) => void;
};

export const BurgerMenu: React.FC<BurgerMenuType> = (props) => {

  const burgerMenuFinalStyle =
    (props.menuStatus ? s.burgerMenuOpen : s.burgerMenuClose) +
    " " +
    s.burgerMenuCommon;

  const toggleMenuCallback = () => props.toggleMenu(!props.menuStatus);

  return (
    <div className={s.wrapper} onClick={toggleMenuCallback}>
      <span className={burgerMenuFinalStyle}></span>
    </div>
  );
};
