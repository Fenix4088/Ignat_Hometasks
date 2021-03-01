type initStateT  = Array<ThemeT>

export type ThemeT = {
    themeName: "some" | "dark" | "red";
    isActive: boolean;
    textColor: "darkslateblue" | "aliceblue" | "aqua"
}

const initState: initStateT = [
    {themeName: "some", textColor: "darkslateblue", isActive: true},
    {themeName: "dark", textColor: "aliceblue", isActive: false},
    {themeName: "red", textColor: "aqua", isActive: false},
];

enum ActionsNames {
    CHANGE_THEME = "changeTheme/themeReducer",
}

type ChangeThemeA = {
    type: typeof ActionsNames.CHANGE_THEME,
    themeName: string,
    payload: boolean
}

type ActionsT = ChangeThemeA;


export const themeReducer = (state = initState, action: ActionsT): initStateT => { // fix any
    switch (action.type) {
        case ActionsNames.CHANGE_THEME: {
            return state.map(theme => theme.themeName === action.themeName ? {...theme, isActive: true} : {...theme, isActive: false});
        }
        default: return state;
    }
};

export const changeThemeC = (themeName: string): ChangeThemeA => {
    return {
        type: ActionsNames.CHANGE_THEME,
        themeName,
        payload: true
    }
};