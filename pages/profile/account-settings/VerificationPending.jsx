/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { useTranslation } from 'react-i18next';

export default function VerificationPending() {
  const {t} = useTranslation();

  return (
    <div className='flex flex-col justify-center items-center space-y-5 w-full'>
      <img className='h-[235px] w-[420px]' src={"/Images/svg/pending_verification_state.svg"} alt="img" />
      <div className='text-fs16 font-fw500'>{t('Your identity information has been uploaded. Please wait 1-2 days to get the confirmation.')} </div>


    </div>
  )
}
