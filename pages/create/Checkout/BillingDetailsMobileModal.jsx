import ModalMobileFull from "../../../components/Modal/ModalMobileFull";
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import BillingDetails from "./BillingDetails";
import ShippingDetails from "./ShippingDetails";

const BillingDetailsMobileModal = ({ show_modal, setShowModal }) => {

    return (
        <ModalMobileFull
            show_modal={show_modal}
            setShowModal={setShowModal}
            full_content={(
                <div className="h-full min-h-screen md:h-auto inline-block w-full max-w-5xl md:px-14 py-0 md:py-10 md:my-8 text-left align-middle transition-all delay-150 transform bg-white shadow-xl md:rounded-lg">
                    <div className="relative">
                        <div onClick={() => setShowModal(false)} className="py-4 border-b mb-5 md:hidden flex items-center space-x-3 cp px-5">
                            <IoIosArrowBack className="text-lg text-gray-600" />
                            <div className='text-xl font-bold inline truncate'>Checkout</div>
                        </div>
                        <div className="px-5">
                            <BillingDetails />
                            <ShippingDetails />

                            <div className="x-center mt-10 mb-5 md:mb-0">
                                <button onClick={() => setShowModal(false)} className="mx-auto px-24 md:px-12 py-3 md:py-2 bg-cBrand text-white transition-all ease-in rounded-md font-bold shadow">
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        />
    );
}

export default BillingDetailsMobileModal;