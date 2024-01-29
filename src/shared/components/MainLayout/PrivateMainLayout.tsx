import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { AuthCtx } from '../../Providers/AuthProvider';
import {
    LanguageContext,
    LanguageType,
} from '../../Providers/LanguageProvider';

const PrivateMainLayout = ({ children }: { children: React.ReactNode }) => {
    const { logout } = useContext(AuthCtx);
    const { updateLanguage: updateLang } = useContext(LanguageContext);
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const { lng } = useParams();

    const [selectedOption, setSelectedOption] = useState<LanguageType>('kk');

    useEffect(() => {
        updateLang(selectedOption);
        navigate(pathname.replace(`${lng}`, selectedOption));
    }, [selectedOption]);

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '50px' }}>
                <Link to={'/kk/home'}>Home</Link>
                <Link to={'/kk/about'}>About</Link>
                <Link to={'/kk/notfound'}>Not Foundа</Link>
                <button onClick={() => logout()}>Logout</button>
                <div>
                    <select
                        style={{
                            fontSize: '30px',
                        }}
                        id='selectOption'
                        value={selectedOption}
                        onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                            setSelectedOption(e.target.value as LanguageType);
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
                </div>
            </div>
            {children}
            <footer>Footer</footer>
        </>
    );
};

export default PrivateMainLayout;
