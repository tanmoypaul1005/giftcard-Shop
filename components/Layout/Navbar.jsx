/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import Link from "next/link";
import { useRouter } from "next/router";
import Search from "../Input/Search";
import LanguageSwitch from "../Switch/LanguageSwitch";
import { PROFILE_JPG } from "../Utilities/Sources";
import { RiMenu3Line } from 'react-icons/ri';
import { CgClose } from 'react-icons/cg'
import Accordion from '../Accordion/Accordion';
import useAuthStore, { getAuthUserInformation, handleGetUserProfileData } from '../../app/authStore';
import AxiosHeader from "../../app/utils/AxiosHeader";
import { Toastr } from "../../app/utils/UtilityFunctions";
import LogoutModal from "../../pages/profile/LogoutModal";
import usePostcardStore, { getPostcardData } from '../../app/stores/PostcardStore';
import useCreateRequestStore from '../../app/stores/CreateCardStore';
import useUserAccountStore from '../../app/stores/UserAccountStore';
import { BaseUrlSrc } from '../../app/utils/Url';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';


const Navbar = () => {

    const [show_mobile_nav, setShowMobileNav] = useState(false)
    const router = useRouter();
    const { search_key, setSearchKey } = usePostcardStore();
    const { isLoggedIn } = useAuthStore()
    const [logoutModal, setLogoutModal] = useState(false);
    const { user_profile } = useAuthStore();
    const { setSelectedCard, setCurrState, resetCreateCardForm, setVoucherInfo } = useCreateRequestStore();
    let user = getAuthUserInformation();
    const { user_profile_api_data } = useAuthStore();
    const { setAppLanguage, setIsUserIdentity } = useUserAccountStore();
    const { t } = useTranslation();

    useEffect(() => {
        // console.log('here');
        user = getAuthUserInformation();

        const code = localStorage.getItem('gifty_app_lang_code');
        if (user_profile_api_data?.lang_code) {
            if (!code || (code != user_profile_api_data?.lang_code))
                localStorage.setItem('gifty_app_lang_code', user_profile_api_data?.lang_code);
            i18next.changeLanguage(user_profile_api_data?.lang_code);
            setAppLanguage(user_profile_api_data?.lang_code);
        } else {
            i18next.changeLanguage(code ?? 'ja');
            setAppLanguage(code ?? 'ja');
            !code && localStorage.setItem('gifty_app_lang_code', 'ja');
        }
    }, [user_profile_api_data])

    useEffect(() => {
        // ! Using debounce
        const timer = setTimeout(() => getPostcardData(null, null, search_key), 500)
        return () => clearTimeout(timer)
    }, [search_key]);

    const handleClick = () => {
        if (router.pathname != '/create') {
            setSelectedCard(null);
            resetCreateCardForm();
            setCurrState('upload_image');
            getPostcardData();
            setVoucherInfo(null);
        }
    }

    const { changeUserProfileValueWithoutEvent } = useAuthStore();

    useEffect(() => {
        if (!isLoggedIn) return;
        updateUser();
        handleGetUserProfileData();
    }, []);


    const updateUser = () => {
        const user = JSON.parse(localStorage.getItem('user'));
        changeUserProfileValueWithoutEvent('name', user.name ?? '');
        changeUserProfileValueWithoutEvent('email', user.email ?? '');
        changeUserProfileValueWithoutEvent('phone', user.phone ?? '');
        changeUserProfileValueWithoutEvent('image', user.image_url ? (BaseUrlSrc + user.image_url) : null);
        // console.log('user', user);
    }

    const { verification_status, user_verification_info, setVerificationStatus } = useUserAccountStore();

    const defineUserStatusIcon = () => {
        if (verification_status === 'verify') return { img: '/Images/svg/verify.svg', label: t('Verify Identity') };
        if (verification_status === 'pending') return { img: '/Images/svg/pending_verification.svg', label: t('Verification Pending') };
        if (verification_status === 'verified') return { img: '/Images/svg/verified.svg', label: t('Verified') };
        if (verification_status === 'failed') return { img: '/Images/svg/verification_failed.svg', label: t('Verification Failed') };
    }

    useEffect(() => {
        const info = JSON.parse(localStorage.getItem('gifty_user_verification_info'));
        if (info === null) setVerificationStatus('verify');
        if (info?.status === 'pending') setVerificationStatus('pending');
        if (info?.status === 'verified') setVerificationStatus('verified');
        if (info?.status === 'not_verified') setVerificationStatus('failed');

    }, [user_verification_info])



    return (
        <div className="fixed w-full bg-[#FAF5FF] md:bg-white shadow z-50">
            <div className="flex justify-between items-center custom-container h-16">
                <div className='flex justify-start items-center'>
                    <div className='relative h-20 w-24 mr-5 lg:mr-10 cp block md:hidden lg:block'>
                        <Link href="/" passHref>
                            <div>
                                <img className='mt-6' src={'/Images/svg/app_logo.svg'} alt="Logo" layout="fill" />
                            </div>
                        </Link>
                    </div>

                    <div
                        className="hidden md:flex justify-between items-center space-x-5 xl:space-x-10 text-md font-medium">
                        <span onClick={() => handleClick()} className={router.pathname === "/create" ? "text-cBrand" : ""}><Link
                            href="/create">{t('Create')}</Link></span>
                        <span className={router.pathname === "/post-cards" ? "text-cBrand inline-block overflow-auto whitespace-nowrap" : ""}><Link
                            href="/post-cards">{t('Post Cards')}</Link></span>
                        <span className={router.pathname === "/shops" ? "text-cBrand" : ""}><Link
                            href="/shops">{t('Shops')}</Link></span>
                        <span className='inline-block overflow-auto whitespace-nowrap'><Link
                            href="/#contact-us">{t('Contact Us')}</Link></span>

                    </div>
                </div>

                <div>
                    <div className="hidden md:flex justify-between items-center">
                        {router.pathname === '/post-cards' &&
                            <Search
                                className="w-56 xl:w-80 mr-5"
                                className2='bg-blueGray-50'
                                search={(e) => setSearchKey(e.target.value)}
                                name='search_key'
                                value={search_key}
                            />
                        }

                        {!isLoggedIn && <Link href='/auth/login'>
                            <button
                                className="mr-3 lg:mr-5 border-2 border-gray-900 bg-white hover:bg-gray-900 text-gray-900 hover:text-white transition-all ease-in w-[6rem] lg:w-[7.5rem] h-10 rounded-md text-md font-medium focus:outline-none">
                                {t('Log in')}
                            </button>
                        </Link>}

                        {isLoggedIn && <Link href={"/profile"} passHref>
                            <div
                                className={`relative h-7 cp rounded flex items-center space-x-1 px-2 pr-5 mr-6 lg:mr-10 mr-10`}>
                                <div
                                    className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-gray-400 h-8 w-8 overflow-hidden rounded-full">
                                    <img className="h-full w-full" src={user.image_url ?? '/Images/profile.png'} alt="Post Card Image"
                                        layout="fill" />
                                </div>
                            </div>

                        </Link>}

                        {/* //! user verification:: don't remove this comment, it will need in future. */}
                        {/* {isLoggedIn &&
                            <Link href={"/profile/account-settings"} passHref>
                                <div onClick={() => {
                                    setIsUserIdentity(true);
                                }} className='flex flex-col justify-center items-center space-y-0 mr-5 cp'>
                                    <img className="h-[30px] w-[30px]" src={defineUserStatusIcon().img} alt="Post Card Image" layout="fill" />
                                    <div className='text-fs12 font-fw500 text-cBrand text-center'>{defineUserStatusIcon().label}</div>
                                </div>
                            </Link>
                        } */}

                        <LanguageSwitch />
                    </div>
                    <div className='block md:hidden'>
                        {!show_mobile_nav &&
                            <RiMenu3Line onClick={() => setShowMobileNav(!show_mobile_nav)} className='text-3xl cp' />}
                        {show_mobile_nav &&
                            <CgClose onClick={() => setShowMobileNav(!show_mobile_nav)} className='text-3xl cp' />}
                    </div>
                </div>
            </div>

            <div className={`bg-white overflow-hidden transition-all ease-in transition-[max-height] ${!show_mobile_nav ? 'max-h-0' : 'max-h-[40rem]'} md:max-h-0`}>
                <div className='ml-5 mt-5 w-[70px]'>
                    <LanguageSwitch />
                </div>

                <div className='p-5'>
                    <div className="flex flex-col justify-between space-y-4 text-md font-medium pb-3 border-b">
                        <span onClick={() => setShowMobileNav(!show_mobile_nav)} className={router.pathname === "/create" ? "text-cBrand" : ""}><Link
                            href="/create">{t('Create')}</Link></span>
                        <span onClick={() => setShowMobileNav(!show_mobile_nav)} className={router.pathname === "/post-cards" ? "text-cBrand" : ""}><Link
                            href="/post-cards">{t('Post Cards')}</Link></span>
                        <span onClick={() => setShowMobileNav(!show_mobile_nav)} className={router.pathname === "/shops" ? "text-cBrand" : ""}><Link
                            href="/shops">{t('Shops')}</Link></span>
                        <span onClick={() => setShowMobileNav(!show_mobile_nav)} className=''><Link
                            href="/#contact-us">{t('Contact Us')}</Link></span>
                    </div>



                    {isLoggedIn && <Accordion
                        no_border
                        header={
                            <div className='flex items-center pb-2'>
                                <div className='mr-3'>
                                    <img className='h-10 w-10 md:h-10 md:w-10 bg-gray-200 border rounded-full'
                                        src={user_profile?.image ?? PROFILE_JPG}
                                        alt="" />
                                </div>

                            </div>
                        }
                        body={
                            <div className="flex flex-col justify-between space-y-4 text-md font-medium pb-3 border-b">
                                <span onClick={() => setShowMobileNav(!show_mobile_nav)} className={router.pathname === "/profile" ? "text-cBrand" : ""}><Link
                                    href="/profile">{t('Profile')}</Link></span>

                                <span onClick={() => setShowMobileNav(!show_mobile_nav)} className={router.pathname === "/profile/address-book" ? "text-cBrand" : ""}><Link
                                    href="/profile/address-book">{t('Address Book')}</Link></span>

                                <span onClick={() => setShowMobileNav(!show_mobile_nav)}
                                    className={router.pathname === "/profile/order-history" ? "text-cBrand" : ""}><Link
                                        href="/profile/order-history">{t('Order History')}</Link></span>




                                {/* <span className={router.pathname === "/profile/draft" ? "text-cBrand" : ""}><Link
                                    href="/profile/draft">Draft</Link></span>
                                <span
                                    className={router.pathname === "/profile/refer-friends" ? "text-cBrand" : ""}><Link
                                        href="/profile/refer-friends">Refer Friends</Link></span> */}
                            </div>
                        }
                    />}

                    {isLoggedIn && <div className="flex flex-col justify-between space-y-4 text-md font-medium">
                        <span onClick={() => setShowMobileNav(!show_mobile_nav)} className={router.pathname === "/profile/account-settings" ? "text-cBrand" : ""}><Link
                            href="/profile/account-settings">{t('Account Settings')}</Link></span>
                        <div onClick={() => setLogoutModal(true)}>{t('Log Out')}</div>
                    </div>}

                    {!isLoggedIn && <div className="flex flex-col justify-between space-y-4 text-md font-medium mt-2">

                        <Link href={'/auth/login'}>{t('Log in')}</Link>
                    </div>}


                </div>
            </div>

            <LogoutModal
                show_modal={logoutModal}
                setShowModal={setLogoutModal}
                onConfirm={() => {
                    try {
                        localStorage.removeItem('postcard_token');
                        AxiosHeader({ token: null })
                        setLogoutModal(false);
                        router.push('/');
                        Toastr({ message: t('Logged out successfully!'), type: 'success' });
                    } catch (error) {
                        Toastr({ message: t(t('An error occurred!')), type: 'error' });
                    }


                }}
            />
        </div>
    );
}

export default Navbar;