import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AuthCtx } from '../../Providers/AuthProvider';
import PublicMainLayout from '../MainLayout/PublicMainLayout';

const Login = () => {
    const { loading, login } = useContext(AuthCtx);

    const params = useParams();
    console.log('paramsparams:', params);

    if (loading) {
        return <h1>Идет загрузка</h1>;
    }

    return (
        <PublicMainLayout>
            <div>Login</div>
            <button
                style={{ padding: 50, fontSize: 50 }}
                onClick={() => login()}
            >
                Login
            </button>
        </PublicMainLayout>
    );
};

export default Login;
