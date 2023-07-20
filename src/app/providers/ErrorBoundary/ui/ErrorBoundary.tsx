import React, { Suspense, type ErrorInfo, type ReactNode } from 'react'
import { ErrorPage } from '../../../../widgets/ErrorPage'

// import { withTranslation } from 'react-i18next'

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor (props: ErrorBoundaryProps) {
        super(props)
    this.state = { hasError: false }
  }

    static getDerivedStateFromError (error: Error) {
    // Update state so the next render will show the fallback UI.
        return { hasError: true }
  }

    componentDidCatch (error: Error, info: ErrorInfo) {
    // Example "componentStack":
    //   in ComponentThatThrows (created by App)
    //   in ErrorBoundary (created by App)
    //   in div (created by App)
    //   in App
        console.log(error, info.componentStack)
  }

    render () {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            // return this.props.fallback;
            // return <h1>Somethin went wrong</h1>;
            return (
          <Suspense fallback="">
                    <ErrorPage/>
                </Suspense>
            )
        }

        return this.props.children
  }
}

export default ErrorBoundary

// export default withTranslation()(ErrorBoundary)
// если мы хотим сделать перевод то для классового компонента исп-я withTranslation(), а не useTranslationт

// Then you can wrap a part of your component tree with it:
//
// <ErrorBoundary fallback={<p>Something went wrong</p>}>
//     <Profile />
// </ErrorBoundary>

// import React, { Component } from 'react';
//
// class ErrorBoundary extends Component {
//     state = {
//         hasError: false,
//     };
//
//     static getDerivedStateFromError(error) {
//         // Update state to show the fallback UI when an error occurs
//         return { hasError: true };
//     }
//
//     componentDidCatch(error, errorInfo) {
//         // You can log the error here or perform any additional actions
//         console.error(error, errorInfo);
//     }
//
//     render() {
//         if (this.state.hasError) {
//             // Fallback UI when an error occurs
//             return <div>Something went wrong.</div>;
//         }
//
//         return this.props.children;
//     }
// }
//
// export default ErrorBoundary;
