import { createContext, useState } from 'react';

export const AuthCtx = createContext<{
    isAuth: boolean;
    login: () => void;
    loading: boolean;
}>({
    isAuth: false,
    login: () => {},
    loading: false,
});

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [isAuth, setIsAuth] = useState(false);
    const [loading, setLoading] = useState(false);

    const login = () => {
        setLoading(true);
        setTimeout(() => {
            setIsAuth(true);
            setLoading(false);
        }, 2000);
    };

    return (
        <AuthCtx.Provider value={{ isAuth, login, loading }}>
            {children}
        </AuthCtx.Provider>
    );
};

export default AuthProvider;
