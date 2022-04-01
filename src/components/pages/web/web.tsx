import React from 'react';
import cl from './web.module.css'
import style from './../common.module.css'
import imgBg from "../../../assets/webBg.jpg";
import Offer from "../../common/offer/offer";
import {BottomBlock, LastWorksSection} from "../home/home";
import {BlueContainer, DeckWithImgSection} from "../services/services";
import img from './../../../assets/images/DeviceMacbookPro.png';
import InfoListBlock from "../../common/infoListBlock/infoListBlock";
import ReviewsCarousel from "../../common/reviewsCarousel/reviewsCarousel";
import {reviewsArr} from "../about/about";


const infoList = [
    {
        id: 'infL1',
        index: '1',
        title: 'РАЗРАБОТКА B2C/B2B ИНТЕРНЕТ-МАГАЗИНОВ',
        description: 'Мы разрабатываем интернет-магазины для бизнеса, опираясь на современные тенденции. Используем качественные технологии, внедряем индивидуальные инструменты, помогающие компаниям эффективно продавать товары и услуги.'
    },
    {
        id: 'infL2',
        index: '2',
        title: 'РАЗРАБОТКА ОПТОВЫХ B2B-СИСТЕМ',
        description: 'Крупные порталы для B2B сферы позволяют расширить аудиторию и эффективно взаимодействовать с партнерами. Мы разрабатываем индивидуальные решения, которые помогают автоматизировать продажи и улучшить бизнес процессы.'
    },
    {
        id: 'infL3',
        index: '3',
        title: 'РЕДИЗАЙН ИНТЕРНЕТ-МАГАЗИНА',
        description: 'Улучшаем имеющийся интернет ресурс, опираясь на современные тенденции и требования. Редизайн касается не только визуального оформления, но и улучшения юзабилити, функциональности и возможностей. Далем современные сайты.'
    },
    {
        id: 'infL4',
        index: '4',
        title: 'АУДИТ ИНТЕРНЕТ-МАГАЗИНА',
        description: 'Разрабатываем четкий план действий для вашего интернет-магазина, помогаем определить стратегию развития и масштабирования компании. Анализ основывается на сборе данных по конкурентам, целевой аудитории, специфике бизнеса.'
    },
]
const Web = () => {
    return (
        <>
            <div className={style.container}>
                <Offer img={imgBg} title={'Создание интернет-магазина'} linkPath={'/jjj'}/>
                <DeckWithImgSection title={'Наши услуги'} titleMain={'РАЗРАБОТКА И РАЗВИТИЕ ECOMMERCE-ПРОЕКТОВ'}
                                    desk={'Интернет-магазины помогают масштабировать бизнес, расширить целевую аудиторию и привлечь больше клиентов. Это мощный инструмент для расширения возможностей компании. Современные сайты выглядят просто, стильно, функционально.' +
                                        'Мы предлагаем комплексную разработку от идеи до запуска и поддержки.'}
                                    img={img}/>
                <InfoListBlock arr={infoList}/>
                <LastWorksSection/>
            </div>
            <div className={cl.blueContainerWrap}>
                <div className={style.container}>
                    <BlueContainer prevText='Готовы начать ваш проект'
                                   title='Более 2000+ довольных клиентов за 20+ лет работы'/>
                </div>
            </div>
            <ReviewsCarousel banner={reviewsArr} marginTop={'0'} marginBottom={'150px'}/>
            <div className={style.container}>

            </div>
            <BottomBlock/>
        </>
    )
};

export default Web;