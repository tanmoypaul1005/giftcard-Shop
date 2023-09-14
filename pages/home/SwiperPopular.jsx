/* eslint-disable react-hooks/exhaustive-deps */
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import React, { useEffect } from 'react'
import Card02 from '../../components/Card/Card02';
import { iDefaultShop } from '../../components/Utilities/Sources';
import useGeneralStore from '../../app/stores/GeneralController';
import { BaseUrlSrc } from '../../app/utils/Url';
import useHorizontalScroll from '../../components/Utilities/useHorizontalScroll';
import { useRouter } from 'next/router';

export default function SwiperPopular({ shop_tabs }) {

    const { home_data } = useGeneralStore();
    const router = useRouter()
    const scrollRef = useHorizontalScroll();

    useEffect(function () {
        scrollRef.current = shop_tabs.current;
    }, [shop_tabs.current]);


    return (

        <div ref={shop_tabs} id='x' className="relative  overflow-x-scroll flex justify-start items-center space-x-2  md:space-x-5 mt-3 md:mt-0 px-8">
            {home_data?.shops?.map((item, index) => (
                <div className='w-[550px]' key={index}>
                    <Card02
                        src={item?.image_url ? (BaseUrlSrc + item.image_url) : iDefaultShop}
                        title={item?.name}
                        stars={item?.rate}
                        text={item?.details ?? ''}
                        total_cards={item?.shop_cards_count ?? 0}
                        onClick={() => router.push(`/post-cards/${item.name}/${item.user_id}`)}
                    />
                </div>
            ))}
        </div>
    );
};