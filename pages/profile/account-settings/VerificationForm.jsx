import React, { useRef } from 'react'
import { useTranslation } from 'react-i18next';
import { IoIosArrowBack } from 'react-icons/io';
import useUserAccountStore, { submitUserVerificationInfo } from '../../../app/stores/UserAccountStore';
import { getBase64 } from '../../../app/stores/UtilityStore';
import Select from '../../../components/Input/Select';
import VerificationImageUpload from './VerificationImageUpload';

export default function VerificationForm({ setIsFormShow }) {
  const { verification_method, setVerificationMethod, front_image, back_image, setFrontImage, setBackImage } = useUserAccountStore();
  const frontRef = useRef(null);
  const backRef = useRef(null);
  const { t } = useTranslation();

  // mncard,rcard,driving,passport
  const options = [
    { value: 'mncard', label: t('My Number Card') },
    { value: 'rcard', label: t('Residence Card') },
    { value: 'driving', label: t('Driving License') },
    { value: 'passport', label: t('Passport') },
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    submitUserVerificationInfo();
    // setIsFormShow(false);
  }

  const handleImageSelect = (e, type = 'front') => {
    getBase64(e.target.files[0], (result) => {
      if (type === 'front') {
        setFrontImage(result);
      } else {
        setBackImage(result);
      }
    });
  }
  return (


    <form onSubmit={handleFormSubmit}>

      <div className="flex-1">

        <Select
          options={options}
          name={verification_method}
          label={t('Choose Verification Method')}
          onChange={(e) => setVerificationMethod(e.target.value)}
        />

        <VerificationImageUpload label={t('Front Side')} fileRef={frontRef} image={front_image} onChange={(e) => handleImageSelect(e, 'front')} onClear={() => {
          setFrontImage(null);
          frontRef.current.value = null;
        }
        } />

        <VerificationImageUpload label={t('Back Side')} fileRef={backRef} image={back_image} onChange={(e) => handleImageSelect(e, 'back')} onClear={() => {
          setBackImage(null);
          backRef.current.value = null;
        }} />

      </div>

      <div className="x-center">
        <button disabled={(front_image && back_image) ? false : true} type='submit' className={`mx-auto mt-2 px-10 py-2 ${(front_image && back_image) ? 'bg-cBrand text-white' : 'bg-cPlaceholder text-cTitleTextColor'} transition-all ease-in rounded-md text-sm md:text-base font-bold shadow`}>
          {t('Submit')}
        </button>
      </div>
    </form>


  )
}
