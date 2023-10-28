import React from 'react'
import "./Residencies.css"
import {Swiper, SwiperSlide, useSwiper} from "swiper/react"
import "swiper/css"
import { sliderSettings } from '../../utils/common';
import data from "../../utils/slider.json"
import PropertyCard from '../PropertyCard/PropertyCard';


const Residencies = () => {
return (
<section className='r-wrapper'>
<div className="paddings innerWidth r-container">
<div className="r-head flexColStart">
    <span className='orangeText'>Best Choices</span>
    <span className='primaryText'>Popular Residencies</span>
</div>
<Swiper {...sliderSettings}>
    <SliderButtons />
    {
        data.map((card, i) => (
            <SwiperSlide key={i}>
                <PropertyCard card={card} />
            </SwiperSlide>
        ))
    }
</Swiper>

</div>
</section>
)
}

export default Residencies

const SliderButtons = () => {
const swiper = useSwiper();
return (
<div className="flexCenter r-buttons">
<button onClick={() => swiper.slidePrev()}> &lt; </button>
<button onClick={() => swiper.slideNext()}> &gt; </button>
</div>
);
}




