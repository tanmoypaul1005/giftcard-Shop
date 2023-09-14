/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import { useTranslation } from 'react-i18next';
import useCreateRequestStore from '../../../app/stores/CreateCardStore';
import { BaseUrlSrc } from '../../../app/utils/Url';
import { DUMMY05, iDefaultShop } from '../../../components/Utilities/Sources';

const GiftIsReady = ({ changeState }) => {
    const { selected_card, setCurrState } = useCreateRequestStore();
    const { t } = useTranslation();

    return (
        <div className='max-w-2xl mx-auto'>
            <div className='text-center mb-5 mt-10'>
                <div className='text-2xl md:text-4xl font-bold text-[#211F32] mb-5'>{t('Selected Card')}</div>

            </div>

            <div className="relative bg-white rounded-lg mb-10 mx-7 md:mx-0 shadow p-5">

                <div className='relative h-[16rem] md:h-[24rem] w-full mb-2'>
                    <div className="h-full w-full relative rounded-lg overflow-hidden">
                        <Image className="h-auto" src={selected_card?.image ? (BaseUrlSrc + selected_card?.image) : iDefaultShop} alt="Post Card Image" layout="fill" objectFit="cover" />
                    </div>
                </div>


                <div className='bg-white'>
                    <div className='text-md sm:text-lg font-semibold mb-0 md:mb-1'>{selected_card?.name}</div>
                    <div className='text-sm sm:text-md font-semibold text-cBrand'>{t('Price')} ${selected_card?.price}</div>
                </div>
            </div>

            <div className="x-center mt-10">
                <button onClick={() => setCurrState('write_message')} className="mx-auto px-12 py-2 bg-white hover:bg-gray-600 text-gray-600 hover:text-white transition-all ease-in rounded-md text-sm md:text-base font-bold shadow">
                    {t('Back')}
                </button>

                <button onClick={() => changeState('next')} className="mx-auto px-12 py-2 bg-cBrand text-white transition-all ease-in rounded-md text-sm md:text-base font-bold shadow">
                    {t('Checkout')}
                </button>
            </div>
        </div>
    );
}

export default GiftIsReady;