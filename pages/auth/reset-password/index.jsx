/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import Head from 'next/head';
import Navbar from "../../../components/Layout/Navbar";
import Input01 from '../../../components/Input/Input01';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import AuthOrnaments from '../AuthOrnaments';
import { handleSetNewPassword } from '../../../app/authStore';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';


const ResetPassword = () => {

    const [show_password, setShowPassword] = useState(false)
    const [show_password2, setShowPassword2] = useState(false)
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const { t } = useTranslation()

    const router = useRouter();
    const { email } = router.query;


    const toggleShowPassword = () => {
        setShowPassword(!show_password)
    }
    const toggleShowPassword2 = () => {
        setShowPassword2(!show_password2)
    }

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
                    <div className='text-4xl font-semibold md:font-bold text-gray-800 mb-5'>{t('New Password')}</div>



                    <form onSubmit={(e) => handleSetNewPassword(e, router, email, password, password2)}>

                        <Input01 onChange={(e) => setPassword(e.target.value)} name="password" label={t("Type New Password") + '*'} type={!show_password && "password"} placeholder={t("Enter Password")} required={true}
                            icon={show_password ? (
                                <AiFillEye onClick={toggleShowPassword} className="h-[90%] text-xl cursor-pointer" />
                            ) : (
                                <AiFillEyeInvisible onClick={toggleShowPassword} className="h-[90%] text-xl cursor-pointer" />
                            )}
                        />

                        <Input01 onChange={(e) => setPassword2(e.target.value)} name="password_confirmation" label={t("Re-Type New Password") + '*'} type={!show_password2 && "password"} placeholder={t("Re-Enter Password")} required={true}
                            icon={show_password2 ? (
                                <AiFillEye onClick={toggleShowPassword2} className="h-[90%] text-xl cursor-pointer" />
                            ) : (
                                <AiFillEyeInvisible onClick={toggleShowPassword2} className="h-[90%] text-xl cursor-pointer" />
                            )}
                        />


                        <button type='submit' className='bg-cBrand hover:bg-cBrickHover text-white transition-all border px-5 py-3 w-full outline-none rounded-md text-center mt-10'>
                            {t('Confirm')}
                        </button>

                    </form>


                </div>

            </div>

            <AuthOrnaments />

        </div>
    );
}

export default ResetPassword;