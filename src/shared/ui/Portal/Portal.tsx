import React, {ReactNode} from 'react';
import {createPortal} from "react-dom";

interface PortalProps {
    children: ReactNode, // элемент, кот. нужно вставить
    element?: HTMLElement // куда вставим элемент
}

const Portal = ({children, element= document.body}: PortalProps) => {
    return createPortal(children, element)
};

export default Portal;