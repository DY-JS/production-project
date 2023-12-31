import React from 'react';
import {useTranslation} from "react-i18next";
import {classNames} from "../../../shared/lib/classNames";
import cls from "./NotFound.module.scss"

interface NotFoundPageProps {
    className?: string
}

export const NotFoundPage = ({className}:NotFoundPageProps) => {
    const {t} = useTranslation()
    return (
        <div className={classNames(cls.NotFoundPage, {}, [className||''])}>
            {t("Page not Found")}
        </div>
    );
};
