import React, {ButtonHTMLAttributes, FC} from 'react';
import {classNames} from "../../../lib/classNames";
import cls from "./Button.module.scss"

export enum ThemeButton {
    CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = ({className, theme, children, ...otherProps}: ButtonProps) => {
    return (
        <button
            className={classNames(cls.Button, {}, [className ?? "", cls[theme ?? ""]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
