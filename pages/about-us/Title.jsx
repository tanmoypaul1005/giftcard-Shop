import Image from 'next/image'
import { useTranslation } from 'react-i18next';

const Title = () => {
  const {t} = useTranslation()
  return (
    <div className='text-center mb-10 mx-3 md:mx-0'>
      <div className='text-2xl md:text-4xl font-bold text-[#211F32] mb-3 md:mb-5'>{t('About Us')}</div>
    </div>
  );
}

export default Title;