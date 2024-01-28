import React from 'react';
import ReactDOM from 'react-dom/client';
import AuthProvider from './app/Providers/AuthProvider.tsx';
import LangProvider from './app/Providers/LangProvider.tsx';
import RoutesCustom from './app/routes/RoutesCustom.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <LangProvider>
                    {/* <Routes> */}
                    <RoutesCustom />

                    {/* </Routes> */}
                </LangProvider>
            </AuthProvider>
        </BrowserRouter>
    </React.StrictMode>,
);
