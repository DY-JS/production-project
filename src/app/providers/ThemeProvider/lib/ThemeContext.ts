import {createContext} from "react";

export enum Theme {
    LIGHT = "app_light_theme_",
    DARK = "app_dark_theme",
}

export interface ThemeContextProps {
    theme: Theme;
    setTheme: (theme: Theme) => void
}

export let ThemeContext: React.Context<ThemeContextProps>;
ThemeContext = createContext<ThemeContextProps>({
    theme: Theme.LIGHT,
    setTheme: (theme: Theme) => {}
});

export const LOCAL_STORAGE_THEME_KEY = 'theme';