import { Link } from 'react-router-dom';
import classNames from 'shared/lib/classNames/classNames';
import style from './NavBar.module.css';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { useTranslation } from 'react-i18next';
import { LangSwitcher } from 'widgets/LangSwitcher';

interface NavBarProps {
    className?: string;
}
export const NavBar = ({ className }: NavBarProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(style.navbar, {}, [className])}>
            <div className={style.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>

            <div className={style.links}>
                <AppLink to={'/'} theme={AppLinkTheme.SECONDARY}>
                    {t('Home')}
                </AppLink>
                <AppLink to={'/about'} theme={AppLinkTheme.SECONDARY}>
                    {t('About')}
                </AppLink>
            </div>
        </div>
    );
};
