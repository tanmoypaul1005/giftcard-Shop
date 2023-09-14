/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { useTranslation } from 'react-i18next';
import useUserAccountStore from '../../../app/stores/UserAccountStore';

export default function VerificationFailed() {
  const { setIsVerificationFormNeeded} = useUserAccountStore();
  const { t } = useTranslation();

  return (
    <div className='flex flex-col justify-center items-center space-y-5 w-full'>
      <img className='h-[160px] w-[160px]' src={"/Images/svg/verification_failed_state.svg"} alt="img" />
      <div className='text-fs20 font-fw600'>{t('We are sorry')}!!!</div>
      <div className='text-fs16 font-fw500'>{t('Your identity information did not match with the system.')}</div>


      <button type='button' onClick={() => setIsVerificationFormNeeded(true)} className={`mx-auto mt-2 px-10 py-2 bg-cBrand text-cWhite transition-all ease-in rounded-md text-sm md:text-base font-bold shadow`}>
        Try Again
      </button>
    </div>
  )
}
