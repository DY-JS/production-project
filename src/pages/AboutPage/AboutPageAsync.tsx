import React, {lazy} from 'react';

export const AboutPageAsync = lazy(() => import('./AboutPage'))
// для задержки чтобы отобразить Suspend
// export const AboutPageAsync = lazy(() => new Promise(resolve => {
//         //@ts-ignore
//     setTimeout(() =>resolve(import('./AboutPage')), 1000 )
//     }) )