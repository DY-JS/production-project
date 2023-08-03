import React, {FC, useState} from 'react';
import cls from "./Sidebar.module.scss"
import {classNames} from "../../../../shared/lib/classNames";
import {ThemeSwitcher} from "../../../ThemeSwitcher";
import {LangSwitcher} from "../../../LangSwitcher";
import {Button} from "../../../../shared/ui/Button";
import {ButtonSize, ThemeButton} from "../../../../shared/ui/Button/ui/Button";
import AppLink, {AppLinkTheme} from "../../../../shared/ui/AppLink/AppLink";
import {RoutePath} from "../../../../shared/config/routeConfig/RouteConfig";
import HomeIcon from "../../../../assets/icons/icons8-home.svg"
import AboutIcon from "../../../../assets/icons/about.svg"
import {useTranslation} from "react-i18next";


interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = ({className}) => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    const { t, i18n } = useTranslation();
    const toggleCollapsed = () => {
        setCollapsed(prev => !prev)
        console.log(collapsed)
    }

    return (
        <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className ?? ''])}>
            <Button
                onClick={toggleCollapsed}
                className={cls.collapseBtn}
                theme={ThemeButton.BACKGROUND_INVERTED}
                square
                size={ButtonSize.L}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.items}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.main} className={cls.item}>
                    <img width={24} height={24} className={cls.icon} src={HomeIcon} alt="Home"/>
                    <span className={cls.link}>{t("Main")}</span>
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.about} className={cls.item}>
                    <img width={24} height={24} className={cls.icon} src={AboutIcon} alt="About"/>
                    <span className={cls.link}>{t("About")}</span>
                </AppLink>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher short={collapsed} className={cls.lang}/>
            </div>
        </div>
    );
};
