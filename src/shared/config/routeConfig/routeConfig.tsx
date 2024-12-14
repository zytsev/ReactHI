import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
}

export const RoutPaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
};

export const RouteConfig = [
    { path: RoutPaths.main, element: <MainPage /> },
    { path: RoutPaths.about, element: <AboutPage /> },
];
