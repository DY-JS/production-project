import { useContext } from 'react';
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./ThemeContext";


interface UseThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}

export function useTheme(): UseThemeResult {
    const themeContext = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme =
            themeContext.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
        themeContext.setTheme(newTheme);
        document.body.className=newTheme;
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return {
        theme: themeContext.theme,
        toggleTheme,
    };
}
