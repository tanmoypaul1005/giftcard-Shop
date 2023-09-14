import React, { useEffect, useState } from 'react'
import FeedbackForm from './FeedbackForm';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import useOrderHistoryStore from '../../../app/stores/OrderHistoryStore';

const DetailsModalMobile = ({ show_modal, setShowModal }) => {

    const [show_feedback_form, setShowFeedbackForm] = useState(false)

    // if(!show_modal) return;
    const {selected_order } = useOrderHistoryStore();

    useEffect(() => {
      console.log('DetailsModal: ', selected_order);
    }, [selected_order])

    return (
        <div className={`absolute ${!show_modal ? 'right-[100rem]' : 'right-0'} top-0 transition-all ease-in pt-16 w-screen h-screen bg-white p-5 md:hidden`}>
            {!show_feedback_form && (
                <div className="pb-10">
                    {/* <div className="text-3xl font-semibold py-3 border-b">Genie Art Details</div> */}
                    <div onClick={() => setShowModal(false)} className="py-4 border-b mb-5 md:hidden flex items-center space-x-3 cp">
                        <IoIosArrowBack className="text-lg text-gray-600" />
                        <div className='text-xl font-bold inline truncate'>Genie Art Details</div>
                    </div>

                    <div className="font-medium text-lg mb-5 mt-7">Delivery Details</div>
                    <div className="border p-3 rounded-md space-y-2">
                        <div>Banu Elson</div>
                        <div>orders@banuelson.com</div>
                        <div>+49 179 111 1010</div>
                        <div>Leibnizstraße 16, Wohnheim 6, No: 8X Clausthal-Zellerfeld, Germany</div>
                    </div>

                    <div className="font-medium text-lg mb-5 mt-7">Delivery Type</div>
                    <div className="border p-3 rounded-md space-y-2">
                        <div>Home Delivery</div>
                        <div>Delivery Date: 12.10.2022</div>
                        <div>Delivery Time: 8:00 AM</div>
                    </div>

                    <div className="font-medium text-lg mb-5 mt-7">Summery</div>
                    <div className="border rounded-lg p-3 text-gray-700">
                        <div className="flex items-center justify-between mb-2">
                            <div>Sub Total</div>
                            <div>$300.00</div>
                        </div>
                        <div className="flex items-center justify-between mb-2">
                            <div>Authority Fee</div>
                            <div>$10.00</div>
                        </div>
                        <div className="flex items-center justify-between mb-2">
                            <div>Shipping</div>
                            <div>Free</div>
                        </div>
                        <div className="flex items-center justify-between pt-2 border-t text-lg font-semibold">
                            <div>Total</div>
                            <div>$310.00</div>
                        </div>
                    </div>

                    <div className="x-center mt-10">
                        <button onClick={() => setShowFeedbackForm(true)} className="mx-auto px-12 py-2 bg-cBrand text-white transition-all ease-in rounded-md text-md md:text-base font-bold shadow">
                            Give Feedback
                        </button>
                    </div>
                </div>
            )}

            {show_feedback_form && (
                <FeedbackForm onSubmit={() => setShowFeedbackForm(false)} />
            )}

        </div>
    );
}

export default DetailsModalMobile;