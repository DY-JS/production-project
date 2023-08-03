import React, { Suspense, useContext, useEffect, useState } from 'react'
// import './styles/index.scss'
import { useTheme } from './providers/ThemeProvider'
import { classNames } from '../shared/lib/classNames'
import { AppRouter } from './providers/router'
import { Navbar } from '../widgets/Navbar'
import { Sidebar } from '../widgets/Sidebar'
import { BugButton } from './providers/ErrorBoundary'
import Modal from "../shared/ui/Modal/Modal";

function App () {
    const { theme } = useTheme()
    // const {theme, setTheme} = useContext(ThemeContext)
    // const toggleTheme = () => {
    //     setTheme && setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
    //     }

    // useEffect(() => {
    //     if (Math.random() < 0.5) {
    //         throw new Error('Error')
    //     }
    // }, [])

    return (
    // <div className={`app ${theme}`}>
      <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
              <Navbar/>
                    <div className="content-page">
                    <Sidebar/>
                    <AppRouter/>
                </div>
          </Suspense>
            {/* <button onClick={toggleTheme}>TOGGLE THEME</button> */}
        </div>
    );
}

export default App
