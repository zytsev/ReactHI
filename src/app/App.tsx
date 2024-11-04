import 'app/styles/index.css';
import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import classNames from '../shared/lib/classNames/classNames';
import useTheme from './providers/ThemeProvider/lib/useTheme';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
export enum Theme {
    LIGHT = 'light',
    DARK = 'dark',
}

function App() {
    const { theme, togleTheme } = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={togleTheme}>Theme</button>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Suspense fallback={<div>...Loading</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPage />} />
                    <Route path={'/'} element={<MainPage />} />
                </Routes>
            </Suspense>
        </div>
    );
}

export default App;
