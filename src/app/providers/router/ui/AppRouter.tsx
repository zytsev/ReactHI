import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RouteConfig } from 'shared/config/routeConfig/routeConfig';

const AppRouter = () => {
    return (
        <Suspense fallback={<div>...Loading</div>}>
            <Routes>
                {RouteConfig.map((elem) => (
                    <Route key={elem.path} path={elem.path} element={<div className='page-wrapper'>{elem.element}</div>} />
                ))}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;
