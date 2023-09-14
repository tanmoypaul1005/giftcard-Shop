/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { AiFillCloseCircle } from 'react-icons/ai'

export default function VerificationImageUpload({ label, fileRef, onChange, image, onClear }) {
  const { t } = useTranslation();

  return (
    <div className='w-full flex flex-col justify-start space-y-5 items-center mb-5'>
      <div className="text-cTitleTextColor text-fs20 font-fw600 mb-2">{label}</div>

      <div onClick={() => image ? {} : fileRef.current.click()} className='border border-cBrand border-dashed h-[210px] w-[330px] rounded-br10 flex flex-col justify-center items-center space-x-1 cp relative'>
        {
          image ?
            <>
              <img src={image} alt="img" className='h-full w-full rounded-br10 p-1' />
              <AiFillCloseCircle onClick={onClear} className={'absolute top-0 right-0 h-6 w-6 cp'} />
            </>
            : <>
              <img src={'/Images/svg/image-upload.svg'} alt='img' height={40} width={40} />
              <div className='text-cTitleTextColor text-fs16 font-fw600'>{t('Upload')} {label}</div>
              <div className='text-cSecondaryBodyText text-fs12 font-fw400'>{t('Only jpg, png image')}</div>
            </>
        }
      </div>

      <input onChange={onChange} type="file" accept='image/png, image/jpg, image/jpeg' ref={fileRef} style={{ display: 'none' }} />
    </div>
  )
}

