import Image from 'next/image'
import { iDefaultShop } from '../Utilities/Sources';

const SelectedCard = ({ src, title = '', price = '', sold_count }) => {


  return (
    <div className="cursor-pointer h-[380px] w-[380px] sm:h-[50vw] md:h-[500px] md:w-[600px] rounded-lg overflow-hidden shadow my-1 px-5 pt-5 bg-cWhite">

      <div className='h-[85%] bg-white'>
        <div className="h-full w-full relative rounded-lg overflow-hidden">
          <Image className="h-auto" src={src ?? iDefaultShop} alt="Post Card Image" layout="fill" objectFit="cover" />
        </div>
      </div>

      <div className="h-full mt-2">
        <div className='text-md sm:text-lg font-semibold mb-0 md:mb-1 lg:mb-2'>{title}</div>
        <div className='flex justify-between items-center'>
          <span className='text-sm sm:text-md font-semibold text-cBrand'>Price: ${price}</span>
          <span className='text-sm sm:text-md font-semibold text-cTitleTextColor'>Sold({sold_count})</span>

        </div>
      </div>

    </div>
  );
}

export default SelectedCard;