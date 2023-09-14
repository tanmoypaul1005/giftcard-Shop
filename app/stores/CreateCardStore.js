import axios from 'axios';
import create from 'zustand';
import { kuAddCustomerOrder, kuConfirmCustomerOrder, kuGetVoucherInfo, kuSetupStripPaymentIntent } from '../utils/Url';
import { Toastr } from '../utils/UtilityFunctions';
import useGeneralStore from './GeneralController';
import useUtilityStore from './UtilityStore';
import i18next, { t } from 'i18next';

const { setLoading } = useUtilityStore.getState();

const useCreateRequestStore = create((set, get) => ({
  curr_state: 'upload_image',
  setCurrState: (state) => set({ curr_state: state }),
  create_card_form: {
    text: "",
    text_image: null,
    message: '',
    quantity: 1,

    authority_fee: 0,
    shipping_fee: 0,
    discount: 0,

    bill_name: "",
    bill_phone: "",
    bill_postcode: "",
    bill_city: "",
    bill_address: "",
    bill_address_type: "",


    ship_name: "",
    ship_phone: "",
    ship_postcode: "",
    ship_city: "",
    ship_address: "",
    ship_address_type: "",

    payment_method: "card",
    payment_id: null,

    discount_code: "",
  },
  setCreateCardForm: (form) => set({ create_card_form: form }),
  resetCreateCardForm: () => set({
    create_card_form: {
      card_id: null,

      text: "",
      text_image: null,
      message: '',
      quantity: 1,

      authority_fee: 0,
      shipping_fee: 0,
      discount: 0,

      bill_name: "",
      bill_phone: "",
      bill_postcode: "",
      bill_city: "",
      bill_address: "",
      bill_address_type: "",


      ship_name: "",
      ship_phone: "",
      ship_postcode: "",
      ship_city: "",
      ship_address: "",
      ship_address_type: "",

      delivery_date: "",
      delivery_time: "",

      payment_method: "",
      expiry: "",

      discount_code: "",
    }
  }),
  selected_card: null,
  setSelectedCard: (data) => set({ selected_card: data }),
  voucher: null,
  setVoucher: (data) => set({ voucher: data }),
  voucher_info: null,
  setVoucherInfo: (data) => set({ voucher_info: data }),
  address_source: { is_from_create: false, type: 'billing' },
  setAddressSource: (data) => set({ address_source: data }),
  bill_address: null,
  setBillAddress: (data) => set({ bill_address: data }),
  ship_address: null,
  setShipAddress: (data) => set({ ship_address: data }),
  is_ship_same_as_bill: true,
  setIsShipSameAsBill: (data) => set({ is_ship_same_as_bill: data }),
  clientSecret: '',
  setClientSecret: (data) => set({ clientSecret: data }),
  payment_status: 'init',
  setPaymentStatus: (data) => set({ payment_status: data }),
  is_pay_disabled: true,
  setIsPayDisabled: (data) => set({ is_pay_disabled: data }),
}));


export const getVoucherInfo = async (code) => {
  try {
    const { setVoucherInfo, setCreateCardForm, create_card_form, setVoucher } = useCreateRequestStore.getState();
    if (!code) {
      Toastr({ message: t('Enter a voucher!'), type: 'error' })
      return;
    }

    setLoading(true)
    const res = await axios.post(kuGetVoucherInfo, {
      voucher_code: code,
    });
    console.log('getVoucherInfo: ', res.data);

    if (res.data.success) {
      setVoucherInfo(res.data.data);
      setCreateCardForm({ ...create_card_form, discount: res?.data?.data?.amount, discount_code: res?.data?.data?.voucher_code });
      setVoucher(null)
    } else {
      Toastr({ message: res.data.message, type: 'error' })
    }
    setLoading(false);
  } catch (error) {
    console.log('getVoucherInfo: ', error);
    Toastr({ message: t('An error occurred!'), type: 'error' })
    setLoading(false)
  }
}


export const getStripeClientSecret = async (amount = 0, payment_id = null, is_order_info_add_required) => {
  try {
    const { setClientSecret, } = useCreateRequestStore.getState();

    setLoading(true)
    const res = await axios.post(kuSetupStripPaymentIntent, {
      amount: amount,
      payment_id: payment_id,
    });
    console.log('getStripeClientSecret: ', res.data);

    if (res.data.success) {
      setClientSecret(res.data.data.clientSecret);
      is_order_info_add_required && addAndVerifyOrderInfoFromServer(res.data.data.payment_id);
    } else {
      Toastr({ message: res.data.message, type: 'error' });
    }
    setLoading(false);
  } catch (error) {
    console.log('getStripeClientSecret: ', error);
    Toastr({ message: t('An error occurred!'), type: 'error' });
    setLoading(false);
  }
}

export const addAndVerifyOrderInfoFromServer = async (payment_id) => {
  const { create_card_form } = useCreateRequestStore.getState();
  try {
    let form = { ...create_card_form };
    form.payment_id = payment_id;
    form.payment_method = 'card';

    console.log('addAndVerifyOrderInfoFromServer: ', form);
    // return;
    setLoading(true)
    const res = await axios.post(kuAddCustomerOrder, form);
    console.log('addAndVerifyOrderInfoFromServer: ', res.data);
    console.log('addAndVerifyOrderInfoFromServer2: ', res?.data?.order?.id);

    if (res.data.success) {
      localStorage.setItem('order_id', res?.data?.data?.order?.id);
      localStorage.setItem('payment_id', res?.data?.data?.payment_data?.payment_id);
      Toastr({ message: res.data.message, type: 'success' });
    } else {
      Toastr({ message: res.data.message, type: 'error' });
    }
    setLoading(false);
  } catch (error) {
    console.log('addAndVerifyOrderInfoFromServer: ', error);
    Toastr({ message: t('An error occurred!'), type: 'error' });
    setLoading(false);
  }
}

export const confirmOrder = async (order_id, payment_intent) => {
  const { setPaymentStatus } = useCreateRequestStore.getState();
  try {
    let form = {};
    form.payment_id = payment_intent;
    form.order_id = order_id;

    console.log('confirmOrder: ', form);
    setLoading(true)
    const res = await axios.post(kuConfirmCustomerOrder, form);
    console.log('confirmOrder: ', res.data);

    if (res.data.success) {
      Toastr({ message: res.data.message, type: 'success' });
      setLoading(false);
      setPaymentStatus('success');
      return true;
    } else {
      Toastr({ message: res.data.message, type: 'error' });
      setLoading(false);
      if (res.data.message === 'Payment Verification failed')
        return false;
      else {
        setPaymentStatus('failed');
        return;
      }
    }

  } catch (error) {
    console.log('confirmOrder: ', error);
    Toastr({ message: t('An error occurred!'), type: 'error' });
    setLoading(false);
    setPaymentStatus('failed');
    return false;
  }
}


export default useCreateRequestStore;