import { Slider } from 'antd';
import React from 'react'
import { useTranslation } from 'react-i18next';
import { CgClose } from 'react-icons/cg';
import usePostcardStore from '../../app/stores/PostcardStore';
import Modal from '../Modal/Modal';


export default function PriceFilterModal({ show_modal, setShowModal, onConfirm = () => { }, title = "Select Price Range" }) {

  const { price_range_value, setPriceRangeValue } = usePostcardStore();
  const { t } = useTranslation();

  return (
    <Modal
      show_modal={show_modal}
      setShowModal={setShowModal}
      full_content={(
        <div className="inline-block w-full max-w-xl p-4 my-8 text-left align-middle transition-all transform bg-white shadow-xl rounded-lg">
          <div className="relative">
            <CgClose onClick={() => setShowModal(false)} className="absolute -top-2 -right-2 text-3xl cursor-pointer text-gray-600" />
            <div className="text-center text-xl font-bold py-3 text-gray-700">{t(title)}</div>
          </div>

          <div>
            <Slider
              range={{
                draggableTrack: true,
              }}
              defaultValue={price_range_value}
              tooltip={{ open: true }}
              max={10000}
              className="my-10 "
              trackStyle={[{ backgroundColor: '#FB607F' }]}
              handleStyle={{ borderColor: '#FB607F' }}
              onChange={(value) => {
                setPriceRangeValue(value)
              }}

            />
          </div>

          <div className="mt-4 w-full flex justify-center">
            <button onClick={() => { onConfirm(); setShowModal(false); }} type="button" className={`inline-flex justify-center px-4 py-2 w-24 text-sm font-medium text-white bg-cBrand hover:bg-cRed border border-transparent rounded-md`}>
              {t('Apply')}
            </button>
          </div>
        </div>
      )}
    />
  )
}
