/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useEffect, useState } from 'react'
import Head from 'next/head';
import Input01 from '../../../components/Input/Input01';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import AuthOrnaments from '../AuthOrnaments';
import useAuthStore, { handleUserLogin } from '../../../app/authStore';
import { useRouter } from 'next/router';
import SocialLoginOptions from '../SocialLoginOptions';
import { useTranslation } from "react-i18next";

const Login = () => {

    const [show_password, setShowPassword] = useState(false);

    const toggleShowPassword = () => setShowPassword(!show_password);

    const {
        // states
        login_form,
        isLoggedIn,

        // actions
        changeLoginFormValue,
        resetLoginFormValue,
    } = useAuthStore((state) => state)

    const router = useRouter();
    const { t } = useTranslation();

    useEffect(() => {
        if (localStorage.postcard_token) {
            router.push('/')
        }
    }, [isLoggedIn])

    useEffect(() => {
        resetLoginFormValue()
    }, [])



    return (
        <div className="relative bg-blueGray-50">

            <Head>
                <title>Login</title>
                <meta name="description" content="Post Card Printing" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* <Navbar /> */}



            <div className="mx-auto z-10 relative pt-16 md:pt-24 mb-10">


                <div className='bg-blueGray-50 md:bg-white md:shadow p-5 md:p-10 max-w-2xl mx-auto rounded-lg'>
                    <div className='text-4xl font-semibold md:font-bold text-gray-800 mb-5'>{t('Login')}</div>

                    <form onSubmit={(e) => handleUserLogin(e, router)}>
                        <Input01
                            label={t("Email") + '*'}
                            name="email"
                            value={login_form.email}
                            type={'email'}
                            placeholder={t("Enter Email Address")}
                            onChange={changeLoginFormValue}
                            required={true}
                        />

                        <Input01
                            name="password"
                            value={login_form.password}
                            type={show_password ? 'text' : 'password'}
                            placeholder={t("Enter Password")}
                            onChange={changeLoginFormValue}
                            label={
                                <div className='flex items-center justify-between'>
                                    <div>{t('Password')}*</div>
                                    <div className='text-cRed hover:underline font-semibold'>
                                        <Link href='/auth/forget-password'>{t('Forget Password') + '?'}</Link>
                                    </div>
                                </div>
                            }
                            icon={show_password ? (
                                <AiFillEye onClick={toggleShowPassword} className="h-[90%] text-xl cursor-pointer" />
                            ) : (
                                <AiFillEyeInvisible onClick={toggleShowPassword} className="h-[90%] text-xl cursor-pointer" />
                            )}
                            required={true}
                        />


                        <button className='bg-cBrand hover:bg-cBrickHover text-white transition-all border px-5 py-3 w-full outline-none rounded-md text-center mt-10'> {t('Login')} </button>

                    </form>

                    <div className='text-center mt-5 font-semibold text-gray-600'>
                        {t("Don't have an account?")}
                        <span className='text-cBrand font-bold ml-2 cp hover:underline'>
                            <Link href="/auth/register">{t('Register')}</Link>
                        </span>
                    </div>



                    <SocialLoginOptions />

                </div>

            </div>

            <AuthOrnaments />


        </div>
    );
}

export default Login;