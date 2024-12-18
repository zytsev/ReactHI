import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND = 'not_found',
}

export const RoutPaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.NOT_FOUND]: '*',
};

export const RouteConfig = [
    { path: RoutPaths.main, element: <MainPage /> },
    { path: RoutPaths.about, element: <AboutPage /> },
    { path: RoutPaths.not_found, element: <NotFoundPage /> },
];
