import Modal from "./Modal";
import { CgClose } from 'react-icons/cg'
import { useTranslation } from "react-i18next";

const DeleteModal2 = ({ show_modal, setShowModal, onConfirm = () => { }, title = "Delete Item?", subtitle = "Are you sure you want to delete this item?" }) => {
    const { t } = useTranslation();

    return (
        <Modal
            show_modal={show_modal}
            setShowModal={setShowModal}
            full_content={(
                <div className="inline-block w-full max-w-xl p-4 my-8 text-left align-middle transition-all transform bg-white shadow-xl rounded-lg">
                    <div className="relative">
                        <CgClose onClick={() => setShowModal(false)} className="absolute top-0 right-0 text-3xl cursor-pointer text-gray-600" />

                        <div>
                            <div className="text-center text-xl md:text-3xl font-semibold py-2 md:py-5 text-gray-700">{t(title)}</div>
                            <div className="text-center text-sm md:text-xl font-medium py-2 md:py-5 text-gray-700">{t(subtitle)}</div>
                        </div>
                    </div>
                    <div className="mt-2 md:mt-4 w-full flex justify-center">
                        <button onClick={() => setShowModal(false)} type="button" className="mr-4 inline-flex justify-center px-4 py-2 w-1/2 md:w-24 text-sm font-semibold bg-gray-300 hover:bg-gray-400 text-gray-600 border border-transparent rounded-md">
                            {t('No')}
                        </button>
                        <button onClick={() => { onConfirm(); setShowModal(false) }} type="button" className="inline-flex justify-center px-4 py-2 w-1/2 md:w-24 text-sm font-semibold text-white bg-red-600 hover:bg-red-500 border border-transparent rounded-md">
                            {t('Yes')}
                        </button>
                    </div>
                </div>
            )}
        />
    );
}

export default DeleteModal2;