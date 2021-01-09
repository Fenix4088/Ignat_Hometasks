import React, {MouseEvent, useState} from "react";
import Header from "./Header";
import Routes from "./Routes";
import { HashRouter } from "react-router-dom";
import { BurgerMenu } from "./BurgerMenu";
import s from "./Styles.module.scss";

function HW5() {
    const [menuStatus, setMenuStatus] = useState<boolean>(false);
    const toggleMenu = () => setMenuStatus(!menuStatus);

    return (
    <div className={s.HW5Container}>
      <HashRouter>

        <BurgerMenu menuStatus={menuStatus} toggleMenu={toggleMenu}/>

        <Header menuStatus={menuStatus}/>

        <Routes />

      </HashRouter>
    </div>
  );
}

export default HW5;
