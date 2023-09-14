/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { IoIosArrowBack } from 'react-icons/io';
import useUserAccountStore, { getUserVerificationInfo, submitUserVerificationInfo } from '../../../app/stores/UserAccountStore';
import VerificationFailed from './VerificationFailed';
import VerificationForm from './VerificationForm';
import VerificationPending from './VerificationPending';
import Verified from './Verified';

export default function VerifyIdentity({ isFormShow, setIsFormShow }) {
  const { verification_status, user_verification_info, setVerificationStatus, setIsVerificationFormNeeded, is_verification_form_needed } = useUserAccountStore();
  const { t } = useTranslation();

  useEffect(() => {
    setIsVerificationFormNeeded(false);
    getUserVerificationInfo();
  }, []);

  useEffect(() => {
    const info = JSON.parse(localStorage.getItem('gifty_user_verification_info'));
    if (info === null) setVerificationStatus('verify');
    if (info?.status === 'pending') setVerificationStatus('pending');
    if (info?.status === 'verified') setVerificationStatus('verified');
    if (info?.status === 'not_verified') setVerificationStatus('failed');
  }, [user_verification_info]);


  return (
    <>
      <div className={`md:static ml-5 transform  ${isFormShow ? 'translate-x-0' : 'translate-x-[50rem]'} md:translate-x-0 transition-all ease-in px-5 md:px-0 w-full md:max-w-2xl`}>
        <div className="flex-1">
          <div className='bg-blueGray-50 md:bg-white md:shadow p-0 md:p-6 max-w-2xl rounded-lg'>
            <div className='text-4xl font-semibold text-gray-800 mb-5 hidden md:block'>{t('Identity Verification')}</div>

            <div onClick={() => setIsFormShow(false)} className="py-4 border-b mb-5 md:hidden flex items-center space-x-3 cp">
              <IoIosArrowBack className="text-lg text-gray-600" />
              <div className='text-xl font-bold inline truncate'>{t('Identity Verification')}</div>
            </div>

            {(verification_status === 'verify' || is_verification_form_needed) && <VerificationForm setIsFormShow={setIsFormShow} />}
            {(verification_status === 'pending' && !is_verification_form_needed) && <VerificationPending />}
            {(verification_status === 'failed' && !is_verification_form_needed) && <VerificationFailed />}
            {(verification_status === 'verified' && !is_verification_form_needed) && <Verified />}

          </div>
        </div>
      </div>
    </>
  )
}
