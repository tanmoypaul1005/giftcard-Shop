import React from 'react'
import { useTranslation } from 'react-i18next';
import { CgClose } from 'react-icons/cg'
import { IoIosArrowBack } from 'react-icons/io'
import ModalMobileFull from "../../../components/Modal/ModalMobileFull";

export default function SelectAddressModal({ show_modal, setShowModal }) {

  const { t } = useTranslation();

  return (
    <>

      <ModalMobileFull
        show_modal={show_modal}
        setShowModal={setShowModal}
        full_content={(
          <div className="h-screen md:h-auto inline-block w-full max-w-5xl md:px-14 py-0 md:py-10 md:my-8 text-left align-middle transition-all delay-150 transform bg-white shadow-xl md:rounded-lg">
            <div className="relative">
              <CgClose onClick={() => setShowModal(false)} className="absolute -top-6 -right-10 text-3xl cursor-pointer text-gray-600 hidden md:block" />

              <div>
                <div className="text-center text-3xl font-semibold mb-10 hidden md:block">{t('Select Address')}</div>

                <div onClick={() => setShowModal(false)} className="px-5 py-4 border-b mb-5 md:hidden flex items-center space-x-3 cp">
                  <IoIosArrowBack className="text-lg text-gray-600" />
                  <div className='text-xl font-bold inline truncate'>{t('Add Address')}</div>
                </div>



              </div>
            </div>
          </div>
        )}
      />

    </>
  )
}
