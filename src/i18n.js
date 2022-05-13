// import i18n from "i18next";
// import Backend from "i18next-http-backend";
// import LanguageDetector from "i18next-browser-languagedetector";
// import {initReactI18next} from "react-i18next";
//
//
// const languages = ['en', 'ru'];
//
//
// i18n
//     // .use(HttpApi)
//     .use(Backend)
//     .use(LanguageDetector)
//     .use(initReactI18next) // passes i18n down to react-i18next
//     .init({
//         // lng: "en",
//         fallbackLng: "ru", // use et if detected lng is not available
//         // saveMissing: true, // send not translated keys to endpoint
//         debug: true,
//         whitelist: languages,
//         detection: {
//             // order: ['cookie', 'localStorage', 'htmlTag', 'path', 'subdomain'],
//             order: ['cookie'],
//             caches: ['cookie']
//         },
//         interpolation: {
//             escapeValue: false, // not needed for react as it escapes by default
//         },
//         // backend: {
//         //     // for all available options read the backend's repository readme file
//         //     loadPath: '/locales/{{lng}}/{{ns}}.json'
//         // },
//         //
//         // react: {
//         //     useSuspense: false
//         // }
//     } );
// export default i18n;
//
//
// // https://proglib.io/p/internacionalizaciya-prilozheniy-react-s-i18next-2020-10-12


import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
// import rr from './../public/locales/en/translation.json'

i18n
    // Подключение бэкенда i18next
    .use(Backend)
    // Автоматическое определение языка
    .use(LanguageDetector)
    // модуль инициализации
    .use (initReactI18next)
    .init({
        // Стандартный язык
        fallbackLng: 'ru',
        debug: true,
        // Распознавание и кэширование языковых кук
        detection: {
            // order: ['queryString', 'cookie'],
            order: ['cookie', 'localStorage', 'htmlTag', 'path', 'subdomain'],
            cache: ['cookie']
        },
        interpolation: {
            escapeValue: false
        },
        backend: {
            // for all available options read the backend's repository readme file
            loadPath: './../public/locales/{{lng}}/{{ns}}.json'
        },
        react: {
            wait: true,
        }
    })

export default i18n;
