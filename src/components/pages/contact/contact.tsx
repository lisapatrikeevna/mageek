import React from 'react';
import cl from './contact.module.css'
import style from './../common.module.css'
import imgBg from "../../../assets/contactBg.jpg";
import map from "../../../assets/images/geo.jpg";
import Offer from "../../common/offer/offer";
import {BottomBlock} from "../home/home";


type propsType={
    theme:boolean
}

const Contact = ({theme}:propsType) => {
    return (
        <>
            <div className={style.container}>
                <Offer img={imgBg} title={'Контакты'}
                       text={'Если есть что-то, о чем вы хотите поговорить, пожалуйста, не стесняйтесь связаться с нами.'}
                       linkPath={'/jjj'}/>
                <div className={cl.mapsSection}>
                    <div className={cl.textBlockWrap}>
                        <div className={cl.textBlock}>
                            <p className={cl.title}>здравствуй!</p>
                            <h2>КАК мы можем вам помочь?</h2>
                            <p className={cl.desc}>Если есть что-то, о чем вы хотите поговорить, пожалуйста, не
                                стесняйтесь
                                связаться с нами.
                                Даже если вы просто хотите поздороваться, мы с нетерпением ждём от вас сообщения!</p>
                        </div>
                        <button className={cl.contactBtn}><p>НАПИСАТЬ НАМ</p></button>
                    </div>
                    <div className={cl.mapWrap}>
                        <img src={map} alt="map"/>
                    </div>
                </div>
                <div className={cl.infoWrap}>
                    <div className={cl.titleWrap}>
                        <p>Контакты</p>
                        <h3>связаться с нами</h3>
                    </div>
                    <div className={cl.info}>
                        <div className={cl.phonesWrap}>
                            <h4>Телефон</h4>
                            <div className={cl.phones}>
                                <a href="tel:+380955555555">+ 38 (095) 555 55 55</a>
                                <a href="tel:+380955555555">+ 38 (095) 555 55 55</a>
                                <a href="tel:+380955555555">+ 38 (095) 555 55 55</a>
                            </div>
                        </div>
                        <div className={cl.mailsWrap}>
                            <h4>Почта</h4>
                            <div className={cl.mails}>
                                <a href="mailto:alison.mageeksoft@gmail.com">alison.mageeksoft@gmail.com</a>
                                <a href="mailto:alison.mageeksoft@gmail.com">alison.mageeksoft@gmail.com</a>
                                <a href="mailto:alison.mageeksoft@gmail.com">alison.mageeksoft@gmail.com</a>
                            </div>
                        </div>
                        <div className={cl.adresWrap}>
                            <h4>Адрес офиса</h4>
                            <div className={cl.adres}>
                                <p>Украина, г. Днепр,</p>
                                <p> Днепропетровская область,</p>
                                <p>ул. Дмитрия Яворницкого 59а</p>
                            </div>
                        </div>
                        <div className={cl.askWrap}>
                            <h4>Хотите работать с нами?</h4>
                            <div className={cl.ask}>
                                <a href="mailto:alison.mageeksoft@gmail.com">alison.mageeksoft@gmail.com</a>
                                <a href="tel:+380955555555">+ 38 (095) 555 55 55</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BottomBlock theme={theme}/>
        </>
    );
};

export default Contact;
