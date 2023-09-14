import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { FiCheck } from 'react-icons/fi'

const Submitted = () => {
    const router = useRouter();
    const {t} = useTranslation();
    
    return (
        <div className="center h-screen">

            <div>
                <div className='text-center mb-5 mt-10'>
                    <div className='text-2xl md:text-4xl font-bold text-[#211F32] mb-5'>{t('Congratulations')}</div>
                    <div className='max-w-2xl mx-5 md:mx-auto text-sm md:text-base'>{t('Your order has been submitted successfully')}.</div>
                </div>

                <div className='center mt-16 mb-32 md:my-0'>
                    <div className='bg-cBrickHover rounded-full h-40 w-40 center'>
                        <div className='bg-cBrand rounded-full h-32 w-32 center'>
                            <FiCheck className='text-7xl text-white' />
                        </div>
                    </div>
                </div>

                <div className="x-center mt-10">
                    <button onClick={() => router.push('/')} className="mx-auto px-12 py-2 bg-cBrand text-white transition-all ease-in rounded-md text-sm md:text-base font-semibold shadow cursor-pointer">
                        {t('Go To Home')}
                    </button>
                </div>

            </div>

        </div>
    );
}

export default Submitted;