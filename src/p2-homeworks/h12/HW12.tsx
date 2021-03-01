import React, {useCallback} from "react";
import s from "./HW12.module.css";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {useDispatch, useSelector} from "react-redux";
import {changeThemeC} from "./bll/themeReducer";
import {AppDispatch, AppStoreType} from "../h10/bll/store";

function HW12() {

    const theme = useSelector<AppStoreType, string>(state => state.theme.filter(t => t.isActive)[0].themeName)

    const dispatch: AppDispatch = useDispatch();

    const onSuperRadioChange = useCallback((currentTheme: string):void => {
        dispatch(changeThemeC(currentTheme))
    }, [dispatch]);

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>
            <SuperRadio options={["some", "red", "dark"]} onChangeOption={onSuperRadioChange} value={theme}/>

            <hr/>
        </div>
    );
}

export default HW12;
