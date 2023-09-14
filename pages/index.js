/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import { useEffect } from 'react'
import useGeneralStore, { getHomeData } from '../app/stores/GeneralController'

import useUtilityStore from '../app/stores/UtilityStore'
import { app_name } from '../app/utils/const'
import styles from '../styles/Home.module.css'
import At_A_Glance from './home/At_A_Glance'
import Banner from './home/Banner'
import ContactUs from './home/ContactUs'
import JoinUs from './home/JoinUs'
import PopularCategory from './home/PopularCategory'
import PopularFeature from './home/PopularFeature'
import PopularShop from './home/PopularShop'
import Testimonial from './home/Testimonial'

export default function Home() {

    const { setLoading } = useUtilityStore();
    const { home_data, is_axios_init } = useGeneralStore();

    useEffect(() => {
        getHomeData();
    }, []);




    return (
        <div>
            <Head>
                <title>Gifty | Home</title>
                <meta name="description" content="Post Card" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Banner />

            {home_data?.category?.length > 0 && <PopularCategory />}

            {home_data?.popular_cards?.length > 0 && <PopularFeature />}

            {home_data?.shops?.length > 0 && <PopularShop />}


            <At_A_Glance />

            {/* <Testimonial /> */}

            <ContactUs />

            {/* <JoinUs /> */}

        </div>
    )
}
