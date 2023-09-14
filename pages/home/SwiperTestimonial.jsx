// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import React from 'react'
import Card03 from '../../components/Card/Card03';
import { DUMMY01, DUMMY02, DUMMY03, DUMMY04, DUMMY05, DUMMY06, DUMMY07 } from "../../components/Utilities/Sources";

export default function SwiperTestimonial() {

    const colors = ['#F9E8EA', '#D9F1F0', '#FEF2D9']
    
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={4}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{
                0: {
                width: 0,
                slidesPerView: 1,
                },
                640: {
                width: 640,
                slidesPerView: 1,
                },
                768: {
                width: 768,
                slidesPerView: 2,
                },
            }}
        >
            <SwiperSlide>
                <Card03 src={DUMMY01} title="Genie Infotech" color={colors[0]} stars={5} text="Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor elit, iusmod tempor incid sed do eiusmod tempor incididunt ut labore"/>
            </SwiperSlide>
            <SwiperSlide>
                <Card03 src={DUMMY02} title="Genie Infotech" color={colors[1]} stars={5} text="Pos del man inna Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor smod tempor incididunt ut labore"/>
            </SwiperSlide>
            <SwiperSlide>
                <Card03 src={DUMMY03} title="Genie Infotech" color={colors[2]} stars={5} text="Elit, sed do eius Lorem ipsum dolor sit amet, consectetur rem ipsum dolor elit adipisc dolor elit adip ing Lorem ipsum dolor elit, sum dolor elit sed do eiusmod tempor incididunt ut labore"/>
            </SwiperSlide>
            <SwiperSlide>
                <Card03 src={DUMMY04} title="Genie Infotech" color={colors[0]} stars={5} text="Elit, sed do eius Lorem ipsum dolor sit amet, consectetur rem ipsum dolor elit adipisc dolor elit adip ing Lorem ipsum dolor elit, sum dolor elit sed do eiusmod tempor incididunt ut labore"/>
            </SwiperSlide>
            <SwiperSlide>
                <Card03 src={DUMMY05} title="Genie Infotech" color={colors[1]} stars={5} text="Pos del man inna Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor smod tempor incididunt ut labore"/>
            </SwiperSlide>
            <SwiperSlide>
                <Card03 src={DUMMY06} title="Genie Infotech" color={colors[2]} stars={5} text="Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor elit, iusmod tempor incid sed do eiusmod tempor incididunt ut labore"/>
            </SwiperSlide>
        </Swiper>
    );
};