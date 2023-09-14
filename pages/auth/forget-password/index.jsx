/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react'
import Head from 'next/head';
import { useRouter } from 'next/router';
import Navbar from "../../../components/Layout/Navbar";
import Input01 from '../../../components/Input/Input01';
import AuthOrnaments from '../AuthOrnaments';
import useAuthStore, { handleResendOTP } from '../../../app/authStore';
import { useTranslation } from 'react-i18next';


const ForgetPassword = () => {
    const {
        // states
        fp_form,

        // actions
        changeFpFormValue,
        setOtpEmail,
        resetFpForm,
    } = useAuthStore((state) => state)

    const router = useRouter();
    const { t } = useTranslation();

    const sendOTP = (e) => {
        e.preventDefault()
        setOtpEmail(fp_form.email)
        handleResendOTP({ forget: true, router: router })
    }

    useEffect(() => {
        resetFpForm()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <div className="relative bg-blueGray-50">

            <Head>
                <title>Forgot Password</title>
                <meta name="description" content="Post Card Printing" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* <Navbar /> */}


            <div className="mx-auto z-10 relative pt-16 md:pt-24 mb-10">

                <div className='bg-blueGray-50 md:bg-white md:shadow p-5 md:p-10 max-w-2xl mx-auto rounded-lg'>
                    <div className='text-4xl font-semibold md:font-bold text-gray-800 mb-5'>{t('Forgot Password')}</div>



                    <form onSubmit={sendOTP}>

                        <Input01
                            name="email"
                            value={fp_form.email}
                            className=""
                            onChange={changeFpFormValue}
                            label={t('Email') + '*'}
                            placeholder={t("Enter Email Address")}
                            type="email"
                            required={true}
                        />


                        <button type='submit' className='bg-cBrand hover:bg-cBrickHover text-white transition-all border px-5 py-3 w-full outline-none rounded-md text-center mt-10'>
                            {t('Send OTP Code')}
                        </button>

                    </form>



                </div>

            </div>

            <AuthOrnaments />

        </div>
    );
}

export default ForgetPassword;