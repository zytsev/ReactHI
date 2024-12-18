import classNames from 'shared/lib/classNames/classNames';
import style from './NotFoundPage.module.css';
import { useTranslation } from 'react-i18next';

interface NotFoundPageProps {
    className?: string;
}
export const NotFoundPage = ({ className }: NotFoundPageProps) => {
    const { t } = useTranslation();
    return <div className={classNames(style.NotFoundPage, {}, [className])}>{t('Page not found')}</div>;
};
