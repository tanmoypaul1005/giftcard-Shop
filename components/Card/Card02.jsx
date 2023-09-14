import Image from 'next/image'
import { useTranslation } from 'react-i18next';

const Card02 = ({ src, src2, title = '', text = '', stars = 5, total_cards = 0, onClick }) => {
    const { t } = useTranslation();

    return (
        <div onClick={onClick} className="h-80 rounded-lg overflow-hidden shadow cp my-1 w-[400px]">
            <div className="h-[70%] relative overflow-hidden">
                <Image className="h-auto" src={src} alt="Post Card Image" layout="fill" objectFit="cover" />
            </div>
            <div className="h-full bg-white px-5 pt-4">
                <div className='text-lg font-semibold inline'>{title}</div>
                <div className='flex justify-between items-center'>
                    <div>
                        <span className='font-semibold text-gray-600 truncate'>({t('Total')} {total_cards} {t('Cards')})</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card02;