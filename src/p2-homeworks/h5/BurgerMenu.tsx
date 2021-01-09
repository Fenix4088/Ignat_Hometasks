import React, { useState, MouseEvent } from "react";
import s from "./Styles.module.scss";

type BurgerMenuType = {
  menuStatus: boolean;
  toggleMenu: () => void;
};

export const BurgerMenu: React.FC<BurgerMenuType> = (props) => {
  const burgerMenuFinalStyle =
    (props.menuStatus ? s.burgerMenuOpen : s.burgerMenuClose) +
    " " +
    s.burgerMenuCommon;
  const toggleMenuCallback = () => props.toggleMenu();
  return (
    <div className={s.wrapper} onClick={toggleMenuCallback}>
      <span className={burgerMenuFinalStyle}></span>
    </div>
  );
};
