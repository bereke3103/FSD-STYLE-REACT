import {
    BulbFilled,
    PhoneFilled,
    PoweroffOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Select } from 'antd';
import logo from '../../../assets/logo.svg';
import './Header.scss';
import { Zoiper } from '../../../features/zoiper';
import { UserName } from '../../../features/username';
import { Logout } from '../../../features/logout';
import { User } from '../../../features/user';
import { Darktheme } from '../../../features/darktheme';
import { UserSettings } from '../../../entities';

export const Header = () => {
    return (
        <header className='header'>
            <div className='header-logo'>
                <div className='logo'>
                    <img src={logo} alt='logo' />
                </div>
                <div className='text'>
                    <span className='text-support'>
                        Служба технической поддержки
                    </span>
                    <span className='text-number'>+7 7172 67-71-78</span>
                </div>
            </div>
            <div className='header-settings'>
                <Zoiper />
                <UserName />
                <UserSettings />
            </div>
        </header>
    );
};
