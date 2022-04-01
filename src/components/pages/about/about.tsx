import React from 'react';
import cl from './about.module.css'
import style from './../common.module.css'
import imgBg from "../../../assets/aboutBg.jpg";
import Offer from "../../common/offer/offer";
import {DeckWithImgSection} from "../services/services";
import img from './../../../assets/images/videoExampleImg.png'
import arrowBl from './../../../assets/arrowBl.png'
import person from './../../../assets/images/person.png'
import person1 from './../../../assets/images/person1.png'
import person2 from './../../../assets/images/person2.png'
import person3 from './../../../assets/images/person3.png'
import avatar from './../../../assets/images/avatar.png'
import ReviewsCarousel from "../../common/reviewsCarousel/reviewsCarousel";

const advantagesArr = [
    {
        title: '1000+',
        description: 'Мы реализовали более 1000 веб-проектов, используя различные технологии и CMS',
        img: arrowBl
    },
    {
        title: '30+',
        description: 'Мы получили более 30 самых известных и престижных наград цифровой индустрии',
        img: arrowBl
    },
    {
        title: '15+',
        description: 'У нас в штате более 15 сертифицированных фул-тайм специалистов',
        img: arrowBl
    },
    {
        title: '1',
        description: 'У нас в штате более 15 сертифицированных фул-тайм специалистов',
        img: arrowBl
    },
]
const personArr = [
    {
        name: 'Имя Фамилия',
        img: person
    },
    {
        name: 'Имя Фамилия',
        img: person1
    },
    {
        name: 'Имя Фамилия',
        img: person2
    },
    {
        name: 'Имя Фамилия',
        img: person3
    },
    {
        name: 'Имя Фамилия',
        img: person
    },
    {
        name: 'Имя Фамилия',
        img: person1
    },
    {
        name: 'Имя Фамилия',
        img: person2
    },
    {
        name: 'Имя Фамилия',
        img: person3
    },
]
export const reviewsArr = [
    {
        img: avatar,
        rating: 5,
        desk: 'разрабатывают для нас мобильное приложение с адаптацией под iOS и Android. Мы уже запустили бета версию и наши клиенты очень хорошо отзываются о продукте. Хочу отметить гибкость и качество нашей коммуникации. Каждую неделю мы проводим встречи где продуктивно обсуждаем все детали разработки и проделанную работу.',
        userName: 'David Andrean',
        text: 'CEO of SoftServe'
    },
]

const About = () => {
    const advantagesItems = advantagesArr.map(i => {
        return <div className={cl.wrapItem}>
            <h3 className={cl.titleItem}>{i.title}</h3>
            <p className={cl.deskItem}>{i.description}</p>
            <img src={i.img} alt="arrowBlue"/>
        </div>
    })
    return (
        <div className={style.container}>
            <Offer img={imgBg} title={'О Mageek Soft'}
                   text={'Профессионализм и клиентоориентированный подход к делу, ' +
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
            <div className={cl.advantagesItemWrap}>{advantagesItems}</div>
            <div className={cl.teamInfoSection}>
                <div className={cl.teamInfo}>
                    <p className={cl.title}>Наши услуги</p>
                    <h2>КАК мы можем вам помочь</h2>
                    <p className={cl.teamDesk}>Совсем не случайно в нашем агентстве собралась самая сильная команда
                        проектировщиков и дизайнеров
                        интерфейсов, и много много других замечательных специалистов.
                    </p>
                </div>
                <div className={cl.wrapInfo}>
                    {personArr.map(i => <div className={cl.personItem}>
                            <div className={cl.personImgWrap}>
                                <img src={i.img} alt="person"/>
                            </div>
                            <p className={cl.personText}>должность</p>
                            <p className={cl.personName}>{i.name}</p>
                        </div>
                    )}

                </div>
                <button>показать ещё</button>
            </div>
            <div className={cl.reviewSection}>
                <p className={cl.reviewTitle}>отзывы</p>
                <h2 className={cl.reviewText}>Что о нас говорят</h2>
                <ReviewsCarousel banner={reviewsArr} marginTop={'150px'} marginBottom={'150px'}/>
            </div>
        </div>
    );
};

export default About;