import classNames from 'shared/lib/classNames/classNames';
import style from './LangSwitcher.module.css';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

interface LangSwitcherProps {
    className?: string;
}
export const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();
    const changlang = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'pt' : 'en');
    };
    return (
        <Button onClick={changlang} theme={ThemeButton.CLEAR} className={classNames(style.LangSwitcher, {}, [className])}>
            {t('lang')}
        </Button>
    );
};
