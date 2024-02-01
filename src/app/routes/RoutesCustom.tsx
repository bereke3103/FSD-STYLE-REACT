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
import Admin from '../../pages/Admin/Admin';
import AdminItem from '../../pages/Admin/AdminItem';
import Agency from '../../pages/agency/Agency';
import AgencyItem from '../../pages/agency/AgencyItem';
import Appeal from '../../pages/appeal/Appeal';
import AppealItem from '../../pages/appeal/AppealItem';
import Incident from '../../pages/incident/Incident';
import IncidentItem from '../../pages/incident/IncidentItem';
import Initiator from '../../pages/initiator/Initiator';
import InitiatorItem from '../../pages/initiator/InitiatorItem';
import Organization from '../../pages/organization/Organization';
import OrganizationItem from '../../pages/organization/OrganizationItem';
import Postal from '../../pages/postal/Postal';
import PostalItem from '../../pages/postal/PostalItem';
import Problem from '../../pages/problem/Problem';
import ProblemItem from '../../pages/problem/ProblemItem';
import AppealReport from '../../pages/AppealReport';
import Article from '../../pages/Article';
import Profile from '../../pages/Profile';

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
        access: ['analytic', 'admin'],
        path: ':lng/',
        element: <Navigate to='admin' />,
    },
    {
        access: ['analytic', 'admin'],
        path: ':lng/',
        element: <Navigate to='agency' />,
    },
    {
        access: ['analytic', 'admin'],
        path: ':lng/',
        element: <Navigate to='appeal' />,
    },
    {
        access: ['analytic', 'admin'],
        path: ':lng/',
        element: <Navigate to='incident' />,
    },
    {
        access: ['analytic', 'admin'],
        path: ':lng/',
        element: <Navigate to='initiator' />,
    },
    {
        access: ['analytic', 'admin'],
        path: ':lng/',
        element: <Navigate to='organization' />,
    },
    {
        access: ['analytic', 'admin'],
        path: ':lng/',
        element: <Navigate to='postal' />,
    },
    {
        access: ['analytic', 'admin'],
        path: ':lng/',
        element: <Navigate to='problem' />,
    },
    {
        access: ['analytic', 'admin'],
        path: ':lng/',
        element: <Navigate to='appealreport' />,
    },
    {
        access: ['analytic', 'admin'],
        path: ':lng/',
        element: <Navigate to='article' />,
    },
    {
        access: ['analytic', 'admin'],
        path: ':lng/',
        element: <Navigate to='profile' />,
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
            {
                path: 'admin',
                access: ['analytic', 'admin'],
                element: <Admin />,
            },
            {
                path: 'admin/:id',
                access: ['analytic', 'admin'],
                element: <AdminItem />,
            },
            {
                path: 'agency',
                access: ['analytic', 'admin'],
                element: <Agency />,
            },
            {
                path: 'agency/:id',
                access: ['analytic', 'admin'],
                element: <AgencyItem />,
            },
            {
                path: 'appeal',
                access: ['analytic', 'admin'],
                element: <Appeal />,
            },
            {
                path: 'appeal/:id',
                access: ['analytic', 'admin'],
                element: <AppealItem />,
            },
            {
                path: 'incident',
                access: ['analytic', 'admin'],
                element: <Incident />,
            },
            {
                path: 'incident/:id',
                access: ['analytic', 'admin'],
                element: <IncidentItem />,
            },
            {
                path: 'initiator',
                access: ['analytic', 'admin'],
                element: <Initiator />,
            },
            {
                path: 'initiator/:id',
                access: ['analytic', 'admin'],
                element: <InitiatorItem />,
            },
            {
                path: 'organization',
                access: ['analytic', 'admin'],
                element: <Organization />,
            },
            {
                path: 'organization/:id',
                access: ['analytic', 'admin'],
                element: <OrganizationItem />,
            },
            {
                path: 'postal',
                access: ['analytic', 'admin'],
                element: <Postal />,
            },
            {
                path: 'postal/:id',
                access: ['analytic', 'admin'],
                element: <PostalItem />,
            },
            {
                path: 'problem',
                access: ['analytic', 'admin'],
                element: <Problem />,
            },
            {
                path: 'problem/:id',
                access: ['analytic', 'admin'],
                element: <ProblemItem />,
            },
            {
                path: 'appealreport',
                access: ['analytic', 'admin'],
                element: <AppealReport />,
            },
            {
                path: 'article',
                access: ['analytic', 'admin'],
                element: <Article />,
            },
            {
                path: 'profile',
                access: ['analytic', 'admin'],
                element: <Profile />,
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

    console.log('privateRoutes:', privateRoutes);
    const { availableRoutes } = useAvailableRoutes(privateRoutes, accessGroups);

    console.log('availableRoutes:', availableRoutes);

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
