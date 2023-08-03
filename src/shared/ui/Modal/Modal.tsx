import React, {ReactNode, MouseEvent, useState, useRef, useEffect, useCallback} from 'react';
import cls from './Modal.module.scss'
import {classNames} from "../../lib/classNames";
import {use} from "i18next";
import Portal from "../Portal/Portal";

interface ModalProps {
    className?: string,
    children?: ReactNode
    isOpen: boolean,
    onClose: () => void
}

const Modal = ({className, children, isOpen, onClose}: ModalProps) => {
    const [isClosing, setIsClosing] = useState(false) //для анимации закрытия модалки
    const timeRef = useRef<ReturnType<typeof setTimeout>>() //тут будем хранить timeout (тип NodeJS.Timeout)
    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.closing]: isClosing,  //стиль для закрытия модалки
    }

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true)
            timeRef.current = setTimeout(() => {
                onClose()
                setIsClosing(false)
            }, 300)
        }
    }, [onClose])

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'escape') {
            closeHandler()
        }
    }, [closeHandler])

    const clickHandler = (e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    }

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown)
        }

        return () => {
            clearTimeout(timeRef.current)
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [isOpen, onKeyDown])


    return (
        <Portal>
        <div className={classNames(cls.Modal, mods, [className ?? ''])}>
        {/*    <div className={classNames(cls.Modal, mods, [])}>*/}
            <div className={cls.overlay} onClick={closeHandler}>
                <div className={cls.content} onClick={clickHandler}>
                    {children}
                </div>
            </div>
        </div>
        </Portal>
    );
};

export default Modal;