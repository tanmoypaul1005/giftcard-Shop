/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import Link from "next/link";
import { LOGO } from '../Utilities/Sources';
import { RiFacebookFill } from 'react-icons/ri';
import { GrInstagram } from 'react-icons/gr';
import { BsTwitter } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <div className='bg-white'>
            <div className='custom-container pt-10 pb-5'>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5 mx-3 md:mx-0">

                    <div className='col-span-1'>
                        <div className='relative h-10 w-24'>
                            <Link href={'/'} passHref>
                                <img className='cursor-pointer' src={'/Images/svg/app_logo.svg'} alt="Logo" layout="fill" />
                            </Link>
                        </div>
                        <div className='max-w-xs font-fw400 text-fs16'>
                            {t('Our service allows AI to recognize the user’s text and a special product can actually write and send a letter that is uniquely you to your loved ones.')}
                        </div>

                    </div>

                    <div className="col-span-1 flex flex-row justify-between font-fw400 text-fs16">

                        <div className='flex flex-col  justify-start md:items-center items-start space-y-3 '>
                            <Link href="/create">{t('Create')}</Link>
                            <Link href="/post-cards">{t('Post Cards')}</Link>
                            <Link href="/shops">{t('Shops')}</Link>
                            <Link href="/#contact-us">{t('Contact Us')}</Link>
                        </div>

                        <div className='flex flex-col  justify-start md:items-center items-end space-y-3 '>
                            <Link href={'/privacy-policy'} passHref>
                                <div className='font-fw400 text-fs16 cursor-pointer'>{t('Privacy Policy')}</div>
                            </Link>
                            <Link href={'/terms-and-conditions'} passHref>
                                <div className='font-fw400 text-fs16 mt-5 cursor-pointer'>{t('Terms and Conditions')}</div>
                            </Link>
                            <Link href={'/about-us'} passHref>
                                <div className='font-fw400 text-fs16 mt-5 cursor-pointer'>{t('About Us')}</div>
                            </Link>
                        </div>


                    </div>

                    <div className='col-span-1 flex flex-col items-center md:items-end'>
                        <div className='block mb-3 text-xl font-semibold text-center'>{t('Follow Us')}</div>
                        <div className='flex items-center space-x-4'>
                            <div className='cursor-pointer shadow-lg h-10 w-10 rounded-full center'><RiFacebookFill /></div>
                            <Link passHref href={'https://www.instagram.com/non_logi/?igshid=YmMyMTA2M2Y%3D'}>
                                <a target={'_blank'}>
                                    <div className='cursor-pointer shadow-lg h-10 w-10 rounded-full center'><GrInstagram /></div>
                                </a>
                            </Link>

                            <Link passHref href={'https://twitter.com/non_logi'}>
                                <a target={'_blank'}>
                                    <div className='cursor-pointer shadow-lg h-10 w-10 rounded-full center'><BsTwitter /></div>
                                </a>
                            </Link>
                        </div>
                    </div>

                </div>

                <div className="flex flex-row justify-between font-fw400 text-fs16">
                    {/* <div className='hidden md:block'></div> */}
                    <div className='text-center'>
                        © 2022. {t('All Rights reserved.')}
                    </div>
                    <div className='text-center md:text-right'>
                        {t('Designed & Developed by Genie InfoTech.')}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Footer;