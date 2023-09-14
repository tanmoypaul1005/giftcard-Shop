import axios from 'axios';
import create from 'zustand'
import { shops_data_url } from '../utils/Url';
import { Toastr } from '../utils/UtilityFunctions';
import useUtilityStore from './UtilityStore';
import i18next, { t } from 'i18next';

const { setLoading } = useUtilityStore.getState()

const useShopStore = create((set, get) => ({
  shop_data: [],
  setShopData: (data) => set({ shop_data: data }),
  temp_shop_data: [],
  setTempShopData: (data) => set({ temp_shop_data: data }),
  search_key: '',
  setSearchKey: (key) => set({ search_key: key }),
}));


export const getShopData = async () => {
  try {
    const { setShopData, setTempShopData } = useShopStore.getState();

    setLoading(true)
    const res = await axios.get(shops_data_url + '?is_active=1');
    console.log('getShopData: ', res.data);

    if (res.data.success) {
      setShopData(res.data.data);
      setTempShopData(res.data.data);
    } else {
      Toastr({ message: res.data.message, type: 'error' })
    }
    setLoading(false);
  } catch (error) {
    console.log('getShopData: ', error);
    Toastr({ message: t('An error occurred!'), type: 'error' })
    setLoading(false)
  }
}


export default useShopStore