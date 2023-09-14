import axios from 'axios';
import create from 'zustand'
import { kuOrderHistory, kuSubmitOrderFeedback } from '../utils/Url';
import { Toastr } from '../utils/UtilityFunctions';
import useUtilityStore from './UtilityStore';
import i18next, { t } from 'i18next';


const { setLoading } = useUtilityStore.getState()

const useOrderHistoryStore = create((set, get) => ({
    orders_data: {},
    setOrdersData: (data) => {
        // console.log('data', data);
        set({ orders: data.data });
        set({ paginationInfo: { current_page: data.current_page, last_page: data.last_page } });
    },
    orders: [],
    setOrders: (data) => set({ orders: data }),
    selected_order: {},
    setSelectedOrder: (data) => set({ selected_order: data }),
    paginationInfo: {
        current_page: 1,
        last_page: 1,
    },
    setPaginationInfo: (data) => set({ paginationInfo: data }),
    is_pagination_loading: false,
    setIsPaginationLoading: (data) => set({ is_pagination_loading: data }),
    max_and_min_date: { max_date: null, min_date: null },
    setMaxAndMinDate: (data) => set({ max_and_min_date: data }),
    is_status_cancelled: false,
    setIsStatusCancelled: (data) => set({ is_status_cancelled: data }),
}))


export const setOrdersFoo = async (min_date = null, max_date = null) => {
    try {
        let body = {};
        if (min_date && max_date) body = { min_date: min_date, max_date: max_date };
        useOrderHistoryStore.getState().is_status_cancelled && (body.status = 'canceled')
        const { setOrdersData } = useOrderHistoryStore.getState();
        setLoading(true);
        console.log('setOrdersFoo body: ', body);
        const res = await axios.post(kuOrderHistory + '?take=10', body);
        console.log('setOrdersFoo: ', res.data);

        if (res.data.success) {
            setOrdersData(res.data.data);
        } else {
            Toastr({ message: res.data.message, type: 'error' })
        }
        setLoading(false)
    } catch (error) {
        console.log('setOrdersFoo: ', error);
        Toastr({ message: t('An error occurred!'), type: 'error' })
        setLoading(false)
    }
}

export const setPaginateOrdersFoo = async () => {
    try {
        const { setOrders, setPaginationInfo, setIsPaginationLoading, orders, paginationInfo } = useOrderHistoryStore.getState();

        if (paginationInfo.current_page >= paginationInfo.last_page) return;
        setIsPaginationLoading(true)
        const res = await axios.post(kuOrderHistory + "?page=" + (paginationInfo.current_page + 1) + "&take=10");
        console.log('setPaginateOrdersFoo: ', res.data);

        if (res.data.success) {
            console.log('pg', paginationInfo);
            setOrders([...orders, ...res.data.data.data]);
            setPaginationInfo({ current_page: res.data.data.current_page, last_page: res.data.data.last_page })
        } else {
            Toastr({ message: res.data.message, type: 'error' })
        }
        setIsPaginationLoading(false)
    } catch (error) {
        console.log('setPaginateOrdersFoo: ', error);
        Toastr({ message: t('An error occurred!'), type: 'error' })
        setIsPaginationLoading(false)
    }
}



export const submitOrderFeedback = async (order_id, rate, review) => {
    const { selected_order, setSelectedOrder } = useOrderHistoryStore.getState();

    try {
        console.log('order_id', order_id, rate, review);
        if (order_id === null) {
            Toastr({ message: t('Order id is required!'), type: 'error' })
            return;
        } else if (rate === null) {
            Toastr({ message: t('Rate is required!'), type: 'error' })
            return;
        } else if (review === null) {
            Toastr({ message: t('Review is required!'), type: 'error' })
            return;
        }

        setLoading(true);
        const res = await axios.post(kuSubmitOrderFeedback, {
            order_id: order_id,
            rate: rate,
            review: review
        });
        console.log('submitOrderFeedback: ', res.data);

        if (res.data.success) {
            setSelectedOrder({ ...selected_order, review: review });
            setOrdersFoo();

            Toastr({ message: t('Your feedback has been submitted'), type: 'success' });
            setLoading(false);
            return true;
        } else {
            Toastr({ message: res.data.message, type: 'error' })
            setLoading(false);
            return false;
        }
    } catch (error) {
        console.log('submitOrderFeedback: ', error);
        Toastr({ message: t('An error occurred!'), type: 'error' })
        setLoading(false);
        return false;
    }
}
export const setOrderStatus = (status) => {
    switch (status) {
        case 'payment_due':
            return 'Checkout Pending';
        case 'checkout_due':
            return 'Checkout Due';

        default:
            return status;
    }
}


export default useOrderHistoryStore