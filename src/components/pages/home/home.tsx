import React from 'react';
import CarouselComponent from "../../common/carouselComponent/carouselComponent";
import offer from './../../../assets/images/banner.jpg'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import HelpsCards from "../../common/cardsHelp/helpsCards";
import cl from './home.module.css';
import Endorphone from './../../../assets/images/photo11.jpg'
import deliveryGroup from './../../../assets/images/photo22.jpg'
import group from './../../../assets/images/photo33.jpg'
import country from './../../../assets/images/photo44.jpg'
import clientImg from "./../../../assets/clientImg.png";
import ReviewsCarousel from "../../common/reviewsCarousel/reviewsCarousel";
import {reviewsArr} from "../about/about";
import {LastWorksSection} from "../../common/LastWorksSection/LastWorksSection";
import style from './../common.module.css'
import {BottomBlock} from "../../common/BottomBlock/BottomBlock";

export type helpCardItemType = {
    id: string
    icon: any
    title: string
    desc: string
    link: string
    color: string
}
export type lastCardItemType = {
    id: string
    img: any
    text: string
    title: string
    desc: string
}
export const listBanners = [
    {
        img: offer,
        title: 'Разработка IT и Digital решений с гарантией!',
        desk: 'Cтроим IT-экосистемы и помогаем, трансформировать B2B, B2C, D2C продажи',
        btnText: 'обсудить проект',
        btnLink: '/services'
    },
    {
        img: offer,
        title: 'решений с гарантией!',
        desk: 'Cтроим IT-экосистемы  B2C, D2C продажи',
        btnText: 'обсудить проект',
        btnLink: '/web'
    },
    {
        img: offer,
        title: 'Разработка IT и Digital',
        desk: 'помогаем трансформировать B2B, B2C, D2C продажи',
        btnText: 'обсудить проект',
        btnLink: '/about'
    },

]
const helpCards = [
    {
        id: 'w1',
        icon: <ShoppingCartOutlinedIcon style={{color: '#fdb1ae'}}/>,
        // icon: <ShoppingCartOutlinedIcon style={{color:'linear-gradient(241.89deg, #FF9A9E 9.73%, #FAD0C4 96.14%)'}}/>,
        title: 'Интернет магазины',
        desc: 'Создаем прибыльные интернет-магазины, маркетплейсы и агрегаторы',
        link: 'some page',
        color: 'linear-gradient(241.89deg, #FF9A9E 9.73%, #FAD0C4 96.14%)'
    },
    {
        id: 'w2',
        icon: <ShoppingCartOutlinedIcon style={{color: '#a1bbfd'}}/>,
        title: 'Web решения',
        desc: 'Создаем прибыльные интернет-магазины, маркетплейсы и агрегаторы',
        link: 'some page',
        color: ' linear-gradient(252.6deg, #A1BBFD 47.36%, #C2E9FB 114.7%)'
    },
    {
        id: 'w3',
        icon: <ShoppingCartOutlinedIcon style={{color: '#98e1e4'}}/>,
        title: 'Mobile',
        desc: 'Создаем прибыльные интернет-магазины, маркетплейсы и агрегаторы',
        link: 'some page',
        color: ' linear-gradient(284deg, #8FD3F4 -0.38%, #A8FCC7 126.09%)'
    },
    {
        id: 'w4',
        icon: <ShoppingCartOutlinedIcon style={{color: '#fdaf8a'}}/>,
        title: 'Seo',
        desc: 'Создаем прибыльные интернет-магазины, маркетплейсы и агрегаторы',
        link: 'some page',
        color: 'linear-gradient(259.1deg, #FDA085 17.96%, #FDE59C 125.02%)'
    },
    {
        id: 'w5',
        icon: <ShoppingCartOutlinedIcon style={{color: '#f88fb9'}}/>,
        title: 'SMM',
        desc: 'Создаем прибыльные интернет-магазины, маркетплейсы и агрегаторы',
        link: 'some page',
        color: 'linear-gradient(247.09deg, #FC6F82 -12.78%, #F4B7FC 96.51%)'
    },
    {
        id: 'w6',
        icon: <ShoppingCartOutlinedIcon style={{color: '#d4aae0'}}/>,
        title: 'PPC',
        desc: 'Создаем прибыльные интернет-магазины, маркетплейсы и агрегаторы',
        link: 'some page',
        color: 'linear-gradient(260.99deg, #A18CD1 -50.85%, #FBC2EB 106.31%)'
    },
]
export const lastCards = [
    {
        id: 'wl1',
        img: Endorphone,
        text: 'UX, UI, SOFTWARE',
        title: 'Endorphone',
        desc: 'Провели редизайн сайта, тем самым увеличили CR для интернет-магазина.',
    },
    {
        id: 'wl2',
        img: deliveryGroup,
        text: 'UX, UI, SOFTWARE',
        title: 'DELIVERY GROUP',
        desc: 'Приложение для B2B перевозок',
    },
    {
        id: 'wl2',
        img: group,
        text: 'UX, UI, SOFTWARE',
        title: 'GROUP',
        desc: 'Приложение для B2B перевозок',
    },
    {
        id: 'wl2',
        img: country,
        text: 'UX, UI, SOFTWARE',
        title: 'СК “Країна”',
        desc: 'Разработали корпоративный сайт с возможностью оформлять услуги в личном кабинетеs',
    },
]
const clientArr = [
    {
        id: 'kl1',
        img: clientImg
    },
    {
        id: 'kl2',
        img: clientImg
    },
    {
        id: 'kl3',
        img: clientImg
    },
    {
        id: 'kl4',
        img: clientImg
    },
    {
        id: 'kl5',
        img: clientImg
    },
    {
        id: 'kl6',
        img: clientImg
    },
]

type propsType={
    theme:boolean
}
const Home = ({theme,...props}:propsType) => {
    const clientItem = clientArr.map(i => <div key={i.id} className={cl.clientImg}><img src={i.img} alt="clientImg"/>
    </div>)
    return (
        <>
            <div className={style.container}>
                <CarouselComponent banner={listBanners}/>
                <div className={cl.helpsBlock}>
                    <p className={style.title}>Наши услуги</p>
                    <h2 className={`${theme? style.dark: style.light}`}>КАК мы можем вам помочь</h2>
                    <div className={cl.helpCardsWrap}>
                        {helpCards.map(i => {
                            return <HelpsCards key={i.id} cardItem={i} theme={theme}/>
                        })}
                    </div>
                </div>
                <LastWorksSection theme={theme}/>
            </div>
            <ReviewsCarousel banner={reviewsArr} marginTop={'150px'} marginBottom={'150px'} theme={theme}/>
            <div className={cl.clientBlock}>
                <div className={style.container}>
                    <p className={style.title}>СЧАСТЛИВЫЕ КЛИЕНТЫ</p>
                    <h2 className={`${theme? style.dark: style.light}`}>Наши клиенты</h2>
                    <div className={cl.clientArr}>{clientItem}</div>
                </div>
            </div>
            <BottomBlock theme={theme}/>
        </>
    );
};

export default Home;


