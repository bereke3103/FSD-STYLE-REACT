import { Link } from 'react-router-dom';

const PublicMainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '50px' }}>
                <Link to={'/kk/login'}>Login</Link>
                <Link to={'/kk/register'}>Registere</Link>
            </div>
            {children}
            <footer>Footer</footer>
        </>
    );
};

export default PublicMainLayout;
