import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
// import i18n from "i18next";
// import {I18nextProvider, initReactI18next} from "react-i18next";
// import LanguageDetector from 'i18next-browser-languagedetector';
// import HttpApi from 'i18next-http-backend';
// import Backend from "i18next-xhr-backend";
// import Backend from "i18next-http-backend";
import './i18n';
// import i18n from './i18n'


// i18n
//     .use(initReactI18next) // passes i18n down to react-i18next
//     .use(LanguageDetector)
//     .use(HttpApi)
//     .init({
//         debug: true,
//         // supportedLngs: ['en','ru','fr','de','ua'],
//         supportedLngs: ['en', 'ru'],
//         fallbackLng: "en",
//         detection: {
//             // order: ['cookie', 'localStorage', 'htmlTag', 'path', 'subdomain'],
//             order: ['cookie'],
//             caches: ['cookie']
//         },
//         backend: {
//             // loadPath: '/assets/locales/{{lng}}/translation.json',
//             loadPath: '/locales/{{lng}}/translation.json',
//         },
//     });

// i18n
//     // .use(Backend)
//     .use(HttpApi)
//     .use(initReactI18next)
//     .init({
//         lng: ['en', 'ru'],
//         fallbackLng: "en",
//         debug: true,
//         interpolation: {
//             escapeValue: false
//         }
//     });
const Loader = () => <div>loading...</div>;

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            {/*<I18nextProvider i18n={i18n}>*/}
            <Suspense fallback={<Loader/>}>
                <App/>
            </Suspense>
            {/*</I18nextProvider>*/}
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
