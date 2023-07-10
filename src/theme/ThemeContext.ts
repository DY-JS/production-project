import {createContext} from "react";

export enum Theme {
    LIGHT = "light",
    DARK = "dark",
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