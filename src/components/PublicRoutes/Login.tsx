import { useContext } from 'react';
import { AuthCtx } from '../../app/Providers/AuthProvider';

const Login = () => {
    const { loading, login } = useContext(AuthCtx);

    if (loading) {
        return <h1>Идет загрузка</h1>;
    }

    return (
        <>
            <div>Login</div>
            <button
                style={{ padding: 50, fontSize: 50 }}
                onClick={() => login()}
            >
                Login
            </button>
        </>
    );
};

export default Login;
