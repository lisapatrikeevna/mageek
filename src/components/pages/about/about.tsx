import React from 'react';
import cl from './about.module.css'
import style from './../common.module.css'
import imgBg from "../../../assets/aboutBg.jpg";
import Offer from "../../common/offer/offer";
import {DeckWithImgSection} from "../services/services";
import img from './../../../assets/images/videoExampleImg.png'

const About = () => {
    return (
        <div className={style.container}>
            <Offer img={imgBg} title={'О Mageek Soft'} text={'Профессионализм и клиентоориентированный подход к делу, ' +
                'начиная с первого контакта и до завершения проекта'} linkPath={'/jjj'}/>
            <DeckWithImgSection title={'наши достижения'} titleMain={'МЫ ПОЛУЧАЕМ УДОВОЛЬСТВИЕ ОТ СВОЕЙ РАБОТЫ'}
                                desk={'Помогаем развивать бизнес онлайн, делаем продукты высокой конверсии. Внедряем ' +
                'новые способы продвижения в бизнесы наших клиентов. Мы прекрасно понимаем, каким должен быть ' +
                'интернет-продукт и как этого добиться. Мы объединяем цифровое мастерство с новаторским мышлением, ' +
                'чтобы реализовать все ваши идеи и пожелания. ' +
                                    'Мы прекрасно понимаем, каким должен быть ' +
                'интернет-продукт и как этого добиться. Мы объединяем цифровое мастерство с новаторским мышлением, ' +
                'чтобы реализовать все ваши идеи и пожелания.'} img={img}
            />
        </div>
    );
};

export default About;