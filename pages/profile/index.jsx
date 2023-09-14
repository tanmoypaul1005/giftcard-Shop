/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import { PROFILE_JPG } from '../../components/Utilities/Sources';
import Input01 from '../../components/Input/Input01';
import Sidebar from '../../components/Layout/Sidebar';
import { useEffect, useRef, useState } from 'react';
import useAuthStore, { handleGetUserProfileData, handleUpdateUserProfile } from '../../app/authStore';
import Head from 'next/head';
import { app_name } from '../../app/utils/const';
import { getBase64 } from '../../app/stores/UtilityStore';
import { BaseUrlSrc } from '../../app/utils/Url';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import { Tooltip } from 'antd';
import { useTranslation } from 'react-i18next';
import DeleteAccountModal from './DeleteAccountModal';
import useUserAccountStore, { getDeleteAccountInfo } from '../../app/stores/UserAccountStore';
import { Toastr } from '../../app/utils/UtilityFunctions';


const Profile = () => {

    const [user, setUser] = useState({});
    const {
        user_profile,
        changeUserProfileValue,
        changeUserProfileValueWithoutEvent,
        user_profile_api_data,
    } = useAuthStore();
    const { is_show_account_delete_modal, setIsShowAccountDeleteModal } = useUserAccountStore();

    useEffect(() => {
        updateUser();
        handleGetUserProfileData();
    }, []);

    useEffect(() => {
        updateUser();
    }, [user_profile_api_data])


    const inputFile = useRef(null);
    const [image, setImage] = useState(null);
    const [isImageChanged, setIsImageChanged] = useState(false);
    const [checked, setChecked] = useState([true, false, false, false]);
    const [reason, setReason] = useState(true);

    const updateUser = () => {
        const user = JSON.parse(localStorage.getItem('user'));
        setUser(user);
        changeUserProfileValueWithoutEvent('name', user.name ?? '');
        changeUserProfileValueWithoutEvent('email', user.email ?? '');
        changeUserProfileValueWithoutEvent('phone', user.phone ?? '');
        changeUserProfileValueWithoutEvent('address', user.address ?? '');
        changeUserProfileValueWithoutEvent('city', user.city ?? '');
        changeUserProfileValueWithoutEvent('post_code', user.post_code ?? '');
        changeUserProfileValueWithoutEvent('image', user.image_url ? (!user.image_url.includes('http') ? BaseUrlSrc + user.image_url : user.image_url) : null);
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        await handleUpdateUserProfile(isImageChanged);
        updateUser();
    }

    const handlePhoneNumberChange = (e) => {
        // keep only numbers  in the input
        e.target.value = e.target.value.replace(/[^0-9]/g, '');
        const phone = e.target.value;
        if (phone.length > 15) return;
        changeUserProfileValueWithoutEvent('phone', phone);
    }

    const handlePostCodeChange = (e) => {
        // keep only numbers  in the input
        e.target.value = e.target.value.replace(/[^0-9]/g, '');
        const code = e.target.value;
        if (code.length > 8) return;
        changeUserProfileValueWithoutEvent('post_code', code);
    }

    const { t } = useTranslation();


    return (
        <div>

            <Head>
                <title>{app_name} | Profile</title>
                <meta name="description" content="Post Card Printing" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* <Navbar /> */}

            <div className="flex">

                <Sidebar user={user} />

                <div className="relative pt-16 w-full">
                    <div className='bg-white md:shadow px-5 md:p-6 md:max-w-4xl rounded-lg md:m-10'>
                        <div className='text-4xl font-semibold text-gray-800 mb-5 hidden md:block'>{t('My Account')}</div>

                        <form onSubmit={handleFormSubmit}>
                            <div className="md:flex justify-between items-center md:space-x-10">

                                <div className="y-center !hidden md:!flex w-1/3">
                                    <div className="bg-gray-400 h-20 w-20 relative overflow-hidden rounded-full mb-3">

                                        <input onChange={(e) => {
                                            getBase64(e.target.files[0], (result) => {
                                                setImage(result);
                                                setIsImageChanged(true);
                                                changeUserProfileValueWithoutEvent('image', result);
                                                console.log('result', user_profile);
                                            })
                                        }}
                                            type='file' id='file' ref={inputFile} style={{ display: 'none' }} />

                                        <img onClick={() => inputFile.current.click()} className="h-full w-full cp" src={user_profile?.image ?? '/Images/profile.png'} alt="Post Card Image" layout="fill" objectFit="cover" />

                                    </div>
                                    <div className='text-sm font-semibold text-center break-all w-1/2'>{user.name ?? 'NA'}</div>

                                    <Tooltip title={t("Referral Code")} color={'#FB607F'} key={'color'}>
                                        <div onClick={async () => {
                                            await navigator.clipboard.writeText(user?.refer_code);
                                            Toastr({ message: t('Copied to clipboard'), type: 'info' })
                                        }} className='text-sm font-normal text-center  w-1/2 text-cBrand cursor-pointer'>{user?.refer_code}</div>
                                    </Tooltip>

                                    <div className="px-2 py-1 rounded-full mb-4 bg-cCoinBalanceBG">
                                        <div className="text-center text-xs font-normal">Available Coins: {user?.point ?? 0}</div>
                                    </div>
                                </div>

                                <div className="py-4 border-b mb-5 md:hidden flex items-center justify-between space-x-3">
                                    <div className="flex items-center space-x-3">
                                        <div className="bg-gray-400 h-8 w-8 relative overflow-hidden rounded-full">
                                            <img onClick={() => inputFile.current.click()} className="h-full w-full rounded-full cp" src={user_profile?.image ?? PROFILE_JPG} alt="Post Card Image" layout="fill" objectFit="cover" />
                                        </div>
                                        <div className='text-lg text-center font-bold w-1/2 break-all'>{user.name ?? 'NA'}</div>
                                    </div>


                                </div>

                                <div className="flex-1">
                                    <Input01
                                        name="name"
                                        value={user_profile?.name}
                                        label={t("Name")}
                                        placeholder={t("Enter Your Name")}
                                        is_required={true}
                                        onChange={(e) => changeUserProfileValue(e)}
                                    />

                                    <div className='relative'>
                                        <Input01
                                            name="email"
                                            value={user_profile?.email}
                                            label={t("Email")}
                                            placeholder={t("Enter Email Address")}
                                            is_readonly={true}
                                        />
                                        <Tooltip title={t("Email cannot be changed!")} color={'#FB607F'} key={'color'}>
                                            <BsFillInfoCircleFill className='absolute top-[50px] right-3 h-5 w-5 cursor-help' />
                                        </Tooltip>
                                    </div>

                                    <Input01
                                        name="phone"
                                        value={user_profile?.phone}
                                        label={t("Phone")}
                                        placeholder={t("Enter Phone Number")}
                                        onChange={handlePhoneNumberChange}
                                    />

                                    <Input01
                                        name="address"
                                        value={user_profile?.address}
                                        label={t("Address")}
                                        placeholder={t("Enter Address")}
                                        onChange={changeUserProfileValue}
                                    />

                                    <Input01
                                        name="post_code"
                                        value={user_profile?.post_code}
                                        label={t("Post Code")}
                                        placeholder={t("Enter Post Code")}
                                        onChange={handlePostCodeChange}
                                    />

                                    <Input01
                                        name="city"
                                        value={user_profile?.city}
                                        label={t("City")}
                                        placeholder={t("Enter City")}
                                        onChange={changeUserProfileValue}
                                    />

                                </div>

                            </div>

                            <div className="flex flex-row justify-between w-full mt-10 md:mt-0">
                                <button type='button' onClick={() => {
                                    setIsShowAccountDeleteModal(true);
                                    setReason(true);
                                    setChecked([true, false, false, false]);
                                }} className=" mt-2 px-5  py-3 md:py-2 bg-cRed hover:bg-cBrickHover text-white transition-all ease-in rounded-md text-sm md:text-base font-bold shadow">
                                    <span className="">{t('Delete Account')}</span>
                                </button>

                                <button type='submit' className=" mt-2 px-5 py-3 md:py-2 bg-cBrand hover:bg-cBrickHover text-white transition-all ease-in rounded-md text-sm md:text-base font-bold shadow">
                                    <span className="">{t('Save Changes')}</span>
                                </button>
                            </div>

                        </form>
                    </div>
                </div>

            </div>

            <DeleteAccountModal show_modal={is_show_account_delete_modal} setShowModal={setIsShowAccountDeleteModal} checked={checked} setChecked={setChecked} reason={reason} setReason={setReason} />

        </div>
    );
}

export default Profile;