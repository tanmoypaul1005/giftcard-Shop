import React from 'react'
import { useTranslation } from 'react-i18next'
import { IoIosArrowForward } from 'react-icons/io'

export default function SelectAddress({ type = 'billing', address = null, onClick }) {
  
  const { t } = useTranslation();
  
  return (
    <div onClick={onClick} className='border rounded-md flex flex-row justify-between items-center px-2 py-3 cursor-pointer'>
      <div>{address ?
        <>
          <strong>{type === 'billing' ? t('Billing Address') : t('Shipping Address')}</strong>
          <div>{address?.name}</div>
          <div>{address?.phone}</div>
          <div>{address?.address}</div>
        </>
        : (type === 'billing' ? t('Select Billing Address') : t('Select Shipping Address'))}
      </div>
      <IoIosArrowForward />
    </div>
  )
}
