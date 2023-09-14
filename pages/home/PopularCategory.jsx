import SwiperPopular from './SwiperPopular'
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import SwiperPopularCategory from './SwiperPopularCategory';
import { useTranslation } from 'react-i18next';

const PopularCategory = () => {
  const shop_tabs = useRef(null);
  const [is_scroll, setIsScroll] = useState(false);
  const [width, setWidth] = useState(window.innerWidth)

  const { t } = useTranslation();

  useLayoutEffect(() => {
    if (shop_tabs.current.clientWidth < shop_tabs?.current?.scrollWidth) {
      // console.log('scroll');
      setIsScroll(true);
    } else {
      // console.log('no scroll');
      setIsScroll(false);
    }
  }, [shop_tabs, width]);

  function scrollRight() {
    shop_tabs.current.scrollLeft += 200;
  }

  function scrollLeft() {
    shop_tabs.current.scrollLeft -= 200;

  }

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);


  return (
    <div className='bg-white md:pt-10'>
      <div className='mx-20 xl:mx-28 pt-10'>

        <div className='text-center mb-5 xl:mb-10'>
          <div className='text-4xl font-bold text-[#211F32] mb-5'>{t('Popular Category')}</div>
        </div>

        {/* Popular Swiper */}
        <div className='relative pb-10 scroll-smooth'>
          {is_scroll && <button onClick={scrollLeft} className='absolute top-1/2 -left-16 transform -translate-y-1/2 h-8 w-8 hover:bg-cBrand focus:bg-cBrand center text-cBrand hover:text-white focus:text-white text-2xl rounded-full border border-cBrand'>
            <BiLeftArrowAlt />
          </button>}

          <SwiperPopularCategory shop_tabs={shop_tabs} />

          {is_scroll && <button onClick={scrollRight} className='next absolute top-1/2 -right-16 transform -translate-y-1/2 h-8 w-8 hover:bg-cBrand focus:bg-cBrand center text-cBrand hover:text-white focus:text-white text-2xl rounded-full border border-cBrand'>
            <BiRightArrowAlt />
          </button>}
        </div>

      </div>
    </div>
  );
}

export default PopularCategory;