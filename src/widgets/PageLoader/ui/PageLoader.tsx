import React from 'react';
import {classNames} from "../../../shared/lib/classNames";
import "./PageLoader.scss"
import {Loader} from "../../../shared/Loader/Loader";

interface PageLoaderProps {
    className?: string
}

export const PageLoader = ({className}:PageLoaderProps) => {
    return (
        <div className={classNames('page_loader', {}, [className ||''])}>
            <Loader/>
            {/*<div className="lds-ellipsis">*/}
            {/*    <div></div>*/}
            {/*    <div></div>*/}
            {/*    <div></div>*/}
            {/*    <div></div>*/}
            {/*</div>*/}
        </div>
    );
};
