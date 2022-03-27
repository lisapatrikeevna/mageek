import React from 'react';
import cl from './about.module.css'
import style from './../common.module.css'
import imgBg from "../../../assets/aboutBg.jpg";
import Offer from "../../common/offer/offer";

const About = () => {
    return (
        <div className={style.container}>
            <Offer img={imgBg} title={'О Mageek Soft'} text={'Профессионализм и клиентоориентированный подход к делу, начиная с первого контакта и до завершения проекта'} linkPath={'/jjj'}/>
        </div>
    );
};

export default About;