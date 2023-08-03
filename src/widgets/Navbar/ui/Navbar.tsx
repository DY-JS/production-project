import React, {useCallback, useState} from 'react';
import {classNames} from "../../../shared/lib/classNames";
import cls from "./Navbar.module.scss"
import Modal from "../../../shared/ui/Modal/Modal";
import {Button} from "../../../shared/ui/Button";
import {ThemeButton} from "../../../shared/ui/Button/ui/Button";
import {useTranslation} from "react-i18next";

interface NavBarProps {
    className?: string;
}

export const Navbar = ({className}: NavBarProps) => {
    const { t } = useTranslation()
    const [isAuthModal, setIsAuthModal] = useState(false)
    const toggleModal =  useCallback(() => {
        setIsAuthModal(prev => !prev)
    }, [])

    return (
        <div className={classNames(cls.navbar, {}, [className || ''])}>
            {/*<ThemeSwitcher/>*/}
            <Button
                className={cls.links}
                theme={ThemeButton.CLEAR_INVERTED}
                onClick={toggleModal}>
                {t("Sign In")}
            </Button>
            <Modal isOpen={isAuthModal} onClose={toggleModal}>
                Front-end developers are one of the top 10 In-Demand IT Jobs in 2022 but identifying the best candidates can be a challenge when it comes to finding the right mix of hard and soft skills, not to mention individuals that will fit into your company’s culture.
            </Modal>
        </div>
    );
};
