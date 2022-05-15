import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import './i18n';


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
