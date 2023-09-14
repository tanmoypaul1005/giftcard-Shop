/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react'
import Head from 'next/head';
import { useRouter } from 'next/router';
import Navbar from "../../../components/Layout/Navbar";
import Input01 from '../../../components/Input/Input01';
import AuthOrnaments from '../AuthOrnaments';
import useAuthStore, { handleForgetPasswordOtpVerification, handleOtpVerification, handleResendOTP } from '../../../app/authStore';
import { useTranslation } from 'react-i18next';


const SubmitOtp = () => {

    const {
        // states
        otp_form,

        // actions
        changeOtpFormValue,
        resetOtpForm
    } = useAuthStore((state) => state)

    const router = useRouter();

    const { forget, email } = router.query;
    // console.log('email', email);

    const [timeout, setTimeout] = useState(false)
    const [time, setTime] = useState('02:00');
    const { t } = useTranslation()

    let interval = null;

    const startTimer = () => {
        let minutes = 2, seconds = 0
        setTimeout(false)

        interval = setInterval(() => {
            let new_seconds;
            if (seconds === 0) new_seconds = '00';
            else if (seconds < 10) new_seconds = '0' + seconds;
            else new_seconds = seconds;

            const new_time = `0${minutes}:${new_seconds}`
            setTime(new_time)

            if (seconds === 0 && minutes > 0) {
                minutes--
                seconds = 60
            } else if (seconds === 0 && minutes === 0) {
                clearInterval(interval)
                setTimeout(true)
            }
            seconds--

        }, 1000)
    }

    useEffect(() => {
        resetOtpForm()
        startTimer()
        return () => clearInterval(interval)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <div className="relative bg-blueGray-50">

            <Head>
                <title>{t('OTP Verification')}</title>
                <meta name="description" content="Post Card Printing" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* <Navbar /> */}


            <div className="mx-auto z-10 relative pt-16 md:pt-24 mb-10">

                <div className='bg-blueGray-50 md:bg-white md:shadow p-5 md:p-10 max-w-2xl mx-auto rounded-lg'>
                    <div className='text-4xl font-semibold md:font-bold text-gray-800 mb-5'>{t('OTP Verification')}</div>

                    <div className='text-gray-800 mb-10'> {t('We have send an email with 4 digit OTP verification code.')} </div>

                    <form onSubmit={(e) => {
                        e.preventDefault()
                        forget ?
                            handleForgetPasswordOtpVerification(e, router, email, otp_form.otp)
                            :
                            handleOtpVerification(e, router)
                    }
                    }>
                        <Input01
                            name="otp"
                            value={otp_form.otp}
                            type={'number'}
                            className=""
                            onChange={changeOtpFormValue}
                            label={t("OTP Code")}
                            placeholder={t("Enter OTP Code")}
                        />

                        {
                            timeout ?
                                <div className='text-gray-800 mb-10'>
                                    {t("Didn't Receive Code? ")} <span onClick={async () => {
                                        await handleResendOTP({ forget: false, router: router })
                                        startTimer
                                    }} className='text-cBrand cursor-pointer'> {t('Resend')} </span>
                                </div>
                                :
                                <div className='text-gray-800 mb-10'>
                                    {t("Resend OTP code in ")} <span id="time" className='text-cBrand'>{time} </span>
                                </div>
                        }

                        <button type='submit' className='bg-cBrand hover:bg-cBrickHover text-white transition-all border px-5 py-3 w-full outline-none rounded-md text-center mt-10'>
                            {t('Submit')}
                        </button>

                    </form>


                </div>

            </div>

            <AuthOrnaments />

        </div>
    );
}

export default SubmitOtp;