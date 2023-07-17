import React from 'react';
import {classNames} from "../../../shared/lib/classNames";
import cls from "./Navbar.module.scss"
import AppLink, {AppLinkTheme} from "../../../shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "../../ThemeSwitcher";

interface NavBarProps {
    className?: string;
}

export const Navbar = ({className}: NavBarProps) => {
    return (
        <div className={classNames(cls.navbar, {}, [className || ''])}>
            {/*<ThemeSwitcher/>*/}
            <div className={cls.links}>
            <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={cls.mainLink}>Main</AppLink>
            <AppLink theme={AppLinkTheme.SECONDARY} to="/about">About</AppLink>
            </div>
        </div>
    );
};