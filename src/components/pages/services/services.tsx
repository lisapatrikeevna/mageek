import React from 'react';
import Offer from "../../common/offer/offer";
import imgBg from './../../../assets/servisesBg.jpg'
import style from './../common.module.css'
import cl from './services.module.css'
import htmlImj from './../../../assets/htmlImg.png'
import {Accordion, AccordionDetails, AccordionSummary} from "@mui/material";
import arrow from './../../../assets/acordionArrow.png'
import arrowBtn from './../../../assets/arrowBl.png'
import arrowForLink from './../../../assets/arrow.png'
import {Link, useNavigate} from "react-router-dom";
import webImg from './../../../assets/images/web.png'
import {BottomBlock, LastWorksSection} from "../home/home";


type propsType={
    theme:boolean
}
const Services = ({theme,...props}:propsType) => {
    return (
        <div className={style.container}>
            <Offer img={imgBg} title={'Создаем IT & Digital решения с гарантией!'} linkPath={'/path'}/>
           <DeckWithImgSection title={'Наши услуги'} titleMain={'Разработка под ключ'}
                               desk={'Мы создаем инструменты для диджитализации и масштабирования бизнеса,\n' +
               '                    помогаем оптимизировать процессы, повысить продуктивность и выйти на новый уровень.\n' +
               '                    Создаем персонализированные инструменты, чтобы наши клиенты могли расти, получили\n' +
               '                    конкурентное преимущество и увеличили прибыль.'} img={webImg}
                               textAfter={'Технологии которыми мы пользуемся'} iconF={htmlImj} iconS={htmlImj} iconT={htmlImj}
                               theme={theme}
           />
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
            <BlueContainer prevText='Готовы начать ваш проект'
                           title='Более 2000+ довольных клиентов за 20+ лет работы'/>
            <LastWorksSection theme={theme}/>
            {/*<BottomBlock/>*/}
        </div>
    );
};

export default Services;

type propsTypeDeskWithImgSection={
    title:string
    titleMain:string
    desk:string
    img:any
    textAfter?:string
    iconF?:any
    iconS?:any
    iconT?:any
    theme?:boolean
}
export const DeckWithImgSection = ({title,titleMain,desk,img,...props}:propsTypeDeskWithImgSection)=>{
    return(
        <div className={cl.ourServices}>
            <div className={cl.textBlock}>
                <p className={cl.title}>{title}</p>
                <h2 className={`${cl.titleMain} theme && ${cl.titleMainDark}`}>{titleMain}</h2>
                <p className={cl.desk}>{desk}</p>
                {props.textAfter && <p className={`${cl.textAfter} theme && ${cl.textAfterDark}`}>{props.textAfter}</p>}
                <div className={cl.imageList}>
                    {props.iconF && <img src={props.iconF} alt="htmlImj"/>}
                    {props.iconS && <img src={props.iconS} alt="htmlImj"/>}
                    {props.iconT && <img src={props.iconT} alt="htmlImj"/>}
                </div>
            </div>
            <div className={cl.imageBlock}>
                <img src={img} alt="webImg"/>
            </div>
        </div>
    )
}
const WebAccordionBlock = () => {
    const navigate = useNavigate();
    return (
        <div className={cl.webAccordionWrap}>
            <div className={cl.webLeft}>
                <p>
                    Мы создаем инструменты для диджитализации и масштабирования бизнеса, помогаем оптимизировать
                    процессы, повысить продуктивность и выйти на новый уровень. Создаем персонализированные инструменты,
                    чтобы наши клиенты могли расти, получили конкурентное преимущество и увеличили прибыль.
                </p>
                <button className={cl.moreBtn} onClick={()=>{navigate('/web')}}>
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

type blueBlockPropsType={
    prevText:string
    title:string
}
export const BlueContainer = ({prevText,title}:blueBlockPropsType) =>{

    return(
        <div className={cl.blueBlock}>
            <div className={cl.blueDeck}>
                <h6>{prevText}</h6>
                <h4>{title}</h4>
            </div>
            <div className={cl.arrowForLink}><img src={arrowForLink} alt="arrowForLink"/></div>
            <div className={cl.linkBtnWrap}>
                <button className={cl.linkBtn}>
                    <span>Обсудить проект</span>
                </button>
                <p className={cl.textAfterBtn}>Мы моментально ответим вам</p>
            </div>
        </div>
    )
}
