import React, {ButtonHTMLAttributes, FC} from 'react';
import {classNames} from "../../../lib/classNames";
import cls from "./Button.module.scss"

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl'
}

export enum ThemeButton {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
    square?: boolean
    size?: ButtonSize
}

export const Button: FC<ButtonProps> = ({
                                            className,
                                            theme,
                                            children,
                                            square,
                                            size = ButtonSize.M,
                                            ...otherProps
                                        }: ButtonProps) => {
    const mods: Record<string, boolean | undefined> = {
        [cls[theme ?? ""]]: true,
        [cls.square ?? '']: square,
        [cls[size ?? ""]]: true,
    };

    return (
        <button
            className={classNames(cls.Button, mods, [className ?? ''])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
