import 'app/styles/index.css';
import classNames from '../shared/lib/classNames/classNames';
import useTheme from './providers/ThemeProvider/lib/useTheme';
import { AppRouter } from './providers/router';
import { NavBar } from 'widgets/NavBar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
export enum Theme {
    LIGHT = 'light',
    DARK = 'dark',
}

function App() {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback='...loading'>
                <NavBar />
                <div className='content-page'>
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}

export default App;
