import Head from 'next/head';
import TopSection from './TopSection';
import Gallery from './Gallery';
import OptionBar from './OptionBar';
import JoinUs from './JoinUs';
import { app_name } from '../../app/utils/const';
import useShopStore, { getShopData } from '../../app/stores/ShopStore';
import { useEffect } from 'react';
import NoDataAvailable from '../../components/others/NDA';

const Shops = () => {
    const { shop_data } = useShopStore();

    useEffect(() => {
        getShopData()
    }, [])


    return (
        <div>
            <Head>
                <title>{app_name} | Shop</title>
                <meta name="description" content="Post Card Printing" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className='bg-white md:bg-blueGray-50 pb-10'>
                <div className='custom-container pt-10'>
                    <TopSection />
                    {/* <OptionBar /> */}
                </div>

                <div className='custom-container pt-10'>
                    {shop_data?.data?.length > 0 ?
                        <Gallery /> :
                        <NoDataAvailable onClick={() => getShopData()} />
                    }

                </div>

                {/* <div className='mt-10 mb-12'>
                    <JoinUs/>
                </div> */}


            </div>
        </div>
    );
}

export default Shops;