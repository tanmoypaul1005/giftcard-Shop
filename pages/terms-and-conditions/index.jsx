/* eslint-disable react-hooks/exhaustive-deps */
import Head from 'next/head';
import { app_name } from '../../app/utils/const';
import { } from '../../app/stores/ShopStore';
import { useEffect } from 'react';
import Title from './Title';
import useGeneralStore, { getGeneralInfo } from '../../app/stores/GeneralController';
import useUserAccountStore from '../../app/stores/UserAccountStore';

const TermsAndConditions = () => {

  const { general_info } = useGeneralStore();
  const { app_language } = useUserAccountStore();

  // console.log('general_info', general_info);

  useEffect(() => {
    getGeneralInfo('terms-and-conditions');
  }, [])

  useEffect(() => {
    getGeneralInfo('terms-and-conditions');
  }, [app_language])


  return (
    <div>
      <Head>
        <title>{app_name} | Terms-and-Conditions</title>
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

export default TermsAndConditions;