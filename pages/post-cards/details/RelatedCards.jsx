import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import usePostcardStore from '../../../app/stores/PostcardStore';
import { BaseUrlSrc } from '../../../app/utils/Url';
import { iDefaultShop } from '../../../components/Utilities/Sources';
import RelatedCard from './Related_Card';

export default function RelatedCards() {
  const { related_cards } = usePostcardStore();
  const router = useRouter();
  const  {t} = useTranslation();


  useEffect(() => {
    console.log('related_cards', related_cards);
  }, [related_cards])


  return (
    <div className='bg-blueGray-50 pb-10'>
      <div className='custom-container pt-10'>

        <div className='text-center mb-5 xl:mb-10'>
          <div className='text-4xl font-bold text-[#211F32] mb-5'>{t('Related Cards')}</div>
          {/* <div className='max-w-lg mx-auto'>Order a card from popular ones</div> */}
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5 sm:gap-10 mx-3 sm:mx-0'>
          {
            related_cards?.map((item, index) => (
              <RelatedCard
                key={index}
                onClick={() => router.push(`/post-cards/details/${item?.id}`)}
                title={item?.name ?? ''}
                src={item?.image ? (BaseUrlSrc + item.image) : iDefaultShop}
                price={item?.price ?? 0}
                sold_count={item?.sold_count ?? 0}
              />
            ))
          }

        </div>

      </div>
    </div>
  )
}
