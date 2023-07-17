import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {AboutPage} from "../../../../pages/AboutPage";
import {MainPage} from "../../../../pages/MainPage";
import {routeConfig} from "../../../../shared/config/routeConfig/RouteConfig";

const AppRouter = () => {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    {Object.values(routeConfig).map(({element, path}) => (
                        <Route
                            key={path}
                            path={path}
                            element={
                            <div className="page-wrapper">{element}</div>}
                            />
                        )
                    )}
                    {/*<Route path="/about" element={<AboutPage />} />*/}
                    {/*<Route path="/" element={<MainPage/>} />*/}
                </Routes>
            </Suspense>
        </div>
    );
};

export default AppRouter;