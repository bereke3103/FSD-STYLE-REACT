import { createContext, useState } from 'react';
import { AllRoles } from '../types';

export const AuthCtx = createContext<{
    isAuth: boolean;
    login: () => void;
    loading: boolean;
    logout: () => void;
    role: AllRoles;
}>({
    isAuth: false,
    login: () => {},
    loading: false,
    logout: () => {},
    role: 'admin',
});

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [isAuth, setIsAuth] = useState(true);
    const [loading, setLoading] = useState(false);
    const [role, setRole] = useState<AllRoles>('analytic');

    const login = () => {
        localStorage.setItem('token', 'true');
        setLoading(true);
        setTimeout(() => {
            setIsAuth(true);
            setLoading(false);
        }, 2000);
    };

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('token');
    };

    return (
        <AuthCtx.Provider value={{ isAuth, login, loading, logout, role }}>
            {children}
        </AuthCtx.Provider>
    );
};

export default AuthProvider;
