import { useContext } from 'react';
import { AuthCtx } from '../../Providers/AuthProvider';
import ChangeLanguage from '../changeLanguage/ChangeLanguage';
import LinkCustoms from '../linkCustoms/LinkCustoms';
import logo from '../../../assets/logo.svg';
import { LogoutOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Select } from 'antd';
import { Header } from '../../../widgets/header';
const PrivateMainLayout = ({ children }: { children: React.ReactNode }) => {
    const { logout } = useContext(AuthCtx);

    return (
        <>
            <Header />
            {/* <div style={{ display: 'flex', flexDirection: 'row', gap: '50px' }}>
                <LinkCustoms />

                <button onClick={() => logout()}>Logout</button>
                <div>
                    <ChangeLanguage />
                </div>
            </div>
            {children}
            <footer>Footer</footer> */}
        </>
    );
};

export default PrivateMainLayout;
