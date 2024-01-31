import { useCallback, useContext, useMemo } from 'react';
import {
    Navigate,
    RouterProvider,
    createBrowserRouter,
} from 'react-router-dom';
import About from '../../pages/Draft/About/About';
import Home from '../../pages/Draft/Home/Home';
import NotFound from '../../pages/Draft/NotFound/NotFound';
import { AuthCtx } from '../../shared/Providers/AuthProvider';
import Login from '../../shared/components/PublicRoutes/Login';
import Register from '../../shared/components/PublicRoutes/Register';
import {
    AllRoles,
    ExtendedNonIndexRouteObject,
    ExtendedRouteObject,
} from '../../shared/types';
import { useTranslation } from 'react-i18next';

export const publicRoutes: ExtendedRouteObject[] = [
    {
        path: '/',
        element: <Navigate to={'kk/'} />,
    },
    {
        path: ':lng/*',
        element: <Navigate to='login' />,
    },
    {
        path: ':lng/',
        element: <Navigate to='login' />,
    },
    {
        path: ':lng/',
        children: [
            {
                element: <Login />,
                path: 'login',
            },
            {
                element: <Register />,
                path: 'register',
            },
        ],
    },
];

export const privateRoutes: ExtendedRouteObject[] = [
    {
        access: ['analytic', 'admin'],
        element: <Navigate to={'kk/'} />,
        path: '/',
    },
    {
        access: ['analytic', 'admin'],
        path: ':lng/*',
        element: <Navigate to='home' />,
    },
    {
        access: ['admin'],
        path: ':lng/',
        element: <Navigate to='about' />,
    },
    {
        access: ['analytic', 'admin'],
        path: ':lng/',
        element: <Navigate to='notfound' />,
    },
    {
        path: ':lng/',
        access: ['analytic', 'admin'],
        children: [
            {
                access: ['analytic', 'admin'],
                element: <Home />,
                path: 'home',
            },
            {
                access: ['admin'],
                element: <About />,
                path: 'about',
            },
            {
                access: ['admin', 'analytic'],
                element: <NotFound />,
                path: 'notfound',
            },
        ],
    },
];

const useAvailableRoutes = (
    privateRoutes: ExtendedRouteObject[],
    accessGroups: AllRoles[],
) => {
    const checkAccess = useCallback(
        (routes: ExtendedRouteObject[], accessValue: AllRoles[]) => {
            const result: ExtendedRouteObject[] = [];

            routes.forEach((route) => {
                if (
                    route.access?.length &&
                    route.access.some((acc) => accessValue.includes(acc))
                ) {
                    const newRoute: ExtendedRouteObject = { ...route };

                    if (route.children?.length) {
                        newRoute.children = checkAccess(
                            route.children,
                            accessValue,
                        ) as ExtendedNonIndexRouteObject[] | undefined;
                    }
                    result.push(newRoute);
                }
            });

            return result;
        },
        [],
    );

    const availableRoutes = useMemo(() => {
        return checkAccess(privateRoutes, accessGroups);
    }, [accessGroups, checkAccess, privateRoutes]);

    return { availableRoutes };
};

const RoutesCustom = () => {
    const accessGroups: AllRoles[] = ['analytic'];

    const { isAuth, role } = useContext(AuthCtx);
    const { t } = useTranslation();
    const tokenLc = localStorage.getItem('token');


    console.log("privateRoutes:", privateRoutes)
    const { availableRoutes } = useAvailableRoutes(privateRoutes, accessGroups);

    console.log('availableRoutes:', availableRoutes);

    return (
        <>
            <h1>{t('about')}</h1>
            <RouterProvider
                router={createBrowserRouter(
                    isAuth && tokenLc ? availableRoutes : publicRoutes,
                )}
            />
        </>
    );
};

export default RoutesCustom;
