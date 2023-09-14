/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { useTranslation } from 'react-i18next'
import { formatDate } from '../../../app/stores/UtilityStore'
import { BaseUrlSrc } from '../../../app/utils/Url'
import { iDefaultShop } from '../../../components/Utilities/Sources'

export default function ShopProfile({ shop_info, shop_name }) {

  const { t } = useTranslation();

  return (
    <>
      <div className='flex flex-row justify-start items-center space-x-6 mb-10 mx-3 md:mx-0'>

        <div className="h-[155px] w-[155px] relative rounded-lg overflow-hidden">
          <img className="h-auto" src={shop_info?.shop_image ? (BaseUrlSrc + shop_info?.shop_image) : iDefaultShop} alt="Post Card Image" layout="fill" objectFit="cover" />
        </div>

        <div className='flex flex-col justify-center items-start space-y-2'>
          <div className='text-5xl md:text-4xl font-bold text-cTitleTextColor'>{shop_name}</div>
          <div className='font-fw400 text-base text-cSubTitleColor'>{t('Total Sold')} {shop_info?.completed_orders_count ?? 0} {t('Items')}</div>
          <div className='font-fw400 text-base text-cSubTitleColor'>{t('Joined')}: {formatDate(shop_info?.joined, 'date')}</div>
        </div>

      </div>
    </>
  )
}
