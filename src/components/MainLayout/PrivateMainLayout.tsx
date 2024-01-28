import { Link, Outlet } from 'react-router-dom';

const PrivateMainLayout = () => {
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '50px' }}>
                <Link to={'.'}>Main Page</Link>
                <Link to={'about'}>About</Link>
                <Link to={'home'}>Home</Link>
                <Link to={'notfound'}>Not Foundа</Link>
            </div>
            <Outlet />
            <footer>Footer</footer>
        </>
    );
};

export default PrivateMainLayout;
