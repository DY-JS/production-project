import React, {Suspense, useContext, useState} from 'react';
import './styles/index.scss';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';
import {AboutPageAsync} from "./pages/AboutPage/AboutPageAsync";
import {MainPageAsync} from "./pages/MainPage/MainPageAsync";
import {Theme, ThemeContext} from "./theme/ThemeContext";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames";

function App() {
    const {theme, toggleTheme} = useTheme()
    // const {theme, setTheme} = useContext(ThemeContext)
    // const toggleTheme = () => {
    //     setTheme && setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
    //     }

    return (
        // <div className={`app ${theme}`}>
        <div className={classNames('app', {}, [theme])}>
            <Link to="/">Main</Link>
            <Link to="/about">About</Link>
            <button onClick={toggleTheme}>TOGGLE THEME</button>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/about" element={<AboutPageAsync />} />
                    <Route path="/" element={<MainPageAsync/>} />
                </Routes>
            </Suspense>
        </div>
    );
}

export default App;
