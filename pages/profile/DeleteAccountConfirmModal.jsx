import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { CgClose } from 'react-icons/cg'
import { deleteAccount } from '../../app/stores/UserAccountStore';
import AxiosHeader from '../../app/utils/AxiosHeader';
import Input01 from '../../components/Input/Input01'
import Modal from '../../components/Modal/Modal'

export default function DeleteAccountConfirmModal({ show_modal, setShowModal }) {
  const { t } = useTranslation();
  const [text, setText] = useState('');
  const router = useRouter();

  useEffect(() => setText(''), []);

  const userAccountDelete = async () => {
    const success = deleteAccount();
    
    if (success) {
      localStorage.removeItem('postcard_token');
      AxiosHeader({ token: null });
      router.push('/');
    }
  }


  return (
    <Modal
      show_modal={show_modal}
      setShowModal={setShowModal}
      full_content={(
        <div className="inline-block w-full max-w-xl p-4 my-8 text-left align-middle transition-all transform bg-white shadow-xl rounded-lg">
          <div className="relative p-5">
            <CgClose onClick={() => setShowModal(false)} className="absolute top-0 right-0 text-3xl cursor-pointer text-gray-600" />

            <div className="text-center text-xl font-bold py-3 text-gray-700">{'Confirmation'}</div>
            <div className="text-center text-al text-fs14 font-fw400 py-3 text-cSubTitleColor">
              To confirm delete please type <strong>Delete my account</strong> the sentence in the box bellow
            </div>

            <Input01 value={text} onChange={(e) => setText(e.target.value)} placeholder={t('write here...')} />


          </div>

          <div className="w-full flex justify-center">
            <button onClick={() => text === 'Delete my account' ? userAccountDelete() : {}} type="button" className={`mr-4 inline-flex justify-center px-4 py-2 w-auto text-sm font-medium ${text === 'Delete my account' ? 'bg-cBrand hover:bg-cBrickHover' : 'bg-cPlaceholder'}  text-cWhite border border-transparent rounded-md`}>
              {t('Delete My Account')}
            </button>
          </div>


        </div>
      )}
    />
  )
}
