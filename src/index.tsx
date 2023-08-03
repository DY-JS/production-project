import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './app/providers/ThemeProvider'
import App from './app/App'

import '../src/shared/config/i18n/i18n'
import { ErrorBoundary } from './app/providers/ErrorBoundary'
import './app/styles/index.scss'
import {StoreProvider} from "./app/providers/StoreProvider";
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
<StoreProvider>
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>
</StoreProvider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals</BrowserRouter>
