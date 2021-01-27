import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Styles.module.scss";
import {PATH} from "./Routes";

type HeaderType = {
  menuStatus: boolean;
};


function Header(props: HeaderType) {
  const NavWrapperStyle = {
    top: !props.menuStatus ? "-100px" : "0px",
  };

  return (
    <nav className={s.navContainer}>
      <div className={s.navWrapper} style={NavWrapperStyle} >
        <NavLink to={PATH.PRE_JUNIOR} activeClassName={s.activeNavItem}>
          Pre-junior
        </NavLink>
        <NavLink to={PATH.JUNIOR} activeClassName={s.activeNavItem}>
          Junior
        </NavLink>
        <NavLink to={PATH.JUNIOR_PLUS} activeClassName={s.activeNavItem}>
          Junior +
        </NavLink>
      </div>
    </nav>
  );
}

export default Header;