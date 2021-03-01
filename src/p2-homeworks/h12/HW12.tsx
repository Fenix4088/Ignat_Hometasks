import React, {useCallback} from "react";
import s from "./HW12.module.css";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {useDispatch, useSelector} from "react-redux";
import {changeThemeC, ThemeT} from "./bll/themeReducer";
import {AppDispatch, AppStoreType} from "../h10/bll/store";

function HW12() {

    const {themeName: theme, textColor} = useSelector<AppStoreType, ThemeT>(state => state.theme.filter(t => t.isActive)[0])

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
            <SuperRadio options={["some", "red", "dark"]} onChangeOption={onSuperRadioChange} value={theme} color={textColor}/>

            <hr/>
        </div>
    );
}

export default HW12;
