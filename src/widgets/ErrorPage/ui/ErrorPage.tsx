import React from 'react'
import { classNames } from '../../../shared/lib/classNames'
import { useTranslation } from 'react-i18next'
import cls from './ErrorPage.module.scss'

interface ErrorPageProps {
  className?: string
}

export const ErrorPage = ({ className }: ErrorPageProps) => {
  const reloadPage = () => {
    // eslint-disable-next-line
    location.reload()
    }

    const { t } = useTranslation()
    return (
      <div className={classNames(cls.ErrorPage, {}, [className ?? ''])}>
            <p>{t('Unpredictable error occurs')}</p>
            <button
              className={classNames(cls.ErrorPage, {}, [className ?? ''])}
              onClick={reloadPage}
            >
              {t('Reload Page')}
          </button>
        </div>
    )
}

export default ErrorPage
