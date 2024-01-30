import React from 'react';
import ReactDOM from 'react-dom/client';
import RoutesCustom from './app/routes/RoutesCustom.tsx';
import './index.css';
import AuthProvider from './shared/Providers/AuthProvider.tsx';
import LanguageProvider from './shared/Providers/LanguageProvider.tsx';
import { I18nextProvider } from 'react-i18next';
import { i18Instance } from './app/config/i18n.ts';
// import './app/config/i18n.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        {/* <BrowserRouter> */}
        <AuthProvider>
            <I18nextProvider i18n={i18Instance}>
                <LanguageProvider>
                    {/* <Routes> */}
                    <RoutesCustom />
                </LanguageProvider>
                {/* </Routes> */}
            </I18nextProvider>
        </AuthProvider>
        {/* </BrowserRouter> */}
    </React.StrictMode>,
);
