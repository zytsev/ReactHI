import { createContext } from 'react';
import { Theme } from './ThemeProvider';

export interface ThemeContextPops {
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
}
export const ThemeContext = createContext<ThemeContextPops>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';

export { Theme };
