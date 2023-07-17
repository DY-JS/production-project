import React from 'react';
import {Theme, useTheme} from "../../../app/providers/ThemeProvider";
import {classNames} from "../../../shared/lib/classNames";
import cls from './ThemeSwitcher.module.scss'
import LightIcon from "../../../assets/icons/theme-light.svg"
import DarkIcon from "../../../assets/icons/theme-dark.svg"
import {Button} from "../../../shared/ui/Button";
import {ThemeButton} from "../../../shared/ui/Button/ui/Button";

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme()
    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(cls.ThemeSwitcher, {}, [className??''])}
            onClick={toggleTheme}
        >
            <img width={30} height={30} src={theme === Theme.DARK ? DarkIcon : LightIcon}/>
        </Button>
    );
};

export default ThemeSwitcher;