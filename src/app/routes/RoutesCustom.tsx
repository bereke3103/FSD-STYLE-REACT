import { useContext } from 'react';
import {
    Navigate,
    RouterProvider,
    createBrowserRouter,
} from 'react-router-dom';
import About from '../../pages/About/About';
import Home from '../../pages/Home/Home';
import NotFound from '../../pages/NotFound/NotFound';
import { AuthCtx } from '../../shared/Providers/AuthProvider';
import Login from '../../shared/components/PublicRoutes/Login';
import Register from '../../shared/components/PublicRoutes/Register';
import { AllRoles, ExtendedRouteObject } from '../../shared/types';

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
        element: <Navigate to={'kk/'} />,
        path: '/',
    },
    {
        path: ':lng/*',
        element: <Navigate to='home' />,
    },
    {
        path: ':lng/',
        element: <Navigate to='about' />,
    },
    {
        path: ':lng/',
        element: <Navigate to='notfound' />,
    },
    {
        path: ':lng/',
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
                access: ['admin'],
                element: <NotFound />,
                path: 'notfound',
            },
        ],
    },
];

const privateAccessRoles = (
    privateRoutes: ExtendedRouteObject[],
    role: AllRoles,
) => {
    const routesAccess = privateRoutes.forEach((route) => {
        if (route.access?.includes(role)) {
            return route;
        }
    });
    console.log('routesAccessroutesAccess:', routesAccess);
};

const RoutesCustom = () => {
    const { isAuth, role } = useContext(AuthCtx);
    const tokenLc = localStorage.getItem('token');
    console.log('rolerolerole:', role);
    const privateAccessRolesRRoutes = privateAccessRoles(privateRoutes, role);
    return (
        <>
            <RouterProvider
                router={createBrowserRouter(
                    isAuth && tokenLc ? privateRoutes : publicRoutes,
                )}
            />
        </>
    );
};

export default RoutesCustom;
