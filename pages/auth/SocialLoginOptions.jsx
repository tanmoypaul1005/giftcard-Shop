/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { handleUserSocialLogin } from '../../app/authStore';
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';
import { Toastr } from '../../app/utils/UtilityFunctions';
import { useTranslation } from 'react-i18next';
import ReferCodeModal from './components/ReferCodeModal';

export default function SocialLoginOptions() {
    const { t } = useTranslation();
    const { refer_code, setReferCode } = useState('');
    const [show_modal, setShowModal] = useState(false);

    const login = useGoogleLogin({
        onSuccess: tokenResponse => {
            // console.log(tokenResponse);
            handleUserSocialLogin('router', 'google', tokenResponse.access_token, refer_code);
        },
        onError: error => {
            console.log(error);
            Toastr('error', t('Something went wrong. Please try again later.'));
        }
    });

    return (
        <>
            <div className='text-center my-10 font-semibold text-gray-600 flex items-center justify-center space-x-10'>
                <hr className='w-[12rem]' />
                <span>{t('Or')}</span>
                <hr className='w-[12rem]' />
            </div>

            <div className='flex items-center justify-center space-x-5'>

                <div className='flex flex-col justify-between items-center'>
                    <div >{t('Login With Google')}</div>
                    <div onClick={() => setShowModal(true)} className="h-12 w-12 relative overflow-hidden rounded-full cp mt-2">
                        <img className="h-auto" src={'/Images/svg/google.svg'} alt="Post Card Image" layout="fill" objectFit="cover" />
                    </div>
                </div>
            </div>

            <ReferCodeModal show_modal={show_modal} setShowModal={setShowModal} refer_code={refer_code} setReferCode={setReferCode} onConfirm={login} />
        </>
    )
}
