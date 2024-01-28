import { useContext } from 'react';
import {
    IndexRouteObject,
    IndexRouteProps,
    PathRouteProps,
    Route,
    Routes,
} from 'react-router-dom';
import App from '../../App';
import PrivateMainLayout from '../../components/MainLayout/PrivateMainLayout';
import About from '../../pages/About/About';
import Home from '../../pages/Home/Home';
import NotFound from '../../pages/NotFound/NotFound';
import { AuthCtx } from '../Providers/AuthProvider';
import Login from '../../components/PublicRoutes/Login';
import Register from '../../components/PublicRoutes/Register';

// export const publicRoutes: RouteObject[] = [
//     {
//         path: '/',
//         element: <Navigate to='/kk/' />,
//     },
//     {
//         path: ':lng/*',
//         element: <Navigate to='login' />,
//     },
//     {
//         path: ':lng/ ',
//         element: <Navigate to='login' />,
//     },
//     {
//         path: ':lng/*',
//         children: [
//             {
//                 Component: lazy(
//                     () => import('../../components/PublicRoutes/Login'),
//                 ),
//                 path: 'login',
//             },
//             {
//                 Component: lazy(
//                     () => import('../../components/PublicRoutes/Register'),
//                 ),
//                 path: 'register',
//             },
//         ],
//     },
// ];

// export const privateRoutes: ExtendedRouteObject[] = [
//     {
//         access: ['admin'],
//         // element: <Navigate to='kk/profile' />,
//         element: <Home />,
//         path: '/',
//     },

//     {
//         access: ['admin'],
//         // element: <Navigate to='profile' />,
//         element: <About />,
//         path: ':lng/*',
//     },

//     {
//         access: ['admin'],
//         path: ':lng/*',
//         Component: lazy(() => import('../../components/MainLayout/MainLayout')),
//         children: [
//             {
//                 access: ['admin'],
//                 Component: lazy(() => import('../../pages/About/About')),
//                 path: '/:lng/*',
//             },
//             {
//                 access: ['admin'],
//                 Component: lazy(() => import('../../pages/Home/Home')),
//                 path: '/:lng/*',
//             },
//         ],
//     },
// ];

const PrivateRotes = [
    {
        index: true,
        element: <App />,
    },
    {
        path: 'about',
        element: <About />,
    },
    {
        path: 'home',
        element: <Home />,
    },
    {
        path: '*',
        element: <NotFound />,
    },
];

const PublicRotes = [
    {
        index: true,
        element: <Login />,
    },
    {
        path: 'register',
        element: <Register />,
    },
];

const RoutesCustom = () => {
    const { isAuth } = useContext(AuthCtx);
    return (
        <Routes>
            <>
                {/* <RouterProvider
                router={createBrowserRouter(
                    isAuth ? privateRoutes : publicRoutes,
                )}
            /> */}
                {/* <RouterProvider router={createBrowserRouter( publicRoutes)}/> */}
                {/* <MainLayout/> */}
            </>
            {isAuth ? (
                <>
                    <Route path='/kk' element={<PrivateMainLayout />}>
                        {PrivateRotes.map((item) => (
                            <Route
                                index={item.index}
                                element={item.element}
                                path={item.path}
                            />
                        ))}
                    </Route>
                </>
            ) : (
                <>
                    {/* <Route> */}
                    <Route path='/kk' element={<PrivateMainLayout />}>
                        {PublicRotes.map((item) => (
                            <Route
                                index={item.index}
                                element={item.element}
                                path={item.path}
                            />
                        ))}
                    </Route>
                    {/* </Route> */}
                </>
            )}

            {/* <Route index element={<App />} />
                <Route path='about' element={<About />} />
                <Route path='home' element={<Home />} />
                <Route path='*' element={<NotFound />} /> */}
        </Routes>
    );
};

export default RoutesCustom;
