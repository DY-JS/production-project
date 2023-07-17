import React, {FC, useState} from 'react';
import cls from "./Sidebar.module.scss"
import {classNames} from "../../../../shared/lib/classNames";
import {ThemeSwitcher} from "../../../ThemeSwitcher";
import {LangSwitcher} from "../../../LangSwitcher";

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = ({className}) => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    console.log(collapsed)
    const toggleCollapsed =() => {
        setCollapsed( prev=>!prev)
        console.log(collapsed)
    }

    return (
        <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className??''])}>
            <button onClick={toggleCollapsed}>TOGGLE</button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher className={cls.lang}/>
            </div>
        </div>
    );
};
