import React from "react";
import {
  PaymentElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
import { useRouter } from "next/router";
import useCreateRequestStore from "../../app/stores/CreateCardStore";
import { useTranslation } from "react-i18next";
import { BsInfoCircleFill } from "react-icons/bs";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const router = useRouter();
  const current_route = router.pathname;

  React.useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          console.log('paymentIntent: ', paymentIntent);
          // localStorage.setItem('paymentIntent', JSON.stringify(paymentIntent));
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const origin =
    typeof window !== 'undefined' && window.location.origin
      ? window.location.origin
      : '';

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: current_route == '/profile/order-history' ? (origin + '/create/DuePaymentConfirmation') : (origin + '/create/PaymentConfirmation'),
      },
    });
    console.log('payment result', result);
    const { error } = result;

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error?.type === "card_error" || error?.type === "validation_error") {
      setMessage(error.message);
    } else {
      console.log('error', error);
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: "tabs",
  };

  const { t } = useTranslation();

  return (
    <form className="w-full" id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement id="payment-element" options={paymentElementOptions} />

      <div className="flex flex-row justify-start space-x-2 mb-5 items-center">
      <BsInfoCircleFill/>
        <div className="text-cBrand text-fs14">No card info will be saved</div> 
      </div>

      <div className={`flex flex-row ${current_route == '/profile/order-history' ? 'justify-center' : 'justify-between'} space-x-0`}>

        {current_route != '/profile/order-history' && <button onClick={() => useCreateRequestStore.getState().setCurrState('choose_frame')} className=" px-12 py-2 bg-white hover:bg-gray-600 text-gray-600 hover:text-white transition-all ease-in rounded-md text-sm md:text-base font-bold shadow">
          {t('Back')}
        </button>}

        <button className="bg-cBrand  text-cWhite  rounded-br5 border-0 px-3 py-2 cursor-pointer font-fw600 block w-auto hover:contrast-125 disabled:opacity-50 disabled:cursor-default shadow-md" disabled={isLoading || !stripe || !elements} id="submit">
          <span id="button-text">
            {isLoading ? <div className="spinner" id="spinner"></div> : t("Confirm Payment")}
          </span>
        </button>

      </div>

      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
}