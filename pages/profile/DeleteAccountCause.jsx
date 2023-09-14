import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { BsCheckCircleFill } from 'react-icons/bs'
import useUserAccountStore, { getDeleteAccountInfo } from '../../app/stores/UserAccountStore';
import DeleteAccountConfirmModal from './DeleteAccountConfirmModal';

export default function DeleteAccountCause({ setReason }) {
  const { t } = useTranslation();
  const { is_show_account_delete_confirm_modal, setIsShowAccountDeleteConfirmModal, delete_account_info } = useUserAccountStore();

  useEffect(() => {
    getDeleteAccountInfo();
  }, []);

  

  return (
    <div>
      <div className='text-cTitleTextColor text-fs16 font-fw600 mb-5'>{t('Deleting profile will be the cause of')}:</div>

      <div className='h-auto max-h-[50vh] overflow-y-auto' dangerouslySetInnerHTML={{ __html: delete_account_info ?? '' }}></div>

      <div className="w-full flex justify-between mt-5">
        <button onClick={() => setReason(true)} type="button" className={`mr-4 inline-flex justify-center px-4 py-2 w-24 text-sm font-medium bg-cWhite hover:bg-cBrickHover hover:text-white border  text-cTitleTextColor  border-cTitleTextColor rounded-md`}>
          {t('Previous')}
        </button>
        <button onClick={() => setIsShowAccountDeleteConfirmModal(true)} type="button" className={`mr-4 inline-flex justify-center px-4 py-2 w-auto text-sm font-medium bg-cBrand hover:bg-cBrickHover text-cWhite border border-transparent rounded-md`}>
          {t('Delete Account')}
        </button>
      </div>

      <DeleteAccountConfirmModal show_modal={is_show_account_delete_confirm_modal} setShowModal={setIsShowAccountDeleteConfirmModal} />
    </div>
  )
}

