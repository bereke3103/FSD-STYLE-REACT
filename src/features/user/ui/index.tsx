import { UserOutlined } from '@ant-design/icons';
import React, { useContext, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { LanguageContext } from '../../../shared/Providers/LanguageProvider';

export const User = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const { lng } = useParams();

    return (
        <UserOutlined
            onClick={() => {
                navigate(`/${lng}/profile`);
            }}
            style={{ color: '#04a3d9' }}
        />
    );
};
