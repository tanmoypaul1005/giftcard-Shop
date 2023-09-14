/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import Modal from "../../../components/Modal/Modal";
import { CgClose } from 'react-icons/cg'
import useOrderHistoryStore, { setOrdersFoo, setOrderStatus } from "../../../app/stores/OrderHistoryStore";
import { useEffect } from "react";
import { BaseUrlSrc } from "../../../app/utils/Url";
import { formatDate } from "../../../app/stores/UtilityStore";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../../create/CheckoutForm";
import useCreateRequestStore, { confirmOrder, getStripeClientSecret } from "../../../app/stores/CreateCardStore";
import { loadStripe } from "@stripe/stripe-js";
import { stripe_public_key } from "../../../app/utils/const";
import { useTranslation } from "react-i18next";
import FeedbackForm from "./FeedbackForm";

const stripePromise = loadStripe(stripe_public_key);

const DetailsModal = ({ show_modal, setShowModal }) => {

    const { selected_order } = useOrderHistoryStore();
    const { setClientSecret } = useCreateRequestStore();
    const { t } = useTranslation();

    useEffect(() => {
        // console.log('DetailsModal: ', selected_order);
        setClientSecret(null);
    }, [selected_order]);

    useEffect(() => { setClientSecret(null); }, []);

    const { clientSecret } = useCreateRequestStore();
    const appearance = { theme: 'stripe' };
    const options = { clientSecret, appearance };



    return (
        <Modal
            show_modal={show_modal}
            setShowModal={setShowModal}
            full_content={(
                <div className="inline-block w-full max-w-5xl px-6 md:px-14 py-8 md:py-10 my-8 text-left align-middle transition-all delay-150 transform bg-white shadow-xl rounded-lg">
                    <div className="relative">
                        <CgClose onClick={() => setShowModal(false)} className="absolute -top-3 -right-3 md:-top-6 md:-right-10 text-3xl cursor-pointer text-gray-600" />

                        <div>
                            <div className="text-center text-2xl font-semibold mb-10">{t('Order Details')}</div>

                            <div className="flex flex-col space-y-5">

                                <div className="flex flex-col justify-start border rounded-lg p-5 text-gray-700">
                                    <div className="flex flex-row justify-between w-full mb-3">

                                        <div className="">
                                            <div className="flex flex-row justify-start h-[80px] space-x-2">
                                                <img className="w-[120px] h-[80px] rounded-lg" src={BaseUrlSrc + selected_order?.card_image} alt="Post Card Image" layout="fill" objectFit="cover" />

                                                <div className="flex flex-col justify-between">
                                                    <div>{selected_order?.card_name}</div>
                                                    <div>{selected_order?.code}</div>
                                                    <div>x{selected_order?.quantity}</div>
                                                </div>
                                            </div>


                                        </div>

                                        <div className="flex flex-col justify-between items-end">
                                            <div>¥{selected_order?.order_total}</div>
                                            <div className="capitalize">{setOrderStatus(selected_order?.status)}</div>
                                        </div>




                                    </div>

                                    <div>
                                        <hr />
                                        <div className="mt-3 flex flex-row justify-between">
                                            <p>{t('Order Date')}:</p>
                                            <p> {formatDate(selected_order?.order_date)} </p>
                                        </div>
                                        {/* <div className="mt-3 flex flex-row justify-between">
                                            <p>{t('Delivery Date')}:</p>
                                            <p> {formatDate(selected_order?.delivery_date) ?? '-'} </p>
                                        </div> */}
                                    </div>
                                </div>


                                <div className="flex md:flex-row md:justify-between md:space-x-5 flex-col justify-start  md:space-y-0 space-y-5">

                                    <div className="border rounded-lg p-5 text-gray-700 w-full">
                                        <div className="pb-2 border-b text-xl font-semibold mb-3">{t('Billing Address')}</div>
                                        <div className="flex items-start justify-between mb-2 space-x-2">
                                            <div>{t('Address Name')}</div>
                                            <div className="text-right"> {selected_order?.bill_name} </div>
                                        </div>

                                        <div className="flex items-start justify-between mb-2 space-x-2">
                                            <div>{t('Mobile')}</div>
                                            <div className="text-right"> {selected_order?.bill_phone} </div>
                                        </div>
                                        <div className="flex items-start justify-between mb-2 space-x-2">
                                            <div>{t('City')}</div>
                                            <div className="text-right">{selected_order?.bill_address + ', ' + selected_order?.bill_postcode + ', ' + selected_order?.bill_city}</div>
                                        </div>

                                    </div>

                                    <div className="border rounded-lg p-5 text-gray-700 w-full">
                                        <div className="pb-2 border-b text-xl font-semibold mb-3">{t('Shipping Address')}</div>
                                        <div className="flex items-start  justify-between mb-2 space-x-2">
                                            <div>{t('Address Name')}</div>
                                            <div className="text-right"> {selected_order?.ship_name} </div>
                                        </div>

                                        <div className="flex items-start justify-between mb-2 space-x-2">
                                            <div>{t('Mobile')}</div>
                                            <div className="text-right"> {selected_order?.ship_phone} </div>
                                        </div>
                                        <div className="flex items-start justify-between mb-2 space-x-2">
                                            <div>{t('City')}</div>
                                            <div className="text-right">{selected_order?.ship_address + ', ' + selected_order?.ship_postcode + ', ' + selected_order?.ship_city}</div>
                                        </div>

                                    </div>
                                </div>

                                <div>
                                    <div className="border rounded-lg p-5 text-gray-700">
                                        <div className="pb-2 border-b text-xl font-semibold mb-3">{t('Summary')}</div>
                                        <div className="flex items-center justify-between mb-2">
                                            <div>{t('Sub Total')}</div>
                                            <div>¥{selected_order?.order_total - (selected_order?.authority_fee + selected_order?.shipping_fee)}</div>
                                        </div>
                                        <div className="flex items-center justify-between mb-2">
                                            <div>{t('Authority Fee')}</div>
                                            <div>¥{selected_order?.authority_fee}</div>
                                        </div>
                                        <div className="flex items-center justify-between mb-2">
                                            <div>{t('Shipping Fee')}</div>
                                            <div>¥{selected_order?.shipping_fee}</div>
                                        </div>
                                        <div className="flex items-center justify-between mb-2">
                                            <div>{t('Applied Voucher')}</div>
                                            <div>¥{selected_order?.discount}</div>
                                        </div>
                                        <div className="flex items-center justify-between mb-2">
                                            <div>{t('Type')}</div>
                                            <div>{selected_order?.payment_method == 'cod' ? 'COD' : 'Card'}</div>
                                        </div>
                                        <div className="flex items-center justify-between pt-2 border-t text-xl font-bold">
                                            <div>{t('Total')}</div>
                                            <div>¥{selected_order?.order_total}</div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {
                                selected_order?.status === 'payment_due' && !clientSecret &&
                                <div className='x-center mt-5'>
                                    <button onClick={async () => {
                                        localStorage.setItem('order_id', selected_order?.order_payment?.order_id);
                                        localStorage.setItem('payment_id', selected_order?.order_payment?.payment_id);
                                        const is_success = await confirmOrder(selected_order?.order_payment?.order_id, selected_order?.order_payment?.payment_id);
                                        if (!is_success) {
                                            getStripeClientSecret(selected_order?.order_total, selected_order?.order_payment?.payment_id, false);
                                        }
                                        if (is_success) {
                                            setShowModal(false);
                                            setOrdersFoo();
                                        }
                                    }} className="mx-auto px-12 py-2 bg-cBrand text-white transition-all ease-in rounded-md text-md font-bold shadow">
                                        {t('Checkout')}
                                    </button>
                                </div>
                            }

                            {clientSecret && (
                                <div className="my-5">
                                    <Elements options={options} stripe={stripePromise}>
                                        <CheckoutForm />
                                    </Elements>
                                </div>
                            )}

                            {(!selected_order?.review && selected_order?.status === 'completed') && <FeedbackForm data={selected_order} setShowModal={setShowModal} />}

                        </div>
                    </div>
                </div>
            )}
        />
    );
}

export default DetailsModal;