import React, {useEffect, useState } from "react";
import Header from "./Header";
import Routes from "./Routes";
import { HashRouter } from "react-router-dom";
import { BurgerMenu } from "./BurgerMenu";
import s from "./Styles.module.scss";

function HW5() {
  const [menuStatus, setMenuStatus] = useState<boolean>(false);
  const toggleMenu = () => setMenuStatus(!menuStatus);

  useEffect(() => {
    const body = document.querySelector("body");

    const handler = (e: any): void => {
      //@ts-ignore
      if (!e.path.some((el) => el.dataset?.elem === "navigation")) {
        setMenuStatus(false);
      }
    };
    if (menuStatus) {
      body && body.addEventListener("click", handler);
    }
    return () => {
      body && body.removeEventListener("click", handler);
    };
  });

  return (
    <div className={s.HW5Container}>
      <HashRouter>
        <div data-elem={"navigation"}>
          <BurgerMenu menuStatus={menuStatus} toggleMenu={toggleMenu} />
          <Header menuStatus={menuStatus} />
        </div>
        <Routes />
      </HashRouter>
    </div>
  );
}

export default HW5;
