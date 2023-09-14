/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import OrderSummery from "./Checkout/OrderSummery";
import SelectAddress from "./Checkout/SelectAddress";
// import SelectAddressModal from "./Checkout/SelectAddressModal";
import { useRouter } from "next/router";
import useCreateRequestStore, { getStripeClientSecret } from "../../app/stores/CreateCardStore";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from './CheckoutForm';
import { stripe_public_key } from "../../app/utils/const";
import { useTranslation } from "react-i18next";


const stripePromise = loadStripe(stripe_public_key);

const Checkout = ({ changeState }) => {

    const [show_modal, setShowModal] = useState(false);
    const router = useRouter();
    const { setAddressSource, create_card_form, is_ship_same_as_bill, setIsShipSameAsBill, setCreateCardForm, clientSecret, is_pay_disabled, setIsPayDisabled, selected_card } = useCreateRequestStore();
    const appearance = { theme: 'stripe' };
    const options = { clientSecret, appearance };

    useEffect(() => {
        checkIfUserCanPay();
        checkIfBillingIsSameAsShipping();
    }, []);

    useEffect(() => {
        checkIfUserCanPay();
        checkIfBillingIsSameAsShipping();
    }, [create_card_form]);

    const handleChange = () => {
        if (is_ship_same_as_bill) {
            setCreateCardForm({
                ...create_card_form,
                bill_name: "",
                bill_phone: "",
                bill_postcode: "",
                bill_city: "",
                bill_address: "",
                bill_address_type: "",
            });
        } else {
            if (create_card_form?.ship_name && create_card_form?.ship_name.length > 0)
                setCreateCardForm({
                    ...create_card_form,
                    bill_name: create_card_form.ship_name,
                    bill_phone: create_card_form.ship_phone,
                    bill_postcode: create_card_form.ship_postcode,
                    bill_city: create_card_form.ship_city,
                    bill_address: create_card_form.ship_address,
                    bill_address_type: create_card_form.ship_address_type,
                });
        }
        setIsShipSameAsBill(!is_ship_same_as_bill);
    }

    const handlePayNow = async () => {
        await localStorage.setItem('create_card_form', JSON.stringify(create_card_form));
        console.log('create_card_form: ', create_card_form);
        getStripeClientSecret(calculatePrice().total, null, true);
    }

    const checkIfUserCanPay = () => {
        if (create_card_form.ship_name && create_card_form.ship_phone && create_card_form.ship_postcode && create_card_form.ship_city && create_card_form.ship_address && create_card_form.ship_address_type && create_card_form.bill_name && create_card_form.bill_phone && create_card_form.bill_postcode && create_card_form.bill_city && create_card_form.bill_address && create_card_form.bill_address_type) {
            setIsPayDisabled(false);
        }
        else {
            setIsPayDisabled(true);
        }
    }

    const checkIfBillingIsSameAsShipping = () => {
        if (create_card_form.ship_name === create_card_form.bill_name && create_card_form.ship_phone === create_card_form.bill_phone && create_card_form.ship_postcode === create_card_form.bill_postcode && create_card_form.ship_city === create_card_form.bill_city && create_card_form.ship_address === create_card_form.bill_address && create_card_form.ship_address_type === create_card_form.bill_address_type && create_card_form.ship_name.length > 0 && create_card_form.bill_name.length > 0) {
            setIsShipSameAsBill(true);
        }
        else {
            setIsShipSameAsBill(false);
        }
    }

    const calculatePrice = () => {
        let subTotal = 0;
        let total = 0;
        subTotal += ((selected_card?.price ?? 0) * (create_card_form?.quantity ?? 1));
        total += subTotal;
        total += ((create_card_form?.authority_fee ?? 0) + (create_card_form?.shipping_fee ?? 0));
        total -= create_card_form?.discount;
        return { sub_total: subTotal, total: total };
    }

    const { t } = useTranslation();


    return (
        <div className="bg-white md:bg-transparent">
            <div className='text-center mb-5 mt-10'>
                <div className='text-3xl md:text-4xl font-bold text-[#211F32] mb-5'>{t('Checkout')}</div>
            </div>

            <div className="grid grid-cols-12 gap-0 md:gap-12 2xl:gap-12 custom-container">
                <div className="col-span-12 lg:col-span-7">
                    <div className="bg-white py-2 md:py-4 px-4 md:px-10 md:shadow md:rounded-md">
                        <div className=" md:block space-y-5">

                            <SelectAddress type="shipping" onClick={() => {
                                if (clientSecret && create_card_form?.ship_name.length > 0) return;
                                setAddressSource({ is_from_create: true, type: 'shipping' });
                                router.push('/profile/address-book');
                            }} address={create_card_form.ship_name ? {
                                name: create_card_form.ship_name,
                                phone: create_card_form.ship_phone,
                                postcode: create_card_form.ship_postcode,
                                city: create_card_form.ship_city,
                                address: create_card_form.ship_address,
                                address_type: create_card_form.ship_address_type,
                            } : null} />

                            {(create_card_form?.ship_name?.length > 0) && <div className="flex flex-row justify-start space-x-2">
                                <input onChange={() => { (!clientSecret) && handleChange() }} checked={is_ship_same_as_bill} className="accent-cBrand" type="checkbox" value={is_ship_same_as_bill} />
                                <div className="cursor-pointer" onClick={() => { (!clientSecret) && handleChange() }}>{t('Billing Address Same as Shipping Address')}</div>
                            </div>}

                            {(create_card_form?.ship_name?.length > 0) && !is_ship_same_as_bill &&
                                <SelectAddress type="billing" onClick={() => {
                                    if (clientSecret && create_card_form?.ship_name.length > 0) return;
                                    setAddressSource({ is_from_create: true, type: 'billing' });
                                    router.push('/profile/address-book');
                                }} address={create_card_form.bill_name ? {
                                    name: create_card_form.bill_name,
                                    phone: create_card_form.bill_phone,
                                    postcode: create_card_form.bill_postcode,
                                    city: create_card_form.bill_city,
                                    address: create_card_form.bill_address,
                                    address_type: create_card_form.bill_address_type,
                                } : null} />}

                        </div>



                        {/* <PaymentMethod /> */}
                        <div className="w-full flex flex-row justify-between mt-5">

                            {!clientSecret && <button onClick={() => useCreateRequestStore.getState().setCurrState('choose_frame')} className={`mx-auto mb-5 px-20 py-2 bg-white hover:bg-gray-600 text-gray-600 hover:text-white transition-all ease-in rounded-md font-bold shadow`}>
                                {t('Back')}
                            </button>}

                            {!clientSecret && <button onClick={() => handlePayNow()} disabled={is_pay_disabled} className={`mx-auto mb-5 px-20 md:px-12 py-2 ${is_pay_disabled ? 'bg-cPlaceholder cursor-not-allowed' : 'bg-cBrand'} text-white transition-all ease-in rounded-md font-bold shadow`}>
                                {t('Pay Now')}
                            </button>}



                            {clientSecret && create_card_form?.ship_name.length > 0 && create_card_form?.bill_name.length > 0 && (
                                <Elements options={options} stripe={stripePromise}>
                                    <CheckoutForm />
                                </Elements>
                            )}
                        </div>

                    </div>
                </div>

                <div className="col-span-12 lg:col-span-5">
                    <div className="bg-white py-2 md:py-4 px-4 md:px-10 md:shadow md:rounded-md">
                        <OrderSummery changeState={changeState} />
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Checkout;