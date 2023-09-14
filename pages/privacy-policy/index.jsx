/* eslint-disable react-hooks/exhaustive-deps */
import Head from 'next/head';
import { app_name } from '../../app/utils/const';
import { } from '../../app/stores/ShopStore';
import { useEffect } from 'react';
import Title from './Title';
import useGeneralStore, { getGeneralInfo } from '../../app/stores/GeneralController';
import useUserAccountStore from '../../app/stores/UserAccountStore';

const PrivacyPolicy = () => {

  const { general_info } = useGeneralStore();
  const app_lang = localStorage.getItem('gifty_app_lang_code');
  const { app_language } = useUserAccountStore();

  useEffect(() => {
    getGeneralInfo();
  }, [])

  useEffect(() => {
    getGeneralInfo();
  }, [app_language])


  return (
    <div>
      <Head>
        <title>{app_name} | Privacy-Policy</title>
        <meta name="description" content="Post Card Printing" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='bg-white md:bg-blueGray-50 pb-10'>
        <div className='custom-container pt-10'>
          <Title />
        </div>

        <div className='mx-5 sm:mx-[112px]' dangerouslySetInnerHTML={{ __html: general_info?.info }}></div>


      </div>
    </div>
  );
}

export default PrivacyPolicy;