/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
// import Image from 'next/image'
import Input01 from '../../../components/Input/Input01';
import Sidebar from '../../../components/Layout/Sidebar';
import Switch01 from '../../../components/Switch/Switch01';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import useAuthStore, { handleChangeNewPassword, handleGetUserProfileData, handleToggleSettings } from '../../../app/authStore';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import Head from 'next/head';
import VerifyIdentity from './verify-identity';
import { useTranslation } from 'react-i18next';
import useUserAccountStore from '../../../app/stores/UserAccountStore';


const AccountSettings = () => {

    const [isFormShow, setIsFormShow] = useState(false);
    const [is_identity_show, setIsIdentityShow] = useState(false);
    const [show_password, setShowPassword] = useState(false);
    const [show_password2, setShowPassword2] = useState(false);
    const [show_password3, setShowPassword3] = useState(false);
    const [isEmailOn, setIsEmailOn] = useState(false);
    const [isPushOn, setIsPushOn] = useState(false);
    const {is_user_identity, setIsUserIdentity} = useUserAccountStore();

    const toggleShowPassword = () => setShowPassword(!show_password);
    const toggleShowPassword2 = () => setShowPassword2(!show_password2);
    const toggleShowPassword3 = () => setShowPassword3(!show_password3);
    const { t } = useTranslation();

    const {
        // states
        change_password_form,
        user_profile_api_data,

        // actions
        changePasswordFormValue,
        resetChangePasswordFormValue,
    } = useAuthStore()

    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleChangeNewPassword();
    }

    const switchToggle = async (type) => {
        if (type == 'email') {
            const success = await handleToggleSettings('email_notification')
            if (success) setIsEmailOn(!isEmailOn)
        } else {
            const success = await handleToggleSettings('push_notification')
            if (success) setIsPushOn(!isPushOn)
        }
    }

    useEffect(() => {
        resetChangePasswordFormValue();
        handleGetUserProfileData();
        setToggle();
    }, [])

    useEffect(() => {
        setToggle()
        const { is_email_notification, is_push_notification } = user_profile_api_data
    }, [user_profile_api_data])

    const setToggle = () => {
        const { is_email_notification, is_push_notification } = user_profile_api_data
        is_email_notification === 1 ? setIsEmailOn(true) : setIsEmailOn(false)
        is_push_notification === 1 ? setIsPushOn(true) : setIsPushOn(false)
    }

    return (
        <div>
            <Head>
                <title>Account Settings</title>
                <meta name="description" content="Post Card Printing" />
                <link rel="icon" href="/favicon.ico" />
            </Head>


            <div className="flex">

                <Sidebar />

                <div className="relative pt-7 w-full md:flex md:flex-col lg:flex-row md:space-y-10 lg:space-y-0 lg:space-x-10 md:m-10">

                    <div className={`md:static fixed transform  ${(isFormShow || is_identity_show) ? '-translate-x-[14rem]' : 'translate-x-0'} md:translate-x-0 transition-all ease-in px-5 md:px-0 w-full md:w-auto`}>
                        <div className="py-4 border-b mb-5 md:hidden flex items-center justify-between space-x-3">
                            <div className='text-xl font-bold inline truncate'>{t('Account Settings')}</div>
                        </div>

                        <div className="md:w-[25rem]">
                            <div className='bg-blueGray-50 md:bg-white md:shadow p-0 md:p-6 md:max-w-2xl rounded-lg space-y-3'>



                                <div onClick={() => {
                                    setIsFormShow(true);
                                    setIsUserIdentity(false);
                                }} className={`flex items-center justify-between py-2 px-0 md:px-4 ${!is_user_identity ? 'md:bg-cTintBrick text-cBrand' : 'md:bg-[#FAFAFF]'} rounded-md cp`}>
                                    <div className="font-medium">{t('Change Password')}</div>
                                    <IoIosArrowForward className="text-lg text-gray-600" />
                                </div>

                               {/* //! user verification:: don't remove this comment, it will need in future. */}
                                {/* <div onClick={() => {
                                    setIsUserIdentity(true);
                                    setIsIdentityShow(true);
                                }} className={`flex items-center justify-between py-2 px-0 md:px-4 ${is_user_identity ? 'md:bg-cTintBrick text-cBrand' : 'md:bg-[#FAFAFF]'} rounded-md cp`}>
                                    <div className="font-medium">{t('Verify Identity')}</div>
                                    <IoIosArrowForward className="text-lg text-gray-600" />
                                </div> */}

                                <div className="flex items-center justify-between py-2 px-0 md:px-4 md:bg-[#FAFAFF] rounded-md">
                                    <div className="font-medium">{t('Push Notification')}</div>
                                    <Switch01 is_on={isPushOn} setIsOn={() => switchToggle('push')} />
                                </div>

                                <div className="flex items-center justify-between py-2 px-0 md:px-4 md:bg-[#FAFAFF] rounded-md">
                                    <div className="font-medium">{t('E-mail Notification')}</div>
                                    <Switch01 is_on={isEmailOn} setIsOn={() => switchToggle('email')} />
                                </div>

                            </div>
                        </div>
                    </div>

                    {
                        !is_user_identity ?
                            <>
                                <div className={`md:static fixed transform  ${isFormShow ? 'translate-x-0' : 'translate-x-[50rem]'} md:translate-x-0 transition-all ease-in px-5 md:px-0 w-full md:max-w-2xl`}>
                                    <div className="flex-1">

                                        <form onSubmit={handleFormSubmit}>
                                            <div className='bg-blueGray-50 md:bg-white md:shadow p-0 md:p-6 max-w-2xl rounded-lg'>
                                                <div className='text-4xl font-semibold text-gray-800 mb-5 hidden md:block'>{t('Change Password')}</div>

                                                <div onClick={() => setIsFormShow(false)} className="py-4 border-b mb-5 md:hidden flex items-center space-x-3 cp">
                                                    <IoIosArrowBack className="text-lg text-gray-600" />
                                                    <div className='text-xl font-bold inline truncate'>{t('Change Password')}</div>
                                                </div>

                                                <div className="flex-1">

                                                    <Input01
                                                        name="old_password"
                                                        value={change_password_form.old_password}
                                                        onChange={changePasswordFormValue}
                                                        label={t("Current Password*")}
                                                        type={show_password ? 'text' : "password"}
                                                        minLength={6}
                                                        required={true}
                                                        icon={show_password ? (
                                                            <AiFillEye onClick={toggleShowPassword} className="h-[90%] text-xl cursor-pointer" />
                                                        ) : (
                                                            <AiFillEyeInvisible onClick={toggleShowPassword} className="h-[90%] text-xl cursor-pointer" />
                                                        )}
                                                        autoFocus={true}
                                                    />

                                                    <Input01
                                                        name="password"
                                                        value={change_password_form.password}
                                                        onChange={changePasswordFormValue}
                                                        label={t("New Password*")}
                                                        type={show_password2 ? 'text' : "password"}
                                                        minLength={6}
                                                        icon={show_password2 ? (
                                                            <AiFillEye onClick={toggleShowPassword2} className="h-[90%] text-xl cursor-pointer" />
                                                        ) : (
                                                            <AiFillEyeInvisible onClick={toggleShowPassword2} className="h-[90%] text-xl cursor-pointer" />
                                                        )}
                                                    />

                                                    <Input01
                                                        name="password_confirmation"
                                                        value={change_password_form.password_confirmation}
                                                        onChange={changePasswordFormValue}
                                                        label={t("Confirm New Password*")}
                                                        type={show_password3 ? 'text' : "password"}
                                                        required={true}
                                                        minLength={6}
                                                        icon={show_password3 ? (
                                                            <AiFillEye onClick={toggleShowPassword3} className="h-[90%] text-xl cursor-pointer" />
                                                        ) : (
                                                            <AiFillEyeInvisible onClick={toggleShowPassword3} className="h-[90%] text-xl cursor-pointer" />
                                                        )}
                                                    />

                                                </div>

                                                <div className="x-center">
                                                    <button type='submit' className="mx-auto mt-2 px-10 py-2 bg-cBrand text-white transition-all ease-in rounded-md text-sm md:text-base font-bold shadow">
                                                        {t('Save Changes')}
                                                    </button>
                                                </div>
                                            </div>
                                        </form>

                                    </div>
                                </div>
                            </>
                            :
                            <VerifyIdentity isFormShow={is_identity_show} setIsFormShow={setIsIdentityShow} />
                    }

                </div>

            </div>

        </div >
    );
}

export default AccountSettings;