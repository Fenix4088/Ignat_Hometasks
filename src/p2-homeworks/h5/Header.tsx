import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Styles.module.scss";

type HeaderType = {
  menuStatus: boolean;
};

function Header(props: HeaderType) {
  const NavWrapperStyle = {
    top: !props.menuStatus ? "-100px" : "0px",
  };

  return (
    <nav className={s.navContainer}>
      <div className={s.navWrapper} style={NavWrapperStyle}>
        <NavLink to={"/pre-junior"} activeClassName={s.activeNavItem}>
          Pre-junior
        </NavLink>
        <NavLink to={"/junior"} activeClassName={s.activeNavItem}>
          Junior
        </NavLink>
        <NavLink to={"/junior-plus"} activeClassName={s.activeNavItem}>
          Junior +
        </NavLink>
        <NavLink to={"/junior-plus"} activeClassName={s.activeNavItem}>
          Еуые
        </NavLink>
      </div>
    </nav>
  );
}

export default Header;
