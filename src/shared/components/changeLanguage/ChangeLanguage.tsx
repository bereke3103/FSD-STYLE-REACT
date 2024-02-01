import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import {
    LanguageContext,
    LanguageType,
} from '../../Providers/LanguageProvider';

const ChangeLanguage = () => {
    const [selectedOption, setSelectedOption] = useState<LanguageType>('kk');

    const { i18n } = useTranslation();
    const { updateLanguage: updateLang } = useContext(LanguageContext);

    const navigate = useNavigate();
    const { pathname } = useLocation();

    const { lng } = useParams();

    useEffect(() => {
        updateLang(selectedOption);
        navigate(pathname.replace(`${lng}`, selectedOption));
    }, [lng, navigate, pathname, selectedOption, updateLang]);

    return (
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
    );
};

export default ChangeLanguage;
