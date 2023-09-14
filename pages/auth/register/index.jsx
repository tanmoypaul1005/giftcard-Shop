/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useEffect, useState } from 'react'
import Head from 'next/head';
import Navbar from "../../../components/Layout/Navbar";
import Input01 from '../../../components/Input/Input01';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import AuthOrnaments from '../AuthOrnaments';
import useAuthStore, { handleUserRegistration } from '../../../app/authStore';
import SocialLoginOptions from '../SocialLoginOptions';
import { useRouter } from 'next/router';
import { useTranslation } from "react-i18next";


const Register = () => {

    const {
        // states
        register_form,

        // actions
        changeRegisterFormValue,
        resetRegisterFormValue,
        isLoggedIn,
    } = useAuthStore((state) => state)

    const router = useRouter();
    const { t } = useTranslation();


    const [show_password, setShowPassword] = useState(false)
    const [show_confirm_password, setShowConfirmPassword] = useState(false)

    const toggleShowPassword = ({ type }) => type === 'password' ? setShowPassword(!show_password) : setShowConfirmPassword(!show_confirm_password);

    useEffect(() => {
        if (localStorage.postcard_token) {
            router.push('/')
        }
    }, [isLoggedIn])

    useEffect(() => {
        resetRegisterFormValue()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <div className="relative bg-blueGray-50">

            <Head>
                <title>{t('Register')}</title>
                <meta name="description" content="Post Card Printing" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* <Navbar /> */}


            <div className="mx-auto z-10 relative pt-16 md:pt-24 mb-10">

                <div className='bg-blueGray-50 md:bg-white md:shadow p-5 md:p-10 max-w-2xl mx-auto rounded-lg'>

                    <div className='text-4xl font-semibold md:font-bold text-gray-800 mb-5 md:mb-10'>{t('Register')}</div>

                    <form onSubmit={(e) => handleUserRegistration(e, router)}>
                        <Input01
                            name="name"
                            label={t("Full Name") + "*"}
                            placeholder={t("Enter Full Name")}
                            onChange={changeRegisterFormValue}
                            required={true}
                        />

                        <Input01
                            label={t("Email") + "*"}
                            name="email"
                            value={register_form.email}
                            type={'email'}
                            placeholder={t("Enter Email Address")}
                            onChange={changeRegisterFormValue}
                            required={true}
                        />

                        <Input01
                            onChange={changeRegisterFormValue}
                            name="password"
                            value={register_form.password}
                            type={!show_password ? "password" : "text"}
                            label={t("Password") + "*"}
                            placeholder={t("Enter Password")}
                            icon={show_password ? (
                                <AiFillEye onClick={() => toggleShowPassword({ type: 'password' })} className="h-[90%] text-xl cursor-pointer" />
                            ) : (
                                <AiFillEyeInvisible onClick={() => toggleShowPassword({ type: 'password' })} className="h-[90%] text-xl cursor-pointer" />
                            )}
                        />

                        <Input01
                            onChange={changeRegisterFormValue}
                            name="password_confirmation"
                            value={register_form.password_confirmation}
                            type={!show_confirm_password ? "password" : "text"}
                            label={t("Confirm Password")}
                            placeholder={t("Enter Password Confirmation")}
                            icon={show_confirm_password ? (
                                <AiFillEye onClick={() => toggleShowPassword({ type: 'confirm_password' })} className="h-[90%] text-xl cursor-pointer" />
                            ) : (
                                <AiFillEyeInvisible onClick={() => toggleShowPassword({ type: 'confirm_password' })} className="h-[90%] text-xl cursor-pointer" />
                            )}
                        />

                        <Input01
                            label={t("Refer Code")}
                            name="refer_code"
                            value={register_form.refer_code}
                            type={'text'}
                            placeholder={t("Enter Refer Code")}
                            onChange={changeRegisterFormValue}
                        />


                        <button className='bg-cBrand hover:bg-cBrickHover text-white transition-all border px-5 py-3 w-full outline-none rounded-md text-center mt-10'>
                            {t('Register')}
                        </button>

                    </form>

                    <div className='text-center mt-5 font-semibold text-gray-600'>
                        {t('Already have an account?')}
                        <span className='text-cBrand font-bold ml-2 cp hover:underline'>
                            <Link href="/auth/login">{t('Login')}</Link>
                        </span>
                    </div>



                    <SocialLoginOptions />

                </div>

            </div>

            <AuthOrnaments />

        </div>
    );
}

export default Register;