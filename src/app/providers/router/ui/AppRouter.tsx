import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RouteConfig } from 'shared/config/routeConfig/routeConfig';
import { Loader } from 'widgets/Loader';

const AppRouter = () => {
    return (
        <Routes>
            {RouteConfig.map((elem) => (
                <Route
                    key={elem.path}
                    path={elem.path}
                    element={
                        <Suspense fallback={<Loader />}>
                            <div className='page-wrapper'>{elem.element}</div>
                        </Suspense>
                    }
                />
            ))}
        </Routes>
    );
};

export default AppRouter;
