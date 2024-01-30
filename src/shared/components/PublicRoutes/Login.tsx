import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { AuthCtx } from '../../Providers/AuthProvider';
import PublicMainLayout from '../MainLayout/PublicMainLayout';
import { useTranslation } from 'react-i18next';
import {
    LanguageContext,
    LanguageType,
} from '../../Providers/LanguageProvider';
const Login = () => {
    const [selectedOption, setSelectedOption] = useState<LanguageType>('kk');
    const { updateLanguage: updateLang } = useContext(LanguageContext);
    const { loading, login } = useContext(AuthCtx);
    const { t, i18n } = useTranslation();
    const { lng } = useParams();
    const { pathname } = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        updateLang(selectedOption);
        navigate(pathname.replace(`${lng}`, selectedOption));
    }, [lng, navigate, pathname, selectedOption, updateLang]);

    if (loading) {
        return <h1>Идет загрузка</h1>;
    }

    return (
        <PublicMainLayout>
            <h3>{t('translation.button')}</h3>
            <h3>{t('fruits.apple')}</h3>
            <div>{t('login')}</div>
            <button
                style={{ padding: 50, fontSize: 50 }}
                onClick={() => login()}
            >
                {t('login')}
            </button>
            <select
                style={{
                    fontSize: '30px',
                }}
                id='selectOption'
                value={selectedOption}
                onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                    setSelectedOption(e.target.value as LanguageType);
                    i18n.changeLanguage(e.target.value);
                }}
            >
                <option
                    style={{
                        fontSize: '30px',
                    }}
                    value='kk'
                >
                    KAZ
                </option>
                <option
                    style={{
                        fontSize: '30px',
                    }}
                    value='ru'
                >
                    RU
                </option>
                <option
                    style={{
                        fontSize: '30px',
                    }}
                    value='en'
                >
                    EN
                </option>
            </select>
        </PublicMainLayout>
    );
};

export default Login;
