/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
// import Image from 'next/image'
import Head from 'next/head';
import Card04 from '../../../components/Card/Card04';
import Toolbar from '../../../components/Toolbar/Toolbar';
import { app_name } from '../../../app/utils/const';
import usePostcardStore, { getPostcardData, getPostcardPaginateData } from '../../../app/stores/PostcardStore';
import { useEffect, useState } from 'react';
import { BaseUrlSrc } from '../../../app/utils/Url';
import { RotatingLines } from 'react-loader-spinner';
import { useRouter } from 'next/router'
import { iDefaultShop } from '../../../components/Utilities/Sources';
import ShopProfile from './ShopProfile';
import Search from '../../../components/Input/Search';
import useShopStore from '../../../app/stores/ShopStore';
import { useTranslation } from 'react-i18next';


export default function PostCards() {
  const { postcards, is_pagination_loading } = usePostcardStore();
  const { search_key, setSearchKey } = useShopStore();
  const router = useRouter();
  const { shop_id, shop_name } = router.query;
  const [shop_info, setShopInfo] = useState(null);
  const { t } = useTranslation();

  useEffect(() => {
    // ! Using debounce
    const timer = setTimeout(() => getPostcardData(null, shop_id, search_key), 500)
    return () => clearTimeout(timer)
  }, [search_key]);

  useEffect(() => {
    getPostcardData(null, shop_id);

    const info = JSON.parse(localStorage.getItem('shop_info'));
    setShopInfo(info);

    const handleScroll = (event) => {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight)
        getPostcardPaginateData(shop_id);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, [])


  return (
    <div>
      <Head>
        <title>{app_name} | Post Card</title>
        <meta name="description" content="Post Card Printing" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='bg-white pb-10'>
        <div className='custom-container pt-5 md:pt-10'>

          <ShopProfile shop_info={shop_info} shop_name={shop_name} />

          <hr />

          <div className='my-8 text-fs32 font-fw700'>{t('All Products')}</div>

          <div className='w-full flex flex-row justify-center mb-8'>
            <Search
              className="w-1/3 mr-5"
              className2='bg-blueGray-50'
              isRightIcon={true}
              search={(e) => setSearchKey(e.target.value)}
              name='search_key'
              value={search_key}
            />
          </div>


          <Toolbar />

          <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5 sm:gap-10 mx-3 sm:mx-0'>

            {
              postcards.map((item, index) =>
                <Card04
                  onClick={() => router.push(`/post-cards/details/${item?.id}`)}
                  key={index}
                  src={item?.image ? (BaseUrlSrc + item.image) : iDefaultShop}
                  title={item?.name}
                  stars={5}
                  text={`Price ¥${item?.price}`}
                  sold_count={item?.sold_count}
                />
              )
            }
          </div>

          {is_pagination_loading && <div className='flex flex-row justify-center items-center my-5'>
            <RotatingLines
              width="100"
              strokeColor="#FB607F"
              strokeWidth={4}
              strokeWidthSecondary={3}
            />
          </div>}

        </div>
      </div>
    </div>
  );
}
