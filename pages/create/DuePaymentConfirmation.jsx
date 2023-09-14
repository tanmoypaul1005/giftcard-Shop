/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import useCreateRequestStore, { addAndVerifyOrderInfoFromServer, confirmOrder } from '../../app/stores/CreateCardStore';
import { Toastr } from '../../app/utils/UtilityFunctions';

export default function PaymentConfirmation() {
  const { payment_status, resetCreateCardForm } = useCreateRequestStore();
  const router = useRouter();
  let count = 0;

  useEffect(() => {
    const order_id = localStorage.getItem('order_id');
    const payment_id = localStorage.getItem('payment_id');

    console.log('verifying order info', order_id, payment_id);
    count === 0 && confirmOrder(order_id, payment_id);
    count++;
  }, []);

  useEffect(() => {
    if (payment_status === 'success') {
      resetCreateCardForm();
      localStorage.removeItem('create_card_form');
      router.push('/create/Submitted');
    }

    if (payment_status === 'failed') {
      resetCreateCardForm();
      localStorage.removeItem('create_card_form');
      router.push('/profile/order-history');
      Toastr('error', 'Payment Failed');
    }
  }, [payment_status]);

  const { t } = useTranslation();


  return (
    <div className="center h-screen">

      <div className='text-center mb-5 mt-10'>
        <div className='text-2xl md:text-4xl font-bold text-[#211F32] mb-5'>{t('Please Wait')}...</div>
        <div className='max-w-2xl mx-5 md:mx-auto text-sm md:text-base'>{t('Checking Order Information')}</div>
      </div>

    </div>
  )
}
