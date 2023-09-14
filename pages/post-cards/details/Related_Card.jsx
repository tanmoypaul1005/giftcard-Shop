import Image from 'next/image'
import { AiFillStar } from 'react-icons/ai';
import { DUMMY04 } from '../../../components/Utilities/Sources';
import { useTranslation } from 'react-i18next';

const RelatedCard = ({ src, title = '', price = '', sold_count, onClick }) => {
  const { t } = useTranslation();

  return (
    <div onClick={onClick} className="cursor-pointer h-56 md:h-64 lg:h-80 rounded-lg overflow-hidden shadow cp my-1">

      <div className='h-[70%] sm:h-[75%] md:h-[75%] p-2 sm:p-3 md:p-4 lg:p-5 bg-white'>
        <div className="h-full w-full relative rounded-lg overflow-hidden">
          <Image className="h-auto" src={src ?? DUMMY04} alt="Post Card Image" layout="fill" objectFit="cover" />
        </div>
      </div>

      <div className="h-[30%] bg-white px-2 sm:px-3 md:px-4 lg:px-5 py-4 pt-0">
        <div className='text-md sm:text-lg font-semibold mb-0 md:mb-1 lg:mb-2 inline-block overflow-hidden whitespace-nowrap'>{title}</div>
        <div className='flex justify-between items-center'>
          <span className='text-sm sm:text-md font-semibold text-cBrand'>{t('Price')}: ${price}</span>
          <span className='text-sm sm:text-md font-semibold text-cTitleTextColor'>{t('Sold')}({sold_count})</span>

        </div>
      </div>

    </div>
  );
}

export default RelatedCard;