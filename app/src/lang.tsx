import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './languages/en.json';
import id from './languages/id.json';
i18n.use(initReactI18next).init({
    fallbackLng: localStorage.getItem('lang') || 'en',
    lng: localStorage.getItem('lang') || 'en',
    resources: {
        en: {
            translations: en
        },
        id: {
            translations: id
        }
    },
    ns: ['translations'],
    defaultNS: 'translations'
});

i18n.languages = ['en', 'id'];
export default i18n;