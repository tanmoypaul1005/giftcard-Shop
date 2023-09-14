import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { CgClose } from 'react-icons/cg';
import { getDeleteAccountInfo } from '../../app/stores/UserAccountStore';
import Input01 from '../../components/Input/Input01';
import Modal from '../../components/Modal/Modal';
import DeleteAccountCause from './DeleteAccountCause';
import DeleteAccountReason from './DeleteAccountReason';

export default function DeleteAccountModal({ show_modal, setShowModal, onConfirm = () => { }, title = "Delete Account", checked, setChecked, setReason, reason }) {

  const { t } = useTranslation();

  return (
    <Modal
      show_modal={show_modal}
      setShowModal={setShowModal}
      full_content={(
        <div className="inline-block w-full max-w-xl p-4 my-8 text-left align-middle transition-all transform bg-white shadow-xl rounded-lg">
          <div className="relative p-5">
            <CgClose onClick={() => setShowModal(false)} className="absolute top-0 right-0 text-3xl cursor-pointer text-gray-600" />
            <div className="text-center text-xl font-bold py-3 text-gray-700">{title}</div>

            {reason ? <DeleteAccountReason checked={checked} setChecked={setChecked} setReason={setReason} />
              :
              <DeleteAccountCause setReason={setReason} />
            }



          </div>



        </div>
      )}
    />
  )
}