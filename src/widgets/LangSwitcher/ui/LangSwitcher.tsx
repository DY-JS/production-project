import {useTranslation} from "react-i18next";
import React, {FC} from "react";
import {Button} from "../../../shared/ui/Button";
import {ThemeButton} from "../../../shared/ui/Button/ui/Button";
import {classNames} from "../../../shared/lib/classNames";
import cls from "./LangSwitcher.module.scss"

interface LangSwitcherProps {
    className?: string,
    short?: boolean
}

export const LangSwitcher: FC<LangSwitcherProps>=({className, short}) => {
    const { t, i18n } = useTranslation();
    const toggleLang = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en' )
    }

    return (
            <Button
                className={classNames(cls.LangSwitcher, {}, [className??''])}
                theme={ThemeButton.CLEAR}
                onClick={toggleLang}
            >
                {t(short?"Short Language":"Language")}
            </Button>
    )
}