import { useTranslation } from "react-i18next";
import Input01 from "../../../components/Input/Input01";
import Modal from '../../../components/Modal/Modal';



const ReferCodeModal = ({ show_modal, setShowModal, refer_code, setReferCode = () => {}, onConfirm = () => { } }) => {
  const { t } = useTranslation();


  return (
    <Modal
      show_modal={show_modal}
      setShowModal={setShowModal}
      full_content={(
        <div className="inline-block w-full max-w-xl p-4 my-8 text-left align-middle transition-all transform bg-white shadow-xl rounded-lg">
          <div className="relative">
            <div className="text-center text-xl font-bold py-3 text-gray-700">{t('Referral Code')}</div>
            <div className="text-center text-fs14  font-medium pb-3 text-gray-600">{t('Please enter a refer code to get amazing discounts and offers.')}</div>
          </div>
          <div className="mt-4 w-full flex flex-col space-y-4 items-center justify-center">

            <Input01
              name="refer_code"
              value={refer_code}
              type={'text'}
              placeholder={t("Refer Code(optional)")}
              className="w-full"
              onChange={(e) => setReferCode(e.target.value)}
            />

            <button onClick={() => { onConfirm(); setShowModal(false) }} type="button" className={`inline-flex justify-center px-4 py-2 w-24 text-sm font-medium text-white bg-cBrand border border-transparent rounded-md`}>
              {('Submit')}
            </button>
          </div>
        </div>
      )}
    />
  );
}

export default ReferCodeModal;