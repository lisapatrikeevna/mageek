import React from 'react';
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import './carouselComponent.css'
import {Link} from "react-router-dom";

type itemBannerType={
    img:any
    // img:object
    desk:string
    title:string
    btnText:string
    btnLink:string
}
type propsType={
    banner:Array<itemBannerType>
}


const CarouselComponent = (props:propsType) => {
    const itemBanner=props.banner.map(i=> <div className="itemWork">
        <img src={i.img} alt='img'/>
        <div className="legend">
            <h3 className='titleOffer'>{i.title}</h3>
            <p className='deskOffer'>{i.desk}</p>
            <Link to={i.btnLink} className='linkOffer'><p>{i.btnText}</p></Link>
        </div>

    </div> )


    return (
        // <div></div>
        <Carousel className='works' width="100%"
                  // showThumbs={true}
                  showStatus={false}
                  infiniteLoop
                  // useKeyboardArrows
        >
            {itemBanner}
        </Carousel>
    );
};

export default CarouselComponent;