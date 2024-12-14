import classNames from 'shared/lib/classNames/classNames';
import style from './ThemeSwitcher.module.css';
import { useTheme, Theme } from 'app/providers/ThemeProvider';
import DarkTheme from 'shared/assets/icons/moon.svg';
import LightTheme from 'shared/assets/icons/sun-color-icon.svg';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
    className?: string;
}
export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, togleTheme } = useTheme();
    return (
        <Button theme={ThemeButton.CLEAR} onClick={togleTheme} className={classNames(style.ThemeSwitcher, {}, [className])}>
            {theme === Theme.DARK ? <DarkTheme width={24} height={24} /> : <LightTheme width={24} height={24} />}
        </Button>
    );
};
