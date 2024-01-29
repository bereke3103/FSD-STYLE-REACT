import React from 'react';
import ReactDOM from 'react-dom/client';
import RoutesCustom from './app/routes/RoutesCustom.tsx';
import './index.css';
import AuthProvider from './shared/Providers/AuthProvider.tsx';
import LanguageProvider from './shared/Providers/LanguageProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        {/* <BrowserRouter> */}
        <AuthProvider>
            <LanguageProvider>
                {/* <Routes> */}
                <RoutesCustom />

                {/* </Routes> */}
            </LanguageProvider>
        </AuthProvider>
        {/* </BrowserRouter> */}
    </React.StrictMode>,
);
