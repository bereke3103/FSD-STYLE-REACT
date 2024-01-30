import i18n from 'i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import translationEN from '../../../public/locales/en/translation';
import translationKK from '../../../public/locales/kk/translation';
import translationRU from '../../../public/locales/ru/translation';


const resources = {
    en: {
        translation: translationEN,
    },
    kk: {
        translation: translationKK,
    },
    ru: {
        translation: translationRU,
    }
}


export const i18Instance = i18n.createInstance();

i18Instance.use(HttpBackend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init<unknown>({
        lng: 'kk',
        resources,
        ns: ['translation','common', 'about'],
        defaultNS: "translation",
        debug: true,
        detection: {
            order: ['queryString', 'cookie'],
            caches: ['cookie']
        },
        react: {
            useSuspense: true,
        },
        supportedLngs: ['kk', 'ru', 'en'],
        interpolation: {
            escapeValue: true,
        },
    });