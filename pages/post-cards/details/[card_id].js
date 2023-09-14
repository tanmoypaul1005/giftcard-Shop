/* eslint-disable react-hooks/exhaustive-deps */
import Head from 'next/head'
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import useCreateRequestStore from '../../../app/stores/CreateCardStore';
import usePostcardStore, { getPostcardDetailsData } from '../../../app/stores/PostcardStore';
import { BaseUrlSrc } from '../../../app/utils/Url';
import CommonButton from '../../../components/Button/CommonButton';
import Card04 from '../../../components/Card/Card04'
import SelectedCard from '../../../components/Card/SelectedCard';
import { iDefaultShop } from '../../../components/Utilities/Sources';
import RelatedCards from './RelatedCards';

export default function Details() {
  const router = useRouter();
  const { card_id } = router.query;
  const { postcard_details, } = usePostcardStore();
  const { t } = useTranslation();

  useEffect(() => {
    getPostcardDetailsData(card_id);
  }, [card_id]);

  return (
    <div>
      <Head>
        <title>Gifty | Card-Details</title>
        <meta name="description" content="Post Card" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='bg-white md:bg-blueGray-50 pb-10'>
        <div className='mx-4  pt-5 md:pt-10'>

          <div className='text-center mb-10 mx-3 md:mx-0'>
            <div className='text-2xl md:text-4xl font-bold text-[#211F32] mb-3 md:mb-5'>{t('Selected Card')}</div>
            <div className='max-w-lg mx-auto'>{t('Click Continue to Place an Order')}</div>
          </div>

          <div className='flex flex-row justify-center w-full'>
            <SelectedCard
              title={postcard_details?.name ?? ''}
              src={postcard_details?.image ? (BaseUrlSrc + postcard_details.image) : iDefaultShop}
              price={postcard_details?.price ?? 0}
              sold_count={postcard_details?.sold_count ?? 0}
            />
          </div>

          <div onClick={() => {
            router.push('/create');
            useCreateRequestStore.getState().setCurrState('upload_image');
          }} className='w-full text-center mt-10'>
            <CommonButton label={t('Continue')} onClick={(e) => handleClick(e)} type={'submit'} />
          </div>

          <RelatedCards />

        </div>
      </div>

    </div>
  )
}
