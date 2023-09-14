import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { getDeleteAccountInfo } from '../../app/stores/UserAccountStore';
import Input01 from '../../components/Input/Input01'

export default function DeleteAccountReason({ setChecked, checked, setReason }) {
  const { t } = useTranslation();

  

  return (
    <>
      <div>
        <p className='text-cSubTitleColor mb-2'>{t('Select a reason from below to continue and let us know your concern.')}</p>

        <div className='flex flex-row justify-start space-x-2 mb-2'>
          <input onChange={() => setChecked([true, false, false, false])} checked={checked[0]} className='accent-cBrand' type="radio" />
          <p className='cp text-cTitleTextColor' onClick={() => setChecked([true, false, false, false])}>{t('Bad experience with delivery')}</p>
        </div>

        <div className='flex flex-row justify-start space-x-2 mb-2'>
          <input onChange={() => setChecked([false, true, false, false])} checked={checked[1]} className='accent-cBrand' type="radio" />
          <p className='cp text-cTitleTextColor' onClick={() => setChecked([false, true, false, false])}>{t('I do not need this app.')}</p>
        </div>

        <div className='flex flex-row justify-start space-x-2 mb-2'>
          <input onChange={() => setChecked([false, false, true, false])} checked={checked[2]} className='accent-cBrand' type="radio" />
          <p className='cp text-cTitleTextColor' onClick={() => setChecked([false, false, true, false])}>{t('Privacy concern.')}</p>
        </div>

        <div className='flex flex-row justify-start space-x-2 mb-2'>
          <input onChange={() => setChecked([false, false, false, true])} checked={checked[3]} className='accent-cBrand' type="radio" />
          <p className='cp text-cTitleTextColor' onClick={() => setChecked([false, false, false, true])}>{t('Others')}</p>
        </div>
        {checked[3] === true && <Input01 no_label={true} textarea={true} />}

        <div className="w-full flex justify-center">
          <button onClick={() => setReason(false)} type="button" className={`mr-4 inline-flex justify-center px-4 py-2 w-24 text-sm font-medium bg-cBrand hover:bg-cBrickHover text-cWhite border border-transparent rounded-md`}>
            {t('Continue')}
          </button>
        </div>

      </div>
    </>
  )
}
