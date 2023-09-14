/* eslint-disable @next/next/no-img-element */
import Input01 from '../../../components/Input/Input01';
import Sidebar from '../../../components/Layout/Sidebar';
import { RiFacebookFill } from 'react-icons/ri';
import { GrInstagram } from 'react-icons/gr';
import { BsTwitter } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import useAuthStore, { getUserReferCode } from '../../../app/authStore';
import { BaseUrlSrc } from '../../../app/utils/Url';
import {
    FacebookShareButton,
    InstapaperShareButton,
    TwitterShareButton,
} from "react-share";
import { useTranslation } from 'react-i18next';

const ReferFriends = () => {

    const [is_copied, setIsCopied] = useState(false);
    const { t } = useTranslation();

    const copyToClipBoard = () => {
        navigator.clipboard.writeText(BaseUrlSrc + useAuthStore.getState().refer_code)
        console.log("Copied");
        setIsCopied(true)
        setTimeout(() => {
            setIsCopied(false)
        }, 3000);
    }

    useEffect(() => {
        getUserReferCode();

    }, [])


    return (
        <div>

            <div className="flex">

                <Sidebar />

                <div className="relative pt-16 w-full z-10">
                    <div className='md:bg-white md:shadow px-5 md:p-6 max-w-2xl rounded-lg md:m-10'>

                        <div className="py-4 border-b mb-5 md:hidden flex items-center justify-between space-x-3">
                            <div className='text-xl font-bold inline truncate'>{t('Refer Friends')}</div>
                        </div>

                        <div className='text-md md:text-4xl font-semibold text-gray-800 mb-5'>{t('Refer A Friend & Collect Reward')}</div>

                        <div className="text-lg md:mr-20">
                            {t('SHARE WITH FRIENDS & EARN GIFTY COIN AS REWARD.')}
                        </div>

                        <Input01 name=""
                            onClick={copyToClipBoard}
                            value={BaseUrlSrc + useAuthStore.getState().refer_code}
                            is_readonly
                            className="my-5 md:mt-10"
                            className3="md:py-5 pr-36 cp"
                            className4="px-1"
                            label={(
                                <div className="font-semibold text-gray-800">{t('Your Referral Link')}</div>
                            )}
                            icon={(
                                is_copied ? (
                                    <button className="mx-auto px-8 py-2 bg-gray-400 text-white rounded-md text-sm md:text-base font-bold shadow">
                                        {t('Copied')}
                                    </button>
                                ) : (
                                    <button onClick={copyToClipBoard} className="mx-auto px-10 py-2 bg-cBrand text-white rounded-md text-sm md:text-base font-bold shadow">
                                        {t('Copy')}
                                    </button>
                                )
                            )}
                        />

                        <div className="text-sm text-center font-medium my-5">{t('Or Share With')}</div>

                        <div className='space-x-5 x-center'>
                            <FacebookShareButton url={`${BaseUrlSrc + useAuthStore.getState().refer_code}`} title={t("Gifty Referral Link")}>
                                <div className='shadow-lg h-12 w-12 rounded-full center cp bg-white'><RiFacebookFill /></div>
                            </FacebookShareButton>
                            <InstapaperShareButton url={`${BaseUrlSrc + useAuthStore.getState().refer_code}`} title={t("Gifty Referral Link")}>
                                <div className='shadow-lg h-12 w-12 rounded-full center cp bg-white'><GrInstagram /></div>
                            </InstapaperShareButton>
                            <TwitterShareButton url={`${BaseUrlSrc + useAuthStore.getState().refer_code}`} title={t("Gifty Referral Link")}>
                                <div className='shadow-lg h-12 w-12 rounded-full center cp bg-white'><BsTwitter /></div>
                            </TwitterShareButton>




                        </div>

                    </div>
                </div>

                <img className='fixed bottom-0 right-0 transform w-[16rem] md:w-[45rem]' src="/Images/man-with-mic.svg" alt="" />

            </div>

        </div>
    );
}

export default ReferFriends