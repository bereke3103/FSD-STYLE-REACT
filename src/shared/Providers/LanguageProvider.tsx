import { ReactNode, createContext, useState } from 'react';

export type LanguageType = 'kk' | 'ru' | 'en';

export const LanguageContext = createContext<{
    defaultLanguage: string;
    updateLanguage: (value: LanguageType) => void;
}>({
    defaultLanguage: 'kk',
    updateLanguage: (value: LanguageType) => {},
});

const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [defaultLanguage, setLang] = useState<LanguageType>('kk');

    const updateLanguage = (value: LanguageType) => setLang(value);

    return (
        <LanguageContext.Provider value={{ defaultLanguage, updateLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export default LanguageProvider;
