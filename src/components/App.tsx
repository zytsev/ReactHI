import { Suspense, useContext, useState } from 'react';
import styles from './styleApp.module.css';
import { Route, Routes } from 'react-router-dom';
import AboutPageLazy from '../pages/AboutPage/AboutPageLazy';
import MainPageLazy from '../pages/MainPage/MainPageLazy';
import { Link } from 'react-router-dom';
import '../styles/index.css';
import useTheme from '../theme/useTheme';
import classNames from '../helpers/classNames/classNames';
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
                    <Route path={'/about'} element={<AboutPageLazy />} />
                    <Route path={'/'} element={<MainPageLazy />} />
                </Routes>
            </Suspense>
        </div>
    );
}

export default App;
