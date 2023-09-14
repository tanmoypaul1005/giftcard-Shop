import { useTranslation } from 'react-i18next';
import { FaUserPlus } from 'react-icons/fa';

const AddButton = ({ setAddContactModal }) => {
    const {t} = useTranslation();
    
    return (
        <button onClick={() => setAddContactModal(true)} className="ml-auto px-0 md:px-5 py-2 md:bg-cBrand text-cBrand md:text-white transition-all ease-in rounded-md text-sm md:text-base font-medium md:shadow flex items-center space-x-2">
            <FaUserPlus className="text-xl md:text-2xl" />
            <div className="font-semibold md:font-base">{t('Add Address')}</div>
        </button>
    );
}

export default AddButton;