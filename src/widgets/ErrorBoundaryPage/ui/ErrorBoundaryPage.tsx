import classNames from 'shared/lib/classNames/classNames';
import style from './ErrorBoundaryPage.module.css';
import { useTranslation } from 'react-i18next';

interface ErrorBoundaryPageProps {
    className?: string;
}
export const ErrorBoundaryPage = ({ className }: ErrorBoundaryPageProps) => {
    const { t } = useTranslation();
    return <div className={classNames(style.ErrorBoundaryPage, {}, [className])}>{t('error')}</div>;
};
