import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, ThemeContext } from '../ui/ThemeContext';
import { Theme } from '../ui/ThemeProvider';

interface UseThemeResult {
    theme: Theme;
    togleTheme: () => void;
}

const useTheme = (): UseThemeResult => {
    const { theme, setTheme } = useContext(ThemeContext);
    const togleTheme = () => {
        const NewTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
        setTheme(NewTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, NewTheme);
    };
    return { theme, togleTheme };
};

export default useTheme;
