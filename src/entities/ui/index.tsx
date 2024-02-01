import React from 'react';
import { Darktheme } from '../../features/darktheme';
import { User } from '../../features/user';
import { Logout } from '../../features/logout';
import ChangeLanguage from '../../shared/components/changeLanguage/ChangeLanguage';

export const UserSettings = () => {
    return (
        <div className='user-setting'>
            <Darktheme />
            <User />
            <Logout />
        </div>
    );
};
