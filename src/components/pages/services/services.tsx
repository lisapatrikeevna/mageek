import React from 'react';
import Offer from "../../common/offer/offer";
import imgBg from './../../../assets/servisesBg.jpg'
import style from './../common.module.css'
import cl from './services.module.css'
import htmlImj from './../../../assets/htmlImg.png'
import {Accordion, AccordionDetails, AccordionSummary} from "@mui/material";
import arrow from './../../../assets/acordionArrow.png'
import arrowBtn from './../../../assets/arrowBl.png'
import {Link} from "react-router-dom";
import webImg from './../../../assets/images/web.png'
const Services = () => {
    return (
        <div className={style.container}>
            {/*services*/}
            <Offer img={imgBg} title={'Создаем IT & Digital решения с гарантией!'} linkPath={'/path'}/>
            <div className={cl.ourServices}>
                <div className={cl.textBlock}>
                    <p className={cl.title}>Наши услуги</p>
                    <h2 className={cl.titleMain}>Разработка под ключ</h2>
                    <p className={cl.desk}>Мы создаем инструменты для диджитализации и масштабирования бизнеса,
                        помогаем оптимизировать процессы, повысить продуктивность и выйти на новый уровень.
                        Создаем персонализированные инструменты, чтобы наши клиенты могли расти, получили
                        конкурентное преимущество и увеличили прибыль.
                    </p>
                    <p className={cl.textAfter}>Технологии которыми мы пользуемся</p>
                    <div className={cl.imageList}>
                        <img src={htmlImj} alt="htmlImj"/>
                        <img src={htmlImj} alt="htmlImj"/>
                        <img src={htmlImj} alt="htmlImj"/>
                    </div>
                </div>
                <div className={cl.imageBlock}>
                    <img src={webImg} alt="webImg"/>
                </div>
            </div>
                <div className={cl.accordionBlock}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<img src={arrow} alt='arrow'/>}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            className={cl.name}
                        >
                            <p>Web разработка</p>
                        </AccordionSummary>
                        <AccordionDetails>
                            <WebAccordionBlock/>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<img src={arrow} alt='arrow'/>}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                             className={cl.name}
                        >
                            <p>Разработка приложений</p>
                        </AccordionSummary>
                        <AccordionDetails>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </p>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<img src={arrow} alt='arrow'/>}
                            aria-controls="panel3a-content"
                            id="panel3a-header"
                             className={cl.name}
                        >
                            <p>Disabled Accordion</p>
                        </AccordionSummary>
                    </Accordion>
                </div>

        </div>
    );
};

export default Services;

const WebAccordionBlock = () => {
    return (
        <div className={cl.webAccordionWrap}>
            <div className={cl.webLeft}>
                <p>
                    Мы создаем инструменты для диджитализации и масштабирования бизнеса, помогаем оптимизировать
                    процессы, повысить продуктивность и выйти на новый уровень. Создаем персонализированные инструменты,
                    чтобы наши клиенты могли расти, получили конкурентное преимущество и увеличили прибыль.
                </p>
                <button className={cl.moreBtn}>
                    <span>Подробнее</span>
                </button>
            </div>
            <div className={cl.webRight}>
                <div className={cl.item}>
                    <span>01</span>
                    <Link to={'/'}>
                        <p>Интернет магазины</p>
                        <span><img src={arrowBtn} alt=""/></span>
                    </Link>
                </div>
                <div className={cl.item}>
                    <span>02</span>
                    <Link to={'/'}>
                        <p>Корпоративные сайты</p>
                        <span><img src={arrowBtn} alt=""/></span>
                    </Link>
                </div>
                <div className={cl.item}>
                    <span>03</span>
                    <Link to={'/'}>
                        <p>Интернет магазины</p>
                        <span><img src={arrowBtn} alt=""/></span>
                    </Link>
                </div>
                <div className={cl.item}>
                    <span>04</span>
                    <Link to={'/'}>
                        <p>Интернет магазины</p>
                        <span><img src={arrowBtn} alt=""/></span>
                    </Link>
                </div>
            </div>
        </div>
    )
}
// Mui-expanded
// MuiButtonBase-root MuiAccordionSummary-root MuiAccordionSummary-gutters services_name__5fGRk css-sh22l5-MuiButtonBase-root-MuiAccordionSummary-root
// MuiButtonBase-root MuiAccordionSummary-root MuiAccordionSummary-gutters services_name__5fGRk css-sh22l5-MuiButtonBase-root-MuiAccordionSummary-root