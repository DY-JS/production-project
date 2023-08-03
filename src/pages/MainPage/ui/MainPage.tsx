import React, { Suspense } from 'react'
import { useTranslation } from 'react-i18next'
import { BugButton } from '../../../app/providers/ErrorBoundary'
import {Counter} from "../../../app/entities/Counter";

const MainPage = () => {
    const { t } = useTranslation('main')
    return (
      <div>
            <BugButton/>
            {t('Main')}
          <Counter/>
        </div>
    );
}

export default MainPage
