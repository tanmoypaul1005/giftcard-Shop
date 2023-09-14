import { useTranslation } from "react-i18next";
import Modal from "./Modal";

const DeleteModal = ({show_modal, setShowModal, onConfirm = () => {}, title="Are you sure you want to delete this item?"}) => {
    const { t } = useTranslation();
    return (
        <Modal
            show_modal={show_modal} 
            setShowModal={setShowModal}
            full_content={(
                <div className="inline-block w-full max-w-xl p-4 my-8 text-left align-middle transition-all transform bg-white shadow-xl rounded-lg">
                    <div className="relative">
                        <div className="text-center text-xl font-bold py-3 text-gray-700">{title}</div>
                    </div>
                    <div className="mt-4 w-full flex justify-end">
                        <button onClick={() => setShowModal(false)} type="button" className={`mr-4 inline-flex justify-center px-4 py-2 w-24 text-sm font-medium bg-gray-200 hover:bg-gray-300 text-gray-600 border border-transparent rounded-md`}>
                            {t('Cancel')}
                        </button>
                        <button onClick={() => {onConfirm(); setShowModal(false)}} type="button" className={`inline-flex justify-center px-4 py-2 w-24 text-sm font-medium text-white bg-red-600 hover:bg-red-500 border border-transparent rounded-md`}>
                            {t('Delete')}
                        </button>
                    </div>
                </div>
            )}
        />
    );
}

export default DeleteModal;