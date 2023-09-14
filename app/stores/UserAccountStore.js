import axios from 'axios';
import i18next, { t } from 'i18next';
import create from 'zustand'
import { iUserVerificationInfo, kSubmitUserVerificationInfo, kuChangeLanguage, kuDeleteAccount, kuDeleteAccountInfo } from '../utils/Url';
import { Toastr } from '../utils/UtilityFunctions';
import useUtilityStore from './UtilityStore';


const { setLoading } = useUtilityStore.getState();

const useUserAccountStore = create((set, get) => ({
  verification_method: 'mncard',
  setVerificationMethod: (data) => set({ verification_method: data }),
  front_image: null,
  setFrontImage: (data) => set({ front_image: data }),
  back_image: null,
  setBackImage: (data) => set({ back_image: data }),
  user_verification_info: null,
  setUserVerificationInfo: (data) => set({ user_verification_info: data }),
  verification_status: 'failed', // verify, verified, failed, pending
  setVerificationStatus: (data) => set({ verification_status: data }),
  is_verification_form_needed: false,
  setIsVerificationFormNeeded: (data) => set({ is_verification_form_needed: data }),
  app_language: 'ja',
  setAppLanguage: (data) => set({ app_language: data }),
  is_on: false,
  setIsOn: (data) => set({ is_on: data }),
  is_show_account_delete_modal: false,
  setIsShowAccountDeleteModal: (data) => set({ is_show_account_delete_modal: data }),
  is_show_account_delete_confirm_modal: false,
  setIsShowAccountDeleteConfirmModal: (data) => set({ is_show_account_delete_confirm_modal: data }),
  delete_account_info: null,
  setDeleteAccountInfo: (data) => set({ delete_account_info: data }),
  is_user_identity: false,
  setIsUserIdentity: (data) => set({ is_user_identity: data }),
}));


export const getUserVerificationInfo = async () => {
  try {
    const { setUserVerificationInfo } = useUserAccountStore.getState();

    setLoading(true)
    const res = await axios.get(iUserVerificationInfo);
    console.log('getUserVerificationInfo: ', res.data);

    if (res.data.success) {
      setUserVerificationInfo(res.data.data);
      localStorage.setItem('gifty_user_verification_info', JSON.stringify(res.data.data));
    } else {
      Toastr({ message: res.data.message, type: 'error' })
    }
    setLoading(false);
  } catch (error) {
    console.log('getUserVerificationInfo: ', error);
    Toastr({ message: t('An error occurred!'), type: 'error' })
    setLoading(false)
  }
}

export const submitUserVerificationInfo = async () => {
  const { front_image, back_image, verification_method, setIsVerificationFormNeeded } = useUserAccountStore.getState();

  if (front_image == null) {
    Toastr({ message: t('Please upload front image!'), type: 'warning' });
    return;
  }
  if (back_image == null) {
    Toastr({ message: t('Please upload back image!'), type: 'warning' });
    return;
  }

  try {
    setLoading(true)
    const res = await axios.post(kSubmitUserVerificationInfo, {
      vid_front: front_image,
      vid_back: back_image,
      type: verification_method,
    });
    console.log('submitUserVerificationInfo: ', res.data);

    if (res.data.success) {
      getUserVerificationInfo();
      setIsVerificationFormNeeded(false);
    } else {
      Toastr({ message: res.data.message, type: 'error' })
    }
    setLoading(false);
  } catch (error) {
    console.log('submitUserVerificationInfo: ', error);
    Toastr({ message: t('An error occurred!'), type: 'error' })
    setLoading(false)
  }
}

export const changeLanguage = async (code = 'en') => {
  try {
    const { setAppLanguage, app_language } = useUserAccountStore.getState();

    if (app_language == code) return;
    setLoading(true);
    const res = await axios.post(kuChangeLanguage, { 'code': code });
    console.log('changeLanguage: ', res.data);

    if (res.data.success) {
      setAppLanguage(code);
      localStorage.setItem('gifty_app_lang_code', code);
      i18next.changeLanguage(code);
      Toastr({ message: res.data.message, type: 'success' });
      setLoading(false);
      return true;
    } else {
      Toastr({ message: res.data.message, type: 'error' });
      setLoading(false);
      return false;
    }
  } catch (error) {
    console.log('changeLanguage: ', error);
    Toastr({ message: t('An error occurred!'), type: 'error' })
    setLoading(false)
    return false;
  }
}

export const getDeleteAccountInfo = async () => {
  try {
    const { setDeleteAccountInfo } = useUserAccountStore.getState();

    setLoading(true);
    const res = await axios.get(kuDeleteAccountInfo + "?lang=" + localStorage.getItem('gifty_app_lang_code'));
    console.log('getDeleteAccountInfo: ', res.data);

    if (res.data.success) {
      setDeleteAccountInfo(res.data.data);
    } else {
      Toastr({ message: res.data.message, type: 'error' });
    }
    setLoading(false);
  } catch (error) {
    console.log('getDeleteAccountInfo: ', error);
    Toastr({ message: t('An error occurred!'), type: 'error' });
    setLoading(false);
  }
}


export const deleteAccount = async () => {
  try {
    setLoading(true);
    const res = await axios.post(kuDeleteAccount);
    console.log('deleteAccount: ', res.data);

    if (res.data.success) {
      Toastr({ message: res.data.message, type: 'info' });
      setLoading(false);
      return true;
    } else {
      Toastr({ message: res.data.message, type: 'error' });
      setLoading(false);
      return false;
    }
  } catch (error) {
    console.log('deleteAccount: ', error);
    Toastr({ message: t('An error occurred!'), type: 'error' });
    setLoading(false);
    return false;
  }
}



export default useUserAccountStore;