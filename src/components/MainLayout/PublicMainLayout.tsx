import { Link, Outlet } from 'react-router-dom';

const PublicMainLayout = () => {
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '50px' }}>
                <Link to={'.'}>Login</Link>
                <Link to={'register'}>Registere</Link>
            </div>
            <footer>Footer</footer>
        </>
    );
};

export default PublicMainLayout;
