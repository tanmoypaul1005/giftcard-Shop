/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import ShapedButton from '../../components/Button/ShapedButton/ShapedButton'
import { BannerImage, BannerPoints, BannerPointsS, MOON, SPIRAL_ARROW, SPIRAL_ARROW_S, WEIRD_BUTTON } from '../../components/Utilities/Sources'

const Banner = () => {
    const {t} = useTranslation();

    return (
        <div className='relative bg-white pt-4 md:pt-0'>

            <img className="absolute bottom-0 right-0 w-screen z-0" src="/Images/banner-bg-s.svg" alt="" />

            <div className='absolute top-[24rem] md:top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 z-0 w-[3rem] h-[3rem] lg:w-[5rem] lg:h-[5rem] xl:w-[7rem] xl:h-[7rem]'>
                <Image className='' src={BannerPointsS} alt="Post Card Printing" layout="fill" objectFit="contain" />
            </div>

            <div className='md:h-[50vh] lg:h-[50vh] xl:h-[60vh] 2xl:h-[70vh] custom-container px-2 sm:px-5 md:px-0 overflow-hidden'>
                <div className="grid grid-cols-12 gap-5 xl:gap-10 h-[50%] md:h-full">
                    <div className='col-span-12 md:col-span-7 grid content-center z-10'>
                        <div>
                            <div className='text-3xl md:text-4xl lg:text-5xl font-bold text-[#211F32] mb-5 leading-[1.5]'>
                                <p className='inline-block'> {t('The largest community of')} </p>
                                <p>{t('design enthusiasts')}</p>
                            </div>
                            <div className='md:max-w-md mb-5 md:mb-10'>{t('Show you care with a personalized gift that’s as unique as you are.')}</div>


                            <div className='relative w-[350px] flex flex-row justify-start my-10'>

                                <Link href={'/create'} passHref>
                                    <div className='absolute -left-[42px] -top-4 w-[200px] h-[90px] cursor-pointer'>
                                        <Image src={WEIRD_BUTTON} alt="Post Card Printing" layout="fill" objectFit="contain" />
                                    </div>
                                </Link>


                                <div className='absolute right-[130px] -top-[45px] w-[100px] h-[90px]'>
                                    <Image src={SPIRAL_ARROW_S} alt="Post Card Printing" layout="fill" objectFit="contain" />
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className='relative col-span-12 md:col-span-5 grid content-center h-[300px] sm:h-[500px] md:h-full mb-16 md:mb-0'>
                        <Image src={BannerImage} alt="Post Card Printing" layout="fill" objectFit="contain" />
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Banner;