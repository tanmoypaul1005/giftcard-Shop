import axios from 'axios';
import create from 'zustand'
import { home_url, iContactUs, kuGetGeneralInfo } from '../utils/Url';
import { Toastr } from '../utils/UtilityFunctions';
import useUtilityStore from './UtilityStore';
import i18next, { t } from 'i18next';

const { setLoading } = useUtilityStore.getState();

const useGeneralStore = create((set) => ({
    home_data: {},
    setHomeData: (data) => {
        set({ home_data: data });
        localStorage.setItem('general_info', JSON.stringify(data?.general_info));
    },
    is_axios_init: false,
    setIsAxiosInit: (data) => set({ is_axios_init: data }),
    general_info: {},
    setGeneralInfo: (data) => set({ general_info: data }),

}))


export const getHomeData = async () => {
    try {
        const { setHomeData } = useGeneralStore.getState();

        setLoading(true)
        const res = await axios.get(home_url);
        console.log('getHomeData: ', res.data);

        if (res.data.success) {
            setHomeData(res.data.data);
        } else {
            Toastr({ message: res.data.message, type: 'error' })
        }
        setLoading(false);
    } catch (error) {
        console.log('getHomeData: ', error);
        Toastr({ message: t('An error occurred!'), type: 'error' })
        setLoading(false)
    }
}

export const contactUs = async (name = '', email = '', subject = '', message = '') => {
    try {
        setLoading(true)
        const res = await axios.post(iContactUs, { name: name, email: email, subject: subject, message: message });
        console.log('contactUs: ', res.data);

        if (res.data.success) {
            Toastr({ message: t('Thank you for your feedback.'), type: 'success' })
            setLoading(false);
            return true;
        } else {
            Toastr({ message: res.data.message, type: 'error' })
            setLoading(false);
            return false;
        }
    } catch (error) {
        console.log('contactUs: ', error);
        Toastr({ message: t('An error occurred!'), type: 'error' })
        setLoading(false)
        return false;
    }
}

export const getGeneralInfo = async (type = 'privacy-policy') => {
    try {
        const { setGeneralInfo } = useGeneralStore.getState();

        setLoading(true)
        const res = await axios.get(kuGetGeneralInfo + "?type=" + type + "&lang=" + localStorage.getItem('gifty_app_lang_code'));
        console.log('getGeneralInfo: ', res.data);

        if (res.data.success) {
            setGeneralInfo(res.data.data);
        } else {
            Toastr({ message: res.data.message, type: 'error' })
        }
        setLoading(false);
    } catch (error) {
        console.log('getGeneralInfo: ', error);
        Toastr({ message: t('An error occurred!'), type: 'error' })
        setLoading(false)
    }
}


export default useGeneralStore;