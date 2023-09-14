/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react'
import Head from 'next/head';
// import Navbar from "../../components/Layout/Navbar";
import ChooseFrame from './ChooseFrame';
import UploadImage from "./UploadImage";
import Wizard from "./Wizard/Wizard";
import WriteMessage from "./WriteMessage";
import Checkout from './Checkout';
import Submitted from './Submitted';
import { app_name } from '../../app/utils/const';
import useCreateRequestStore from '../../app/stores/CreateCardStore';
import { getPostcardData } from '../../app/stores/PostcardStore';
import useAuthStore from '../../app/authStore';
import Login from '../auth/login';
import { useRouter } from 'next/router';
import { Toastr } from '../../app/utils/UtilityFunctions';
import useUserAccountStore from '../../app/stores/UserAccountStore';
import { useTranslation } from 'react-i18next';
import CreateCardInfoModal from '../../components/Modal/CreateCardInfoModal';

const Create = () => {

    const { curr_state, setCurrState } = useCreateRequestStore();
    const { verification_status, setIsUserIdentity } = useUserAccountStore();
    const { isLoggedIn } = useAuthStore();
    const router = useRouter();
    const { t } = useTranslation();

    const changeState = (action) => {
        if (action === 'next') {
            switch (curr_state) {
                case 'upload_image':
                    setCurrState('write_message')
                    break;
                case 'write_message':
                    setCurrState('choose_frame')
                    break;
                case 'choose_frame':
                    setCurrState('checkout')
                    break;
                case 'checkout':
                    setCurrState('submitted')
                    break;
                default:
                    break;
            }
        }
    }

    useEffect(() => {
        if (!isLoggedIn) {
            router.push('/auth/login');
            Toastr({ message: t('Please login to continue'), type: 'info' });
        }

        // if (isLoggedIn && verification_status !== 'verified') {
        //     router.push('/profile/account-settings');
        //     setIsUserIdentity(true);
        //     Toastr({ message: t('Please verify your identity to continue'), type: 'info' });
        // }
    }, []);



    return (
        <div className={`relative h-full min-h-screen bg-blueGray-50 ${curr_state === 'checkout' && 'bg-white md:bg-blueGray-50'}`}>

            <Head>
                <title> {app_name} | Create</title>
                <meta name="description" content="Post Card Printing" />
                <link rel="icon" href="/favicon.ico" />
            </Head>


            {/* {['upload_image', 'write_message', 'checkout'].includes(curr_state) && (
                <img className='fixed z-10 bottom-[-35%] left-[-50%] sm:bottom-[-583px] sm:left-[-250px] rotate-[13deg] sm:rotate-0 transform -translate-y-1/2 w-[38rem] sm:w-[45rem] opacity-50' src="/Images/Ornaments/Vector 6.svg" alt="" />
            )} */}
            {['upload_image', 'write_message', 'checkout'].includes(curr_state) && (
                <img className='fixed top-[5rem] left-2 md:top-32 md:left-2 transform -translate-y-1/2 w-10 md:w-24 opacity-30' src="/Images/Ornaments/Dots.png" alt="" />
            )}
            {['upload_image', 'write_message', 'checkout'].includes(curr_state) && (
                <img className='fixed top-1/2 -right-12 transform -translate-y-1/2 w-20 md:w-24 opacity-80' src="/Images/Ornaments/Vector O2.png" alt="" />
            )}
            {['upload_image', 'write_message', 'checkout'].includes(curr_state) && (
                <img className='fixed -bottom-20 -right-10 transform -translate-y-1/2 w-20 md:w-24 opacity-80' src="/Images/Ornaments/Vector O.png" alt="" />
            )}


            {/* Lines Form Submitted State ========================================================================================================================================================================= */}
            {['submitted'].includes(curr_state) && (
                <span className='hidden md:inline-block fixed left-[80%] top-[80%] transform -translate-x-1/2 -translate-y-1/2 h-0.5 w-[20rem] rotate-[-45deg] bg-cBrand opacity-60 rounded-full'></span>
            )}
            {['submitted'].includes(curr_state) && (
                <span className='hidden md:inline-block fixed left-[83%] top-[83%] transform -translate-x-1/2 -translate-y-1/2 h-0.5 w-[5rem] rotate-[-45deg] bg-cBrand opacity-60 rounded-full'></span>
            )}
            {['submitted'].includes(curr_state) && (
                <span className='hidden md:inline-block fixed left-[10%] top-[94%] transform -translate-x-1/2 -translate-y-1/2 h-0.5 w-[20rem] rotate-[-45deg] bg-cBrand opacity-60 rounded-full'></span>
            )}
            {['submitted'].includes(curr_state) && (
                <span className='hidden md:inline-block fixed left-[31%] top-[21%] transform -translate-x-1/2 -translate-y-1/2 h-0.5 w-[5rem] rotate-[-45deg] bg-cBrand opacity-60 rounded-full'></span>
            )}
            {['submitted'].includes(curr_state) && (
                <span className='hidden md:inline-block fixed left-[53%] top-[12%] transform -translate-x-1/2 -translate-y-1/2 h-0.5 w-[9rem] rotate-[-45deg] bg-cBrand opacity-60 rounded-full'></span>
            )}


            {['submitted'].includes(curr_state) && (
                <span className='md:hidden fixed left-[-10%] top-[80%] transform -translate-x-1/2 -translate-y-1/2 h-0.5 w-[20rem] rotate-[-45deg] bg-cBrand rounded-full'></span>
            )}
            {['submitted'].includes(curr_state) && (
                <span className='md:hidden fixed left-[8%] top-[53%] transform -translate-x-1/2 -translate-y-1/2 h-0.5 w-[2rem] rotate-[-45deg] bg-cBrand rounded-full'></span>
            )}
            {['submitted'].includes(curr_state) && (
                <span className='md:hidden fixed left-[111%] top-[5%] transform -translate-x-1/2 -translate-y-1/2 h-0.5 w-[20rem] rotate-[-45deg] bg-cBrand rounded-full'></span>
            )}
            {['submitted'].includes(curr_state) && (
                <span className='md:hidden fixed left-[82%] top-[69%] transform -translate-x-1/2 -translate-y-1/2 h-0.5 w-[7rem] rotate-[-45deg] bg-cBrand rounded-full'></span>
            )}
            {['submitted'].includes(curr_state) && (
                <span className='md:hidden fixed left-[86%] top-[70%] transform -translate-x-1/2 -translate-y-1/2 h-0.5 w-[2rem] rotate-[-45deg] bg-cBrand rounded-full'></span>
            )}

            {['submitted'].includes(curr_state) && (
                <img className='fixed top-[16%] left-[0%] md:top-[25%] md:left-[0%] transform -translate-y-1/2 w-10 md:w-20 opacity-80' src="/Images/Ornaments/Dots.png" alt="" />
            )}
            {['submitted'].includes(curr_state) && (
                <img className='fixed top-[16%] left-[0%] md:top-[70%] md:left-[97%] transform -translate-y-1/2 w-10 md:w-20 opacity-80' src="/Images/Ornaments/Dots.png" alt="" />
            )}
            {/* ================================================================================================================================================================================================= */}

            <div className={`mx-auto z-10 relative ${curr_state !== 'submitted' && 'pt-24 pb-0 md:pb-10'}`}>

                {curr_state !== 'submitted' && <Wizard curr_state={curr_state} />}

                {curr_state === 'upload_image' && <UploadImage changeState={changeState} />}
                {curr_state === 'write_message' && <WriteMessage changeState={changeState} />}
                {curr_state === 'choose_frame' && <ChooseFrame changeState={changeState} />}
                {curr_state === 'checkout' && <Checkout changeState={changeState} />}

                {curr_state === 'submitted' && <Submitted changeState={changeState} />}
            </div>

            <CreateCardInfoModal/>

        </div>
    );
}

export default Create;